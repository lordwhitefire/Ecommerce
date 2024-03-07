// MidBanner.jsx

import React from 'react';
import midBannerImage from '../assets/images/BANNER_1.png'; // Replace with the actual path

const MidBanner = () => {
  return (
    <div className="relative top-[30rem] mb-[5rem]  rounded-2xl  ml-[4rem] mr-[4rem] flex justify-center items-center ">
      <img src={midBannerImage} alt="Banner Alt Text" className="w-full h-full object-cover" />
    </div>
  );
};

export default MidBanner;
