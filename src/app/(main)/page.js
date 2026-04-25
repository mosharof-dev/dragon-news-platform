import { Asul } from "next/font/google";


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
        
        <ul className="flex flex-col gap-2">
          {categories.news_category.map((category, index) => {
          
            const isActive = index === 0; 

            return (
              <li 
                key={category.category_id}
                className={`px-4 py-3 rounded-lg cursor-pointer text-center font-medium transition-colors bg-gray-200 text-gray-900`}
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
  </div>
      {/* --- Main Content: All News --- */}
      <div className="bg-green-100 col-span-6 p-4 rounded-lg">
         All News Content Here
      </div>

      {/* --- Right Sidebar: Social Icons --- */}
      <div className="bg-yellow-100 col-span-3 p-4 rounded-lg">
         Social Icons Here
      </div>

    </div>
  );
}

export default Home;