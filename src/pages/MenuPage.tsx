import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, DownloadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartPopup from '../components/CartPopup';
import { MenuItem } from '../types/menu';

interface MenuPageProps {
  title: string;
  description: string;
  backgroundImage: string;
  menuImage: string;
  menuItems: MenuItem[];
  categories: string[];
  location: 'riverstone' | 'schofields';
}

export default function MenuPage({
  title,
  description,
  backgroundImage,
  menuImage,
  menuItems,
  categories,
  location
}: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);
  const { addToCart, isItemInCart, getItemQuantity, incrementQuantity, decrementQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isManualScrollRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;

        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
          });

          setActiveCategory(mostVisible.target.id);
          const navButton = document.querySelector(`button[data-category="${mostVisible.target.id}"]`);
          navButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    categories.forEach((category) => {
      if (categoryRefs.current[category]) {
        observer.observe(categoryRefs.current[category]!);
      }
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (category: string) => {
    isManualScrollRef.current = true;
    setActiveCategory(category);
    
    categoryRefs.current[category]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 1000);
  };

  const getFilteredItems = (category: string) => {
    const categoryItems = menuItems.filter(
      item => item.foodCategory === category
    );

    if (!searchQuery) return categoryItems;

    return categoryItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getSpiceLevelLabel = (level: number): string => {
    switch (level) {
      case 1:
        return 'Mild';
      case 2:
        return 'Medium';
      case 3:
        return 'Hot';
      case 4:
        return 'Extra Hot';
      default:
        return 'No Spice';
    }
  };

  const handleDownloadMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    const menuUrl = menuImage;
    const link = document.createElement('a');
    link.href = menuUrl;
    link.download = `${location}-menu.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-16 flex flex-col min-h-screen">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: `url(${backgroundImage})`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-2xl text-center">
            {description}
          </p>
          <button
            onClick={handleDownloadMenu}
            className="mt-6 px-6 py-2 border border-white/50 relative bg-gradient-to-r from-rose-300/30 via-purple-300/30 to-indigo-300/30 bg-[length:200%_100%] animate-gradient backdrop-blur-sm rounded-[10px] text-white text-base md:text-lg uppercase tracking-wider transition-all duration-300 w-fit hover:scale-105 flex items-center"
          >
            Download Menu <DownloadIcon className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
      
      <div className="bg-neutral-900 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="sticky top-16 bg-neutral-900 z-50 space-y-8 pb-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
            />

            <nav 
              className="flex space-x-8 overflow-x-auto border-b border-gray-700 scrollbar-hide" 
              ref={navRef}
              style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  data-category={category}
                  className={`py-4 px-1 relative font-medium text-sm whitespace-nowrap
                    ${activeCategory === category 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-400 hover:text-gray-200'
                    }`}
                  onClick={() => scrollToCategory(category)}
                >
                  {category}
                </button>
              ))}
            </nav>
            <style>
              {`
                nav::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
          </div>

          <div className="space-y-16 mt-8">
            {categories.map((category) => {
              const categoryItems = getFilteredItems(category);
              
              if (searchQuery && categoryItems.length === 0) return null;

              return (
                <div
                  key={category}
                  id={category}
                  ref={el => categoryRefs.current[category] = el}
                  className="scroll-mt-[300px]"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{category}</h2>
                  {categoryItems.length === 0 ? (
                    <p className="text-gray-400">No items found in this category</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categoryItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-start border-b border-gray-800 pb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium text-white">{item.name}</h3>
                              <div className="flex items-center gap-1">
                                {item.isVegetarian ? (
                                  <div className="flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-500" fill="currentColor">
                                      <circle cx="12" cy="12" r="10" className="fill-current" />
                                      <circle cx="12" cy="12" r="8" className="fill-green-900" />
                                      <circle cx="12" cy="12" r="3" className="fill-current" />
                                    </svg>
                                    <span className="text-xs text-green-500 font-medium">VEG</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500" fill="currentColor">
                                      <circle cx="12" cy="12" r="10" className="fill-current" />
                                      <circle cx="12" cy="12" r="8" className="fill-red-900" />
                                      <circle cx="12" cy="12" r="3" className="fill-current" />
                                    </svg>
                                    <span className="text-xs text-red-500 font-medium">NON-VEG</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-400 mt-1">${item.price.toFixed(2)}</p>
                            {item.spiceLevel > 0 && (
                              <div className="flex items-center gap-1 text-sm mt-1">
                                <span className="text-red-500">
                                  {Array(item.spiceLevel).fill('🌶️').join('')}
                                </span>
                                <span className="text-gray-400 text-xs ml-1">
                                  {getSpiceLevelLabel(item.spiceLevel)}
                                </span>
                              </div>
                            )}
                          </div>
                          {isItemInCart(item.id) ? (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => decrementQuantity(item.id)}
                                className="w-8 h-8 flex items-center justify-center text-white bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                              >
                                <span className="sr-only">Decrease quantity</span>
                                -
                              </button>
                              <span className="text-white w-6 text-center">
                                {getItemQuantity(item.id)}
                              </span>
                              <button
                                onClick={() => incrementQuantity(item.id)}
                                className="w-8 h-8 flex items-center justify-center text-white bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                              >
                                <span className="sr-only">Increase quantity</span>
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item)}
                              className="ml-4 p-2 text-2xl text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors w-8 h-8 flex items-center justify-center"
                            >
                              <span className="sr-only">Add to cart</span>
                              +
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {searchQuery && categories.every(category => getFilteredItems(category).length === 0) && (
              <div className="text-center py-8">
                <p className="text-gray-400">No menu items found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
} 