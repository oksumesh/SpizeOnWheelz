export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: number;
  isVegetarian: boolean;
  image?: string;
  category: 'riverstone' | 'schofields';
  foodCategory: string;
  rating?: number;
  ratingCount?: number;
  isPopular?: boolean;
  
}