import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import gsap from 'gsap';
import "../tailwind.css?__remix_sideEffect__";


interface BannerProps {
  bannerIsExclusiveOpen: boolean;
  setBannerIsExclusiveOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerComponent: React.FC<BannerProps> = ({ bannerIsExclusiveOpen, setBannerIsExclusiveOpen }) => {
  const backgrounds = ['BANNER1', 'BANNER3', 'BANNER4', 'BANNER6', 'Frame1'];
  const [currentBackground, setCurrentBackground] = useState('BANNER1');
  const bannerRef = useRef(null);
  const currentIndex = backgrounds.indexOf(currentBackground);
      const nextIndex = (currentIndex + 1) % backgrounds.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
    
      gsap.to(bannerRef.current, {
        autoAlpha: 0,
        duration: 1,

        onStart: () => {
          setCurrentBackground(backgrounds[nextIndex]);
          gsap.fromTo(bannerRef.current, {
            autoAlpha: 0.3,
          }, {
            autoAlpha: 1,
            duration: 1,
          });
          
        },
      });
    }, 7000);
  
    return () => clearInterval(interval);
  }, [currentBackground, backgrounds]);
  
  const circle = (
    <animated.div
      className="flex justify-center w-[62rem] top-[27.5rem] absolute w-screen right-0 px-4 gap-x-4"
    >
      {backgrounds.map((banner, index) => (
        <span
          key={index}
          className={`icon-[bxs--circle] ${index === currentIndex ? 'text-red-500' : 'text-neutral-500'} h-3 w-3`}
        ></span>
      ))}
    </animated.div>
  );
  return (
    <div>
    <div ref={bannerRef}>
      {/* Your other content */}
      <div
        className={`flex  absolute w-[62rem] h-[25rem]  right-0 text-white ${currentBackground}`}
      >
        {/* Rest of your component remains unchanged */}
      </div>
      {circle}
    </div>
    </div>
  );
}




  // Repeat the structure for banner2, banner3, banner4, and banner5




export default BannerComponent;

  
  
  
  


  


  
  
  
  


  
