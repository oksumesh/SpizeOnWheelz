import React from 'react';
import MenuGrid from '../components/MenuGrid';
import { MenuItem } from '../types/menu';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SouthIndianMenu() {
  const items = MENU_ITEMS.filter(item => item.category === 'south');

  return (
    <div className="pt-16">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=2070)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">South Indian Specialties</h1>
          <p className="text-xl max-w-2xl text-center">
            Discover the authentic tastes of South India
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
    id: '2',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potatoes',
    price: 11.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=800',
    category: 'south'
  },
  // Add more South Indian items
];