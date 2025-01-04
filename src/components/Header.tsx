import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo.svg'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Spice On Wheelz" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-gray-900">Spice On Wheelz</span>
          </NavLink>
          
          <nav className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              About Us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}