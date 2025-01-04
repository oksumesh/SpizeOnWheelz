import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { FilterOptions } from '../types/menu';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white shadow-sm border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={filters.search}
                onChange={(e) =>
                  onFilterChange({ ...filters, search: e.target.value })
                }
              />
            </div>
          </div>

          <select
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={filters.dietary}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                dietary: e.target.value as FilterOptions['dietary'],
              })
            }
          >
            <option value="all">All</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-vegetarian</option>
          </select>

          <select
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={filters.spiceLevel || ''}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                spiceLevel: e.target.value ? Number(e.target.value) : null,
              })
            }
          >
            <option value="">Any Spice Level</option>
            <option value="1">Mild</option>
            <option value="2">Medium</option>
            <option value="3">Hot</option>
          </select>

          <button
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
}