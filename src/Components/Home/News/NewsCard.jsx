import Image from 'next/image';
import Link from 'next/link';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

export default function NewsCard({ newsData }) {
  const { title, author, image_url, details, rating, total_view, _id } = newsData;

  // Formatting date
  const formattedDate = author?.published_date?.split(' ')[0];

  return (
    
    <article className="w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-6 transition-all hover:shadow-md">
      
      {/* --- Card Header --- */}
      <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image 
            src={author?.img} 
            alt={author?.name || "Author thumbnail"}
            width={40} 
            height={40} 
            className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10" 
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{author?.name || 'Unknown Author'}</h4>
            <p className="text-xs text-gray-500">{formattedDate || 'Unknown Date'}</p>
          </div>
        </div>
        
        {/* Icons */}
        <div className="flex gap-3 sm:gap-4 text-gray-500">
          <button className="hover:text-gray-800 text-lg sm:text-xl"><CiBookmark /></button>
          <button className="hover:text-gray-800 text-lg sm:text-xl"><CiShare2 /></button>
        </div>
      </div>

      {/* --- Card Body --- */}
      <div className="p-3 sm:p-4">
       
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
          {title}
        </h2>
        
        {/* Mobile e height 48, tablet e 64, desktop e 72 */}
        <div className="relative w-full h-48 sm:h-64 lg:h-72 mb-3 sm:mb-4">
          <Image 
            src={image_url} 
            alt={title || "News Image"}
            fill
            unoptimized={true}
            className="object-cover rounded-md" 
          />
        </div>
        
     
        <p className="text-gray-600 text-sm md:text-base line-clamp-3 sm:line-clamp-4 mb-2">
          {details}
        </p>
        
        <Link href={`/news/${_id}`} className="text-orange-500 font-semibold text-sm sm:text-base hover:underline">
          Read More
        </Link>
      </div>

      {/* --- Card Footer --- */}
      <div className="flex justify-between items-center p-3 sm:p-4 border-t border-gray-100 text-sm md:text-base">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex text-orange-400 text-sm sm:text-lg">
             <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <span className="text-gray-700 font-medium ml-1">{rating?.number}</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600 text-sm sm:text-base">
          <span className='text-lg sm:text-xl'><IoEye /></span> {total_view}
        </div>
      </div>
      
    </article>
  );
}