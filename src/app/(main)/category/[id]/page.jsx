import LeftSideBar from "@/Components/Home/News/LeftSideBar";
import RightSideBar from "@/Components/Home/News/RightSideBar";


const getCategories = async() => {
const res = await fetch('https://openapi.programming-hero.com/api/news/categories');

const data = await res.json()
return data.data ;
}

const getNewsByCategories = async(category_id) => {
const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);

const data = await res.json()
return data.data ;
}

const NewsCategoryPage = async({ params }) => {
    const { id } = await params;
    console.log(id, 'From NewsCategory Page');
  const categories = await getCategories(); 
  const news = await getNewsByCategories(id)
  console.log(news)
  
    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6 mt-8">
      
      {/* --- Left Sidebar: All Categories --- */}
  <div className="col-span-3">
        <h2 className="font-bold text-xl mb-4 text-gray-800">All Category</h2>
        <LeftSideBar categories={categories} activeId={id} />
        
  </div>
      {/* --- Main Content: All News --- */}
      <div className="bg-green-100 col-span-6 p-4 rounded-lg">
         All News Content Here
{
    news.length > 0 ?  news.map((n) => {
    return (
      <div key={n._id} className="p-2 rounded bg-red-300 m-4">
      
         <h2>{n.title}</h2>
      </div>
    ); 
  }): <h2>Not Found thi Page</h2>     
}
</div>

      {/* --- Right Sidebar: Social Icons --- */}
      <div className=" col-span-3  rounded-lg">
        <RightSideBar/>
      </div>

    </div>
    );
};

export default NewsCategoryPage;