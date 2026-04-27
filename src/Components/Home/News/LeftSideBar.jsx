
import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
<div>
<ul className="flex flex-col gap-2">
  {categories.news_category.map((category) => {
      
      
      const isActive = activeId === category.category_id;

      return (
          <li key={category.category_id}>
              <Link 
                  href={`/category/${category.category_id}`}
                 
                  className={`block px-4 py-3 rounded-lg text-center font-medium transition-colors ${
                      isActive 
                      ? "bg-gray-200 text-gray-900" 
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
              >
                  {category.category_name}
              </Link>
          </li>
      );
  })}
</ul>
</div>
    );
};

export default LeftSideBar;