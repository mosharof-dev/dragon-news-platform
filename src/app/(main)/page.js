import LeftSideBar from "@/Components/Home/News/LeftSideBar";
import RightSideBar from "@/Components/Home/News/RightSideBar";


const getCategories = async() => {
const res = await fetch('https://openapi.programming-hero.com/api/news/categories');

const data = await res.json()
return data.data ;
}

const Home = async () => {
  const categories = await getCategories();
  
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 mt-8">
      
      {/* --- Left Sidebar: All Categories --- */}
  <div className="col-span-3">
        <h2 className="font-bold text-xl mb-4 text-gray-800">All Category</h2>
        <LeftSideBar categories={categories} activeId={'01'} />
        
  </div>
      {/* --- Main Content: All News --- */}
      <div className="bg-green-100 col-span-6 p-4 rounded-lg">
         All News Content Here
      </div>

      {/* --- Right Sidebar: Social Icons --- */}
      <div className=" col-span-3  rounded-lg">
        <RightSideBar/>
      </div>

    </div>
  );
}

export default Home;