import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import BestSellingCard from './bestSellingCard';
import bestSellingData from './bestSellingData';

const BestSelling: React.FC = () => {
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
    <div className='relative top-[30rem]   mb-[5rem] mr-[3.7rem] ml-[4rem]'>
      <div className='flex gap-x-2 items-center'>
        <div className='h-8 w-4 bg-red-500 rounded'></div>
        <p className='text-red-500 font-medium'>This Month</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='my-6 font-bold text-2xl'>Best Selling Products</p>
        <div className='flex justify-center items-center bg-red-500 mr-8 text-white rounded w-[10rem] h-[2.5rem]'>
        <p>
            View All Products
        </p>
        </div>
      </div>
      {/* Add your Flash Sales content here */}
    

     <div className='flex gap-4 overflow-x-scroll' style={{ scrollbarWidth: 'none' }} ref={containerRef}>
  {bestSellingData.map((bestSelling) => (
    <BestSellingCard key={bestSelling.id} {...bestSelling} />
  ))}
    </div>

    
    </div>
  );
};

export default BestSelling;
