import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import KeyboardCard from './keyboardCard';
import keyboardData from './keyboardData';
import CategoryCard from './categoryCard';
import categoryData from './categoryData';

const CategoryComponent: React.FC = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, { scrollLeft: containerRef.current.scrollLeft - 230, duration: 0.5 });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, { scrollLeft: containerRef.current.scrollLeft + 230, duration: 0.5 });
    }
  };

  return (
    <div className='relative top-[30rem] border border-x-white border-t-white border-b-neutral-500 pb-[5rem] mb-[5rem] mr-[3.5rem] ml-[4rem]'>
      <div className='flex gap-x-2 items-center'>
        <div className='h-8 w-4 bg-red-500 rounded'></div>
        <p className='text-red-500 font-medium'>Categories</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='my-6 font-bold text-2xl'>Browse By Category</p>
        <div className='flex gap-x-2 mr-8'>
          <div
            className='w-[34px] h-[34px] flex justify-center items-center bg-neutral-200 rounded-full cursor-pointer'
            onClick={scrollLeft}
          >
            <span className='icon-[solar--arrow-left-outline] text-black h-5 w-5'></span>
          </div>
          <div
            className='w-[34px] h-[34px] flex justify-center items-center bg-neutral-200 rounded-full cursor-pointer'
            onClick={scrollRight}
          >
            <span className='icon-[solar--arrow-right-outline] text-black h-5 w-5'></span>
          </div>
        </div>
      </div>
      {/* Add your Flash Sales content here */}
    

     <div className='flex gap-4 overflow-x-scroll' style={{ scrollbarWidth: 'none' }} ref={containerRef}>
  {categoryData.map((category) => (
    <CategoryCard key={category.id} {...category} />
  ))}
    </div>
     
     
    </div>
  );
};

export default CategoryComponent;
