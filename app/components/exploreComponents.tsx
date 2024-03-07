import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ExploreCard from './exploreCard';
import exploreData from './exploreData';

const Explore: React.FC = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, { scrollLeft: containerRef.current.scrollLeft - 280, duration: 0.5 });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, { scrollLeft: containerRef.current.scrollLeft + 280, duration: 0.5 });
    }
  };

  return (
    <div className='relative top-[30rem] border border-x-white border-t-white border-b-neutral-500  mb-[4rem] mr-[3.5rem] ml-[4rem]'>
      <div className='flex gap-x-2 items-center'>
        <div className='h-8 w-4 bg-red-500 rounded'></div>
        <p className='text-red-500 font-medium'>Our Products</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='my-6 font-bold text-2xl'>Explore Our Products</p>
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
    

      <div className='grid grid-rows-2 grid-flow-col gap-4 overflow-x-scroll' style={{ scrollbarWidth: 'none' }} ref={containerRef}>
  {exploreData.map((explore, index) => (
    <ExploreCard key={explore.id} {...explore} />
  ))}
</div>



      <div className='bg-red-500 mx-auto text-white mt-16 mb-16 flex justify-center items-center rounded w-[10rem] h-[2.5rem]'>
        <p>
            View All Products
        </p>
      </div>
    </div>
  );
};

export default Explore;
