export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: number;
  isVegetarian: boolean;
  image?: string;
  category: string;
  foodCategory: string;
  rating?: number;
  ratingCount?: number;
  isPopular?: boolean;
  
}