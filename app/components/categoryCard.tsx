import React, { useState } from 'react';


interface CategoryCardProps {
  productName: string;
  productImage: string;
 
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  productName,
  productImage,

}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-col  justify-start items-start gap-4 inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[270px] h-[250px] flex flex-col items-center bg-neutral-200 rounded">
        <div className="flex justify-between w-full px-3 pt-3">
          <div className="text-neutral-50 text-xs font-normal px-3 py-1 h-[1.2rem] font-['Poppins'] rounded leading-[18px]"></div>
         
        </div>
        <img className="w-[230px] relative h-[210px] object-contain" src={productImage} alt="Product" />
    
      </div>
      <div className="w-[270px] justify-center items-center gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">{productName}</div>
     
       
      </div>
    </div>
  );
};

export default CategoryCard;
