import React from 'react';
import { ChevronRight, DownloadIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../types/menu';
import RiverStoneMenuImg from '../assets/RiverstoneMenu.png';
import SchofieldsMenuImg from '../assets/SchofieldMenu.png';

interface CuisineSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  items: MenuItem[];
  type: 'riverstone' | 'schofields';
}

export default function CuisineSection({
  title,
  description,
  backgroundImage,
  type
}: CuisineSectionProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${type}`);
  };

  const handleDownloadMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking download
    const menuUrl = type === 'riverstone' ? RiverStoneMenuImg : SchofieldsMenuImg;
    const link = document.createElement('a');
    link.href = menuUrl;
    link.download = `${type}-menu.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative h-full bg-cover bg-center cursor-pointer group overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={handleClick}
    >
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16">
        <div className="transform transition-all duration-500 group-hover:translate-x-4">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-medium text-white mb-6 whitespace-nowrap">
            {title}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-2xl">
            {description}
          </p>
          
          <div className="mt-2 flex flex-col text-white">
            
            <button
              onClick={handleDownloadMenu}
              className="mt-6 px-6 py-2 border border-white/50 relative bg-gradient-to-r from-rose-300/30 via-purple-300/30 to-indigo-300/30 bg-[length:200%_100%] animate-gradient backdrop-blur-sm rounded-[10px] text-white text-base md:text-lg uppercase tracking-wider transition-all duration-300 w-fit hover:scale-105 flex items-center"
            >
              Download Menu <DownloadIcon className="w-6 h-6 ml-2" />
            </button>
            <div className="flex items-center mt-7">
              <span className="text-base md:text-lg uppercase tracking-wider mr-4 font-medium">
                Explore Menu
              </span>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
    </div>
  );
}