import React from 'react';
import CuisineSection from '../components/CuisineSection';
import { MenuItem } from '../types/menu';

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
  // Add more menu items as needed
];

export default function Home() {
  const northIndianItems = MENU_ITEMS.filter(item => item.category === 'north');
  const southIndianItems = MENU_ITEMS.filter(item => item.category === 'south');

  return (
    <div className="pt-16">
      <CuisineSection
        title="North Indian Delicacies"
        description="Experience the rich, aromatic flavors of North India"
        backgroundImage="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2070"
        items={northIndianItems}
        type="north"
      />
      
      <CuisineSection
        title="South Indian Specialties"
        description="Discover the authentic tastes of South India"
        backgroundImage="https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=2070"
        items={southIndianItems}
        type="south"
      />
    </div>
  );
}