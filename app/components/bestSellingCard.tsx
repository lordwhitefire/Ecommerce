import React, { useState } from 'react';


interface BestSellingCardProps { 
  productName: string;
  productImage: string;
  productCurrentPrice: number;
  productOldPrice: number;
  productRating: number;
  productNumReviews: number;
}

const BestSellingCard: React.FC<BestSellingCardProps> = ({
  productName,
  productImage,
  productCurrentPrice,
  productOldPrice,
  productRating,
  productNumReviews,
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
          <div className="flex-col flex gap-2">
            <div className="w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full">
              <span className='icon-[ph--heart] text-black h-5 w-5'></span>
            </div>
            <div className="w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full">
              <span className='icon-[ph--eye] text-black h-5 w-5'></span>
            </div>
          </div>
        </div>
        <img className="w-[12rem] relative h-[8rem] object-contain" src={productImage} alt="Product" />
        <div className={`${
          isHovered ? 'visible' : 'invisible'
        } text-white text-base relative top-[1.2rem] w-[270px] flex justify-center items-center h-[41px] bg-black rounded-bl rounded-br font-medium font-['Poppins'] leading-normal`}
        ><p>Add To Cart</p></div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">{productName}</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${productCurrentPrice}</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">${productOldPrice}</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            {/* Assuming a full star is represented by the icon, adjust as needed */}
            {Array.from({ length: Math.floor(productRating) }, (_, index) => (
              <span key={index} className='icon-[material-symbols--star] text-customColor h-5 w-5'></span>
            ))}
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
            ({productNumReviews})
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
