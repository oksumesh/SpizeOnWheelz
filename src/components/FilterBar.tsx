import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onDietaryToggle: (type: 'all' | 'veg' | 'non-veg') => void;
  onCourseFilter: (course: string) => void;
  searchQuery: string;
  dietaryType: 'all' | 'veg' | 'non-veg';
  selectedCourse: string;
  menuType: 'north' | 'south';
}

const NORTH_INDIAN_COURSES = [
  'All Courses',
  'Starters',
  'Snacks',
  'Naan',
  'Sides',
  'Idly',
  'Chat',
  'Dosa',
  'Rolls',
  'Kulchas',
  'Curries',
  'Biryani',
  'Drinks',
  'Dessert'
];

const SOUTH_INDIAN_COURSES = [
  'All Courses',
  'Starters',
  'Biryani',
  'Dosa',
  'Drinks',
  'Chat',
  'Dessert',
  'Noodles',
  'Rice',
  'Tiffins'
];

export default function FilterBar({ 
  onSearch, 
  onDietaryToggle, 
  onCourseFilter,
  searchQuery, 
  dietaryType,
  selectedCourse,
  menuType 
}: FilterBarProps) {
  const foodCourses = menuType === 'north' ? NORTH_INDIAN_COURSES : SOUTH_INDIAN_COURSES;

  return (
    <div className="bg-transparent border-b border-gray-300 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-lg overflow-hidden border border-gray-300 bg-white/80 backdrop-blur-sm">
              <button
                onClick={() => onDietaryToggle('all')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  dietaryType === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button
                onClick={() => onDietaryToggle('veg')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  dietaryType === 'veg'
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Veg
              </button>
              <button
                onClick={() => onDietaryToggle('non-veg')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  dietaryType === 'non-veg'
                    ? 'bg-red-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Non-Veg
              </button>
            </div>

            <div className="relative">
              <select
                value={selectedCourse}
                onChange={(e) => onCourseFilter(e.target.value)}
                className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {foodCourses.map((course) => (
                  <option key={course} value={course === 'All Courses' ? 'all' : course}>
                    {course}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}