// keyboardData.ts
import Image from '../assets/images/ak-900-01-500x500-1-1.png';
import Image2 from '../assets/images/g92-2-500x500-1-1.png';
import Image3 from '../assets/images/g27cq4-500x500-1-1.png';
import Image4 from '../assets/images/ideapad-gaming-3i-01-500x500-1-2.png';
import Image5 from '../assets/images/sam-moghadam-khamseh-kvmdstrgobm-unsplash-1-2.png';


export interface BestSelling {
    id: number;
    productName: string;
    productImage: string; // Assuming this is a URL or path to an image
    productCurrentPrice: number;
    productOldPrice: number;
    productRating: number;
    productNumReviews: number;
  }
  
  const bestSellingData: BestSelling[] = [
    {
      id: 1,
      productName: 'AK-900 Wired Keyboard',
      productImage: Image, // Adjust with your image path or URL
      productCurrentPrice: 960,
      productOldPrice: 1160,
      productRating: 5,
      productNumReviews: 75,
    },
    {
      id: 2,
      productName: 'Another Keyboard',
      productImage: Image2, // Adjust with your image path or URL
      productCurrentPrice: 800,
      productOldPrice: 950,
      productRating: 4,
      productNumReviews: 60,
    },
    {
        id: 3,
        productName: 'Another Keyboard',
        productImage: Image3, // Adjust with your image path or URL
        productCurrentPrice: 600,
        productOldPrice: 1150,
        productRating: 4,
        productNumReviews: 30,
      },
      {
        id: 4,
        productName: 'Another Keyboard',
        productImage: Image4, // Adjust with your image path or URL
        productCurrentPrice: 840,
        productOldPrice: 990,
        productRating: 4,
        productNumReviews: 120,
      },
      {
        id: 5,
        productName: 'Another Keyboard',
        productImage: Image5, // Adjust with your image path or URL
        productCurrentPrice: 200,
        productOldPrice: 630,
        productRating: 4,
        productNumReviews: 56,
      },
    // Add more keyboard data entries as needed
  ];
  
  export default bestSellingData;
  