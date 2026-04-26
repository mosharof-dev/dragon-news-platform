import Image from 'next/image';
import Link from 'next/link';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

export default function NewsCard({ newsData }) {
  // Destructuring the JSON data 
  const { title, author, image_url, details, rating, total_view } = newsData;

  // Formatting date if needed (Taking just the date part from "2022-08-24 17:27:34")
  const formattedDate = author?.published_date?.split(' ')[0];

  return (
    <article className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-sm m-4 overflow-hidden">
      
      {/* --- Card Header --- */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Image 
            src={author?.img} 
            // alt={author?.name} 
            alt={author?.name || "Author thumbnail"}
            width={40} 
            height={40} 
            className="rounded-full object-cover" 
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm md:text-base">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        
        {/* Icons Placeholder */}
        <div className="flex gap-4 text-gray-500">
          <button className="hover:text-gray-800 text-xl"><CiBookmark /></button>
          <button className="hover:text-gray-800 text-xl"><CiShare2 /></button>
        </div>
      </div>

      {/* --- Card Body --- */}
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-snug">
          {title}
        </h2>
        
        <div className="relative w-full h-56 md:h-64 mb-4">
          <Image 
            src={image_url} 
            // alt={author?.name} 
            alt={author?.name || "Author thumbnail"}
            fill 
            className="object-cover rounded-md" 
          />
        </div>
        
       
        <p className="text-gray-600 text-sm md:text-base line-clamp-4 mb-2">
          {details}
        </p>
        <Link href={`/news/${newsData._id}`} className="text-orange-500 font-semibold text-sm hover:underline">
          Read More
        </Link>
      </div>

      {/* --- Card Footer --- */}
      <div className="flex justify-between items-center p-4 border-t border-gray-100 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 text-xl"><FaStar /></span>
          <span className="text-orange-400 text-xl"><FaStar /></span>
          <span className="text-orange-400 text-xl"><FaStar /></span>
          <span className="text-orange-400 text-xl"><FaStar /></span>
          <span className="text-orange-400 text-xl"><FaStar /></span>
          <span className="text-gray-700 ">{rating.number}</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600">
          <span className='text-xl'><IoEye /></span> {total_view}
        </div>
      </div>
      
    </article>
  );
}