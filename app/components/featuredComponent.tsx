import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import KeyboardCard from './keyboardCard';
import keyboardData from './keyboardData';
import CategoryCard from './categoryCard';
import categoryData from './categoryData';
import Image4 from '../assets/images/69-694768-amazon-echo-png-clipart-transparent-amazon-echo-png-1.png';
import Image5 from '../assets/images/65-2e-8-2cd-7-0aa-652-2dd-78510-9a-45590-4c.png';
import Icon from '../assets/icons/quality-assurance-14.svg';

const FeaturedComponent: React.FC = () => {


  return (
    <div className='relative top-[30rem] pb-[5rem] mb-[5rem] mr-[3.5rem] ml-[4rem]'>
      <div className='flex gap-x-2 items-center'>
        <div className='h-8 w-4 bg-red-500 rounded'></div>
        <p className='text-red-500 font-medium'>Featured</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='my-6 font-bold text-2xl'>New Arrival</p>
     
      </div>
      {/* Add your Flash Sales content here */}
      <div className='flex  gap-x-6'>
        <div className='Featured1  h-[35rem] bg-black w-[35rem] '>
        <div className='text-white ml-[3rem] flex flex-col gap-4 relative top-[20rem] '>
            <h1 className='text-xl font-bold '>
            PlayStation 5
            </h1>
            <p className='font-medium text-sm'>
            Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className='h-[2rem] w-[8rem] border border-x-black border-t-black border-b-white'>
            Shop Now
            </button>
        </div>
        </div>
        <div className='h-[35rem] flex flex-col gap-y-4 w-[35rem]'>
          <div className='Featured2 h-[17rem] w-[35rem]'>
          <div className='text-white ml-[1.5rem] flex flex-col gap-4 relative top-[5rem] '>
            <h1 className='text-xl font-bold '>
            Women’s Collections
            </h1>
            <p className='font-medium text-sm'>
            Featured woman collections that <br /> give you another vibe.
            </p>
            <button className='h-[2rem] w-[8rem] border border-x-black border-t-black border-b-white'>
            Shop Now
            </button>
        </div>
          </div>
          <div className='flex h-[17rem] gap-x-4 w-[35rem]'>
        <div className='flex relative justify-center items-center bg-black h-[17rem] w-[17rem]'>
        <img className="w-[12rem] absolute h-[13rem] object-contain" src={Image4} alt="Product" />
        <div className='text-white -ml-[2.5rem] flex flex-col gap-2 relative top-[3rem] '>
            <h1 className='text-xl font-bold '>
            Speakers
            </h1>
            <p className='font-medium text-sm'>
            Amazon wireless speakers
            </p>
            <button className='h-[2rem] w-[8rem] border border-x-black border-t-black border-b-white'>
            Shop Now
            </button>
        </div>
        </div>
        <div className=' relative flex justify-center items-center bg-black  h-[17rem] w-[17rem]'>
        <img className="w-[12rem] absolute h-[13rem] object-contain" src={Image5} alt="Product" />
        <div className='text-white -ml-[2.5rem] flex flex-col gap-2 relative top-[3rem] '>
            <h1 className='text-xl font-bold '>
            Perfume
            </h1>
            <p className='font-medium text-sm'>
            GUCCI INTENSE OUD EDP
            </p>
            <button className='h-[2rem] w-[8rem] border border-x-black border-t-black border-b-white'>
            Shop Now
            </button>
        </div>
        </div>
          </div>
        </div>
      </div>

     <div className='flex mt-[10rem] justify-around gap-x-4'>
      <div className='flex flex-col items-center gap-y-4'>
       <div className='bg-black h-[5rem] border-[0.65rem] border-indigo-600 flex justify-center items-center w-[5rem] rounded-full'>
       <span className='icon-[iconamoon--delivery-fast] text-white h-9 w-9'></span>
       </div>
      <div>
      <h3 className='text-2xl text-center font-bold'>
       FAST DELIVERY
       </h3>
       <p className='text-base text-center font-medium'>
       Fast delivery for all orders 
       </p>
      </div>
      </div>
      <div className='flex flex-col items-center gap-y-4'>
       <div className='bg-black h-[5rem] border-[0.65rem] border-indigo-600 flex justify-center items-center w-[5rem] rounded-full'>
       <span className='icon-[ri--customer-service-line] text-white h-9 w-9'></span>
       </div>
      <div>
      <h3 className='text-2xl text-center font-bold'>
      24/7 CUSTOMER SERVICE
       </h3>
       <p className='text-base text-center font-medium'>
       Friendly 24/7 customer support
       </p>
      </div>
      </div>
      <div className='flex flex-col items-center gap-y-4'>
       <div className='bg-black h-[5rem] border-[0.65rem] border-indigo-600 flex justify-center items-center w-[5rem] rounded-full'>
       
       <img src={Icon} alt="quality icon " className='text-white h-9 w-9' />
       </div>
      <div>
      <h3 className='text-2xl text-center font-bold'>
      Quality Guarantee
       </h3>
       <p className='text-base text-center font-medium'>
       We Offer Quality Products for Your Satisfaction.
       </p>
      </div>
      </div>
     </div>
     
    </div>
  );
};

export default FeaturedComponent;
