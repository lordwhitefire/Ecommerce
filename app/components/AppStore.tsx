// src/components/AppStore.tsx
import React from 'react';

import img from "../assets/images/download-appstore-1.png"

const AppStore: React.FC = () => {
  return (
    <div className="relative w-[110px] h-[40px] bg-black">
      <img
        className="absolute w-[105px] h-[35px] top-[2px] left-[2px]"
        alt="Download appstore"
        src={img}
      />
    </div>
  );
};

export default AppStore;
