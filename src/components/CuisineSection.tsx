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
    <section className="min-h-screen">
      <div
        className="relative h-screen bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={() => navigate(`/menu/${type}`)}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl max-w-2xl text-center mb-8">{description}</p>
          <ChevronRight className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}