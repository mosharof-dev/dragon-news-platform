
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsDetailById } from '../../category/[id]/page';
import { IoArrowBackCircle } from 'react-icons/io5';

const NewsDetailPage = async ({ params }) => {
    const { id } = await params; 
    
 
    const newsData = await getNewsDetailById(id);

    
    const news = Array.isArray(newsData) ? newsData[0] : newsData;

    if (!news) {
        return (
            <div className="p-10 text-center text-red-500 font-medium border border-gray-200 rounded-md">
                News data not found! Please check the ID.
            </div>
        );
    }

    return (
        <div className=" max-w-7xl mx-auto p-4 md:p-6 border border-gray-200 rounded-md bg-white shadow-sm">
            
            {/* Image Section - SAFETY FIX 2 Applied */}
            <div className="relative w-full h-62.5 md:h-100 mb-5 bg-gray-100 rounded-md overflow-hidden">
                {news?.image_url ? (
                    <Image
                        src={news.image_url}
                        alt={news?.title || 'News Details Image'}
                        fill
                        unoptimized={true}
                        className="object-cover"
                        priority
                    />
                ) : (
                  
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Content Section */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-4">
                {news?.title}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                {news?.details}
            </p>

            {/* Button Section */}
            <Link 
                href={`/category/${news?.category_id || ''}`} 
                className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-rose-700 text-white px-5 py-2.5 rounded text-sm font-medium transition-colors"
            >
                <IoArrowBackCircle className="w-5 h-5" />
                All news in this category
            </Link>

        </div>
    );
};

export default NewsDetailPage;