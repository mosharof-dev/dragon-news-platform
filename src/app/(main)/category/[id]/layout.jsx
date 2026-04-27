import LeftSideBar from "@/Components/Home/News/LeftSideBar";
import RightSideBar from "@/Components/Home/News/RightSideBar";

import { FiMenu } from "react-icons/fi"; 

const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
};

const CategoryLayout = async ({ children, params }) => {
  const { id } = await params;
  const categories = await getCategories();

  return (
   
    <div className="drawer lg:drawer-open max-w-7xl mx-auto mt-8">
      
      
      <input id="category-drawer" type="checkbox" className="drawer-toggle" />

      {/* --- Main Content Area (Middle + Right Sidebar) --- */}
      <div className="drawer-content flex flex-col">
        
       
        <div className="lg:hidden flex items-center p-4 bg-gray-50 mb-4 rounded-lg shadow-sm">
          <label htmlFor="category-drawer" className="btn btn-square btn-ghost drawer-button">
            <FiMenu className="text-2xl" />
          </label>
          <h2 className="ml-4 font-bold text-lg">Categories</h2>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 px-4 lg:px-0">
          
          
          <div className="lg:col-span-6">
            {children}
          </div>

          {/* Right Sidebar (3 columns on Desktop) */}
          <div className="lg:col-span-3">
            <RightSideBar />
          </div>

        </div>
      </div>

      {/* --- Left Sidebar (Drawer Side) --- */}
      <div className="drawer-side z-50">
        <label htmlFor="category-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        
        {/* Sidebar Background & Width */}
        <div className="menu  w-72 min-h-full bg-white text-base-content border-r lg:border-none">
          <h2 className="font-bold text-xl mb-4 text-gray-800">All Category</h2>
          <LeftSideBar categories={categories} activeId={id} />
        </div>
      </div>

    </div>
  );
};

export default CategoryLayout;