import React from 'react';
import MenuGrid from '../components/MenuGrid';
import { MenuItem } from '../types/menu';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuPageProps {
  items: MenuItem[];
  title: string;
  description: string;
}

export default function NorthIndianMenu() {
  const items = MENU_ITEMS.filter(item => item.category === 'north');

  return (
    <div className="pt-16">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2070)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">North Indian Delicacies</h1>
          <p className="text-xl max-w-2xl text-center">
            Experience the rich, aromatic flavors of North India
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <MenuGrid items={items} />
      </div>
    </div>
  );
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    category: 'north'
  },
  // Add more North Indian items
];