export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: 1 | 2 | 3;
  isVegetarian: boolean;
  image: string;
  category: 'north' | 'south';
}