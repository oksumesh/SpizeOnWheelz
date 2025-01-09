import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartPopup from './CartPopup';
import Logo from './logo.svg'

export default function Header() {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#1a1a1a] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="flex items-center space-x-3">
              <img src={Logo} alt="Spice On Wheelz" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-white">Spice On Wheelz</span>
            </NavLink>
            
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-indigo-400 ${
                      isActive ? 'text-indigo-400' : 'text-white'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-indigo-400 ${
                      isActive ? 'text-indigo-400' : 'text-white'
                    }`
                  }
                >
                  About Us
                </NavLink>
              </nav>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-indigo-400 transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-white" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}