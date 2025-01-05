import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../types/menu';

interface CuisineSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  items: MenuItem[];
  type: 'north' | 'south';
}

export default function CuisineSection({
  title,
  description,
  backgroundImage,
  type
}: CuisineSectionProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-full bg-cover bg-center cursor-pointer group overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => navigate(`/menu/${type}`)}
    >
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16">
        <div className="transform transition-all duration-500 group-hover:translate-x-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-2xl">
            {description}
          </p>
          
          <div className="mt-12 flex items-center text-white">
            <span className="text-base md:text-lg uppercase tracking-wider mr-4 font-medium">
              Explore Menu
            </span>
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
    </div>
  );
}