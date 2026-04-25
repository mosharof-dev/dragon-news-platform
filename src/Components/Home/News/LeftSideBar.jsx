import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div className=''>
            <ul className="flex flex-col gap-2">
          {categories.news_category.map((category, index) => {
          
           

            return (
              <li 
                key={category.category_id}
                className={`px-4 py-3 rounded-lg cursor-pointer text-center font-medium transition-colors  ${activeId === category.category_id && "bg-gray-200 text-gray-900" }`}
              >
                <Link className='' href={`/category/${category.category_id}`}>{category.category_name}</Link>
              </li>
            );
          })}
        </ul>
        </div>
    );
};

export default LeftSideBar;