import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsDetailById } from '../../category/[id]/page';
import { IoArrowBackCircle } from 'react-icons/io5';

export const generateMetadata = async ({ params }) => {
    const { id } = await params; 
    const newsData = await getNewsDetailById(id);
    
   
    const news = Array.isArray(newsData) ? newsData[0] : newsData;

   
    if (!news) {
        return {
            title: 'News Not Found | The Dragon News',
        }
    }

    return {
        title: `${news.title} | The Dragon News`, 
        description: news.details, 
    }
}
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
       
<div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 mt-6">
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm p-4 md:p-6">
               
                <div className="relative w-full aspect-video md:h-100 lg:h-112.5 mb-6 bg-gray-100 rounded-lg overflow-hidden">
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
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {news?.title}
                </h1>

                {/* Fixed Justify Issue for Mobile */}
                <p className="text-gray-700 leading-relaxed mb-8 text-left md:text-justify text-base md:text-lg">
                    {news?.details}
                </p>

                {/* Button Section */}
                <Link 
                    href={`/category/${news?.category_id || '01'}`} 
                    className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-rose-700 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-medium transition-colors w-fit"
                >
                    <IoArrowBackCircle className="w-6 h-6" />
                    All news in this category
                </Link>

            </div>
        </div>
    );
};

export default NewsDetailPage;