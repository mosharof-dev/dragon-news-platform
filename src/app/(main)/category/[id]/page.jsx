import NewsCard from "@/Components/Home/News/NewsCard";


export const getNewsDetailById = async(news_id) => {
const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);

const data = await res.json()
return data.data ;
}


const getNewsByCategories = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsByCategories(id);

  return (
    <>
      <h2 className="font-bold text-xl mb-4 text-gray-800">Dragon News Home</h2>
      {news.length > 0 ? (
        news.map((newsData) => (
          <NewsCard key={newsData._id} newsData={newsData} />
        ))
      ) : (
       
    <div className="flex flex-col items-center justify-center min-h-100 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 p-8 text-center">
  <div className="bg-gray-100 p-4 rounded-full mb-4">
    
    <svg 
      className="w-12 h-12 text-gray-400" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v4a2 2 0 002 2h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12h10M7 16h10" />
    </svg>
  </div>
  
  <h2 className="text-2xl font-semibold text-gray-700 mb-2">
    No News Found!
  </h2>
  
  <p className="text-gray-500 max-w-xs mx-auto mb-6">
    Sorry, we couldn`t find any news in this category at the moment. Please check back later or try another category.
  </p>

 
</div>
      )}
    </>
  );
};

export default NewsCategoryPage;