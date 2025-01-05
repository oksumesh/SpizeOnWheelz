import React, { useState } from 'react';
import MenuGrid from '../components/MenuGrid';
import { MenuItem } from '../types/menu';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterBar from '../components/FilterBar';

interface MenuPageProps {
  items: MenuItem[];
  title: string;
  description: string;
}

export default function NorthIndianMenu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryType, setDietaryType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  
  const allItems = MENU_ITEMS.filter(item => item.category === 'north');
  
  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDietary = dietaryType === 'all' ? true :
      dietaryType === 'veg' ? item.isVegetarian :
      !item.isVegetarian;
    
    const matchesCourse = selectedCourse === 'all' ? true :
      item.foodCategory === selectedCourse;
    
    return matchesSearch && matchesDietary && matchesCourse;
  });

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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <FilterBar 
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            dietaryType={dietaryType}
            onDietaryToggle={setDietaryType}
            selectedCourse={selectedCourse}
            onCourseFilter={setSelectedCourse}
          />
        </div>

        <MenuGrid items={filteredItems} />
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
    category: 'north',
    foodCategory: 'Starter'
  },
  {
    id: '2',
    name: 'Dal Makhani',
    description: 'Creamy black lentils simmered overnight with butter and spices',
    price: 12.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://plus.unsplash.com/premium_photo-1700253176330-71ee9f44e30b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'north',
    foodCategory: 'Starter'
  },
  {
    id: '3',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese cubes in a spiced tomato-based curry',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '4',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
    price: 15.99,
    spiceLevel: 3,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '5',
    name: 'Malai Kofta',
    description: 'Soft potato and paneer dumplings in a rich, creamy curry sauce',
    price: 13.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '6',
    name: 'Rogan Josh',
    description: 'Traditional Kashmiri lamb curry with yogurt and aromatic spices',
    price: 16.99,
    spiceLevel: 3,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '7',
    name: 'Palak Paneer',
    description: 'Fresh spinach curry with cottage cheese cubes',
    price: 12.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '8',
    name: 'Naan Bread',
    description: 'Traditional tandoor-baked flatbread',
    price: 3.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'north',
    foodCategory: 'Bread'
  },
  {
    id: '9',
    name: 'Tandoori Chicken',
    description: 'Yogurt and spice marinated chicken roasted in tandoor',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Main Course'
  },
  {
    id: '10',
    name: 'Vegetable Samosas',
    description: 'Crispy pastries filled with spiced potatoes and peas',
    price: 6.99,
    spiceLevel: 1,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    category: 'north',
    foodCategory: 'Starter'
  }
];
