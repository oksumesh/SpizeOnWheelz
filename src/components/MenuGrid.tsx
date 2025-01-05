import React from 'react';
import { Flame } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-sm text-gray-500">{item.foodCategory}</span>
              </div>
              <span className="text-lg font-medium text-indigo-600">
                ${item.price.toFixed(2)}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Spice Level:</span>
                {Array.from({ length: item.spiceLevel }).map((_, i) => (
                  <Flame
                    key={i}
                    className="w-4 h-4 text-red-500"
                  />
                ))}
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.isVegetarian
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item.isVegetarian ? 'Veg' : 'Non-veg'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}