import LeftSideBar from "@/Components/Home/News/LeftSideBar";
import RightSideBar from "@/Components/Home/News/RightSideBar";


const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
};

const CategoryLayout = async ({ children, params }) => {
  const { id } = await params;
  const categories = await getCategories();

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 mt-8">
      {/* Left Sidebar - Fixed during navigation */}
      <div className="col-span-3">
        <h2 className="font-bold text-xl mb-4 text-gray-800">All Category</h2>
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      {/* Main Content (Children will change) */}
      <div className="col-span-6">
        {children}
      </div>

      {/* Right Sidebar - Fixed */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoryLayout;