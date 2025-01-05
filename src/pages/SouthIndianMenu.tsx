import React, { useState } from 'react';
import MenuGrid from '../components/MenuGrid';
import { MenuItem } from '../types/menu';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SouthIndianMenu() {
  const [searchQuery, setSearchQuery] = useState('');
  const allItems = MENU_ITEMS.filter(item => item.category === 'south');
  
  const filteredItems = allItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <MenuGrid items={filteredItems} />
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
    category: 'south',
    foodCategory: 'Starter'
  },
  {
    id: 'S1',
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil soup and chutneys',
    price: 9.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Starter'
  },
  {
    id: 'S2',
    name: 'Vada',
    description: 'Crispy lentil doughnuts served with coconut chutney',
    price: 8.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Starter'
  },
  {
    id: 'S3',
    name: 'Uttapam',
    description: 'Thick rice pancake topped with onions, tomatoes, and chilies',
    price: 10.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Starter'
  },
  {
    id: 'S4',
    name: 'Hyderabadi Biryani',
    description: 'Fragrant rice layered with spiced meat and aromatics',
    price: 16.99,
    spiceLevel: 3,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Main Course'
  },
  {
    id: 'S5',
    name: 'Rasam',
    description: 'Traditional spiced tamarind soup',
    price: 7.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Main Course'
  },
  {
    id: 'S6',
    name: 'Appam with Stew',
    description: 'Lacy rice hoppers served with vegetable or chicken stew',
    price: 13.99,
    spiceLevel: 1,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Main Course'
  },
  {
    id: 'S7',
    name: 'Mysore Pak',
    description: 'Traditional ghee-based sweet made with gram flour',
    price: 6.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Dessert'
  },
  {
    id: 'S8',
    name: 'Filter Coffee',
    description: 'Traditional South Indian coffee with chicory',
    price: 4.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=800',
    category: 'south',
    foodCategory: 'Beverages'
  }
];