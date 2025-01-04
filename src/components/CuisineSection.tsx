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
      {/* Darker gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Glass effect container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="backdrop-blur-sm bg-black/20 px-12 py-8 rounded-2xl transform transition-all duration-500 group-hover:scale-105">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold text-white tracking-tight whitespace-nowrap">
              {title}
            </h2>
            <p className="text-xl text-gray-100 font-light whitespace-nowrap">
              {description}
            </p>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg group-hover:bg-white/20 transition-all duration-500">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none" />
      
      {/* Modern corner accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent opacity-50" />
    </div>
  );
}