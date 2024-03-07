// categoryData.ts
import Image from '../assets/images/ak-900-01-500x500-1-1.png';
import Image2 from '../assets/images/g92-2-500x500-1-1.png';
import Image3 from '../assets/images/g27cq4-500x500-1-1.png';
import Image4 from '../assets/images/ideapad-gaming-3i-01-500x500-1-2.png';
import Image5 from '../assets/images/sam-moghadam-khamseh-kvmdstrgobm-unsplash-1-2.png';


export interface Category {
    id: number;
    productName: string;
    productImage: string; // Assuming this is a URL or path to an image
  
  }
  
  const categoryData: Category[] = [
    {
      id: 1,
      productName: 'AK-900 Wired Keyboard',
      productImage: Image, // Adjust with your image path or URL
      
    },
    {
      id: 2,
      productName: 'Another Keyboard',
      productImage: Image2, // Adjust with your image path or URL
    
    },
    {
        id: 3,
        productName: 'Another Keyboard',
        productImage: Image3, // Adjust with your image path or URL
 
      },
      {
        id: 4,
        productName: 'Another Keyboard',
        productImage: Image4, // Adjust with your image path or URL
      
      },
      {
        id: 5,
        productName: 'Another Keyboard',
        productImage: Image5, // Adjust with your image path or URL
     
      },
    // Add more keyboard data entries as needed
  ];
  
  export default categoryData;
  