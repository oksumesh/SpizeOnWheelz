import { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types/menu';
import { ArrowLeft, DownloadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartPopup from '../components/CartPopup';
import SchofieldsHome from '../assets/SchofieldsHome.png';
import SchofieldsMenuImg from '../assets/SchofieldMenu.png';

export default function SchofieldsMenu() {
  const [activeCategory, setActiveCategory] = useState('BIRYANI');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);
  const { addToCart, isItemInCart, getItemQuantity, incrementQuantity, decrementQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isManualScrollRef = useRef(false);
  
  const categories = ['BIRYANI', 'DOSA', 'DRINKS', 'CHAT', 'DESSERT', 'NOODLES', 'RICE', 'TIFFINS', 'STARTERS'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;

        // Find the most visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio and get the most visible
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
          });

          setActiveCategory(mostVisible.target.id);
          const navButton = document.querySelector(`button[data-category="${mostVisible.target.id}"]`);
          navButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',  // Center 50% of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]  // More granular thresholds
      }
    );

    categories.forEach((category) => {
      if (categoryRefs.current[category]) {
        observer.observe(categoryRefs.current[category]!);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (category: string) => {
    // Set manual scroll flag
    isManualScrollRef.current = true;
    
    // Update active category
    setActiveCategory(category);
    
    // Perform scroll
    categoryRefs.current[category]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });

    // Reset manual scroll flag after animation completes
    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 1000);
  };

  // Add this function to filter items based on search
  const getFilteredItems = (category: string) => {
    const categoryItems = MENU_ITEMS.filter(
      item => item.foodCategory === category
    );

    if (!searchQuery) return categoryItems;

    return categoryItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Add the helper function
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
    e.stopPropagation(); // Prevent navigation when clicking download
    const menuUrl = SchofieldsMenuImg;
    const link = document.createElement('a');
    link.href = menuUrl;
    link.download = `Schofields-menu.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-16 flex flex-col min-h-screen">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: `url(${SchofieldsHome})`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Schofields Specials</h1>
          <p className="text-xl max-w-2xl text-center">
            Discover the authentic tastes of Schofields
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
                msOverflowStyle: 'none',  /* IE and Edge */
                scrollbarWidth: 'none',   /* Firefox */
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
            <style jsx>{`
              nav::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          <div className="space-y-16 mt-8">
            {categories.map((category) => {
              const categoryItems = getFilteredItems(category);
              
              // Skip rendering empty categories when searching
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
                            <h3 className="text-lg font-medium text-white">{item.name}</h3>
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
            
            {/* Show message when no results found */}
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
        location="schofields"
      />
    </div>
  );
}

const MENU_ITEMS: (MenuItem & { rating?: number, ratingCount?: number })[] = [
  // BIRYANI
  {
    id: 'B1',
    name: 'CHICKEN 65-BIRYANI',
    description: 'Spicy chicken 65 biryani',
    price: 20.45,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'BIRYANI',
    rating: 87,
    ratingCount: 49
  },
  {
    id: 'B2',
    name: 'CHICKEN DUM- BIRIYANI',
    description: 'Traditional dum style chicken biryani',
    price: 16.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'BIRYANI'
  },
  {
    id: 'B3',
    name: 'BIRYANI - PANNER 65',
    description: 'Paneer 65 biryani',
    price: 19.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'BIRYANI',
    rating: 100,
    ratingCount: 6
  },
  {
    id: 'B4',
    name: 'GOBI 65-BIRYANI',
    description: 'Cauliflower 65 biryani',
    price: 19.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'BIRYANI',
    rating: 87,
    ratingCount: 8
  },
  {
    id: 'B5',
    name: 'EXTRA RAITHA',
    description: 'Yogurt side dish',
    price: 3.45,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'BIRYANI',
    rating: 100,
    ratingCount: 4
  },

  // DOSA
  {
    id: 'D1',
    name: 'DOSA MASALA',
    description: 'Classic masala dosa',
    price: 14.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA',
    isPopular: true
  },
  {
    id: 'D2',
    name: 'DOSA GHEE',
    description: 'Plain dosa with ghee',
    price: 11.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D3',
    name: 'DOSA PLAIN',
    description: 'Traditional plain dosa',
    price: 10.45,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 86,
    ratingCount: 15
  },
  {
    id: 'D4',
    name: 'DOSA MASALA KARAM',
    description: 'Spicy masala dosa',
    price: 15.45,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D5',
    name: 'DOSA GHEE KARAM',
    description: 'Spicy dosa with ghee',
    price: 13.95,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 100,
    ratingCount: 9
  },
  {
    id: 'D6',
    name: 'DOSA ONION',
    description: 'Dosa with onion filling',
    price: 13.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D7',
    name: 'DOSA PANEER',
    description: 'Dosa with paneer filling',
    price: 14.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D8',
    name: 'DOSA CHICKEN',
    description: 'Dosa with chicken filling',
    price: 14.45,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 83,
    ratingCount: 6
  },
  {
    id: 'D9',
    name: 'DOSA LAMB KARAM',
    description: 'Spicy dosa with lamb filling',
    price: 15.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 100,
    ratingCount: 3
  },
  {
    id: 'D10',
    name: 'DOSA PANEER KARAM',
    description: 'Spicy dosa with paneer filling',
    price: 15.45,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 100,
    ratingCount: 9
  },
  {
    id: 'D11',
    name: 'DOSA CHICKEN KARAM',
    description: 'Spicy dosa with chicken filling',
    price: 15.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 100,
    ratingCount: 9
  },
  {
    id: 'D12',
    name: 'DOSA LAMB',
    description: 'Dosa with lamb filling',
    price: 14.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D13',
    name: 'DOSA EGG',
    description: 'Dosa with egg filling',
    price: 14.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D14',
    name: 'DOSA ONION KARAM',
    description: 'Spicy dosa with onion filling',
    price: 13.45,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA',
    rating: 100,
    ratingCount: 4
  },
  {
    id: 'D15',
    name: 'EXTRA SAMBAR',
    description: 'Additional sambar',
    price: 3.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D16',
    name: 'DOSA EGG KARAM',
    description: 'Spicy dosa with egg filling',
    price: 14.54,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'DOSA'
  },
  {
    id: 'D17',
    name: 'DOSA KARAM',
    description: 'Spicy plain dosa',
    price: 11.95,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DOSA'
  },

  // DRINKS
  {
    id: 'DR1',
    name: 'MANGO LASSI',
    description: 'Sweet mango yogurt drink',
    price: 6.95,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DRINKS',
    rating: 86,
    ratingCount: 29
  },
  {
    id: 'DR2',
    name: 'COCA COLA',
    description: 'Coca Cola soft drink',
    price: 3.95,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DRINKS',
    rating: 87,
    ratingCount: 8
  },
  {
    id: 'DR3',
    name: 'WATER',
    description: 'Bottled water',
    price: 3.95,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DRINKS'
  },
  {
    id: 'DR4',
    name: 'MASALA TEA',
    description: 'Indian spiced tea',
    price: 3.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DRINKS'
  },

  // CHAT
  {
    id: 'CH1',
    name: 'CHAT SAMOSA',
    description: 'Samosa topped with chutneys',
    price: 12.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'CHAT',
    rating: 93,
    ratingCount: 16
  },
  {
    id: 'CH2',
    name: 'CHAT PAPIDI',
    description: 'Crispy crackers with toppings',
    price: 10.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'CHAT'
  },
  {
    id: 'CH3',
    name: 'DAHI POORI',
    description: 'Hollow puris with yogurt filling',
    price: 5.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'CHAT',
    rating: 100,
    ratingCount: 3
  },
  {
    id: 'CH4',
    name: 'PANI PURI',
    description: 'Hollow puris with spiced water',
    price: 9.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'CHAT'
  },

  // DESSERT
  {
    id: 'DE1',
    name: 'GULAB JAMUN',
    description: 'Sweet milk dough balls in syrup',
    price: 7.45,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'DESSERT',
    rating: 83,
    ratingCount: 6
  },

  // NOODLES
  {
    id: 'N1',
    name: 'SCHEZWAN - CHKN NOODLES',
    description: 'Spicy schezwan chicken noodles',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES',
    rating: 96,
    ratingCount: 33
  },
  {
    id: 'N2',
    name: '65 CHICKEN NOODLES',
    description: 'Noodles with chicken 65',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES',
    rating: 95,
    ratingCount: 22
  },
  {
    id: 'N3',
    name: 'PLAIN Veg NOODLES',
    description: 'Simple vegetarian noodles',
    price: 16.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N4',
    name: '65 GOBI NOODLES',
    description: 'Noodles with cauliflower 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N5',
    name: 'SCHEZWAN - VEG NOODLES',
    description: 'Spicy schezwan vegetable noodles',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N6',
    name: 'EXTRA CHICKEN',
    description: 'Additional chicken portion',
    price: 2.45,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES',
    rating: 100,
    ratingCount: 7
  },
  {
    id: 'N7',
    name: 'PLAIN Chicken NOODLES',
    description: 'Simple chicken noodles',
    price: 18.95,
    spiceLevel: 1,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N8',
    name: 'SCHEZWAN - EGG NOODLES',
    description: 'Spicy schezwan egg noodles',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES',
    rating: 100,
    ratingCount: 5
  },
  {
    id: 'N9',
    name: '65 TRIPPLE EGG NOODLES',
    description: 'Noodles with triple egg and 65 sauce',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N10',
    name: 'EXTRA EGG',
    description: 'Additional egg',
    price: 1.95,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES'
  },
  {
    id: 'N11',
    name: 'PLAIN Egg NOODLES',
    description: 'Simple egg noodles',
    price: 18.95,
    spiceLevel: 1,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'NOODLES',
    rating: 100,
    ratingCount: 6
  },

  // RICE
  {
    id: 'R1',
    name: '65 CHICKEN FRIED RICE',
    description: 'Fried rice with chicken 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 87,
    ratingCount: 8
  },
  {
    id: 'R2',
    name: 'PLAIN VEG FRIED RICE',
    description: 'Simple vegetarian fried rice',
    price: 16.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 100,
    ratingCount: 3
  },
  {
    id: 'R3',
    name: 'SCHEZWAN - CHKN FRIED RICE',
    description: 'Spicy schezwan chicken fried rice',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    isPopular: true
  },
  {
    id: 'R4',
    name: 'EXTRA CHICKEN',
    description: 'Additional chicken portion',
    price: 2.45,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 100,
    ratingCount: 7
  },
  {
    id: 'R5',
    name: '65 GOBI FRIED RICE',
    description: 'Fried rice with cauliflower 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'RICE',
    isPopular: true
  },
  {
    id: 'R6',
    name: 'CHIC FRIED RICE',
    description: 'Classic chicken fried rice',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE'
  },
  {
    id: 'R7',
    name: 'TRIPPLE EGG FRIED RICE',
    description: 'Fried rice with triple egg',
    price: 18.95,
    spiceLevel: 1,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 83,
    ratingCount: 12
  },
  {
    id: 'R8',
    name: '65 TRIPPLE EGG FRIED RICE',
    description: 'Fried rice with triple egg and 65 sauce',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 100,
    ratingCount: 4
  },
  {
    id: 'R9',
    name: 'EXTRA EGG',
    description: 'Additional egg',
    price: 1.95,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE'
  },
  {
    id: 'R10',
    name: 'SCHEZWAN - VEG FRIED RICE',
    description: 'Spicy schezwan vegetable fried rice',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'RICE',
    isPopular: true
  },
  {
    id: 'R11',
    name: 'CHIC KEEMA FRIED RICE',
    description: 'Fried rice with minced chicken',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 100,
    ratingCount: 3
  },
  {
    id: 'R12',
    name: 'SCHEZWAN - EGG FRIED RICE',
    description: 'Spicy schezwan egg fried rice',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 100,
    ratingCount: 3
  },
  {
    id: 'R13',
    name: 'LAMB KEEMA FRIED RICE',
    description: 'Fried rice with minced lamb',
    price: 19.45,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'RICE',
    rating: 83,
    ratingCount: 6
  },

  // TIFFINS
  {
    id: 'T1',
    name: 'MIRCHI CUT',
    description: 'Cut green chilies',
    price: 9.95,
    spiceLevel: 4,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS',
    rating: 88,
    ratingCount: 25
  },
  {
    id: 'T2',
    name: 'PUNUGULU',
    description: 'Deep fried rice batter balls',
    price: 11.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS'
  },
  {
    id: 'T3',
    name: 'SAMBAR IDLY DIP',
    description: 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER DIPPED IN SMABAR',
    price: 11.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS',
    rating: 100,
    ratingCount: 12
  },
  {
    id: 'T4',
    name: 'IDLY',
    description: 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER SERVED WITH SAMBAR AND PEANTU CHUTNEY',
    price: 10.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS'
  },
  {
    id: 'T5',
    name: 'MIRCHI BAJJI',
    description: 'Stuffed and battered fried green chilies',
    price: 9.95,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS',
    rating: 88,
    ratingCount: 25
  },
  {
    id: 'T6',
    name: 'GHEE PODI IDLY',
    description: 'Idly with ghee and spice powder',
    price: 12.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS',
    rating: 100,
    ratingCount: 4
  },
  {
    id: 'T7',
    name: 'SAMOSA 2pc',
    description: 'Crispy pastry with spiced potato filling',
    price: 6.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS',
    rating: 100,
    ratingCount: 5
  },
  {
    id: 'T8',
    name: 'GHEE IDLY',
    description: 'Idly with ghee',
    price: 11.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS'
  },
  {
    id: 'T9',
    name: 'EXTRA SAMBAR',
    description: 'Additional sambar',
    price: 3.45,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'TIFFINS'
  },

  // STARTERS
  {
    id: 'ST1',
    name: 'CHILLI - CHICKEN',
    description: 'Indo-Chinese style chilli chicken',
    price: 18.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 89,
    ratingCount: 55
  },
  {
    id: 'ST2',
    name: 'CHIC LOLLIPOP',
    description: 'Spiced chicken wings',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    isPopular: true
  },
  {
    id: 'ST3',
    name: '65-CHICKEN',
    description: 'Classic chicken 65',
    price: 19.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 89,
    ratingCount: 39
  },
  {
    id: 'ST4',
    name: 'PODI CHICKEN',
    description: 'Chicken with spice powder',
    price: 19.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 87,
    ratingCount: 16
  },
  {
    id: 'ST5',
    name: 'MANCHURIAN - CHICKEN',
    description: 'Indo-Chinese style manchurian chicken',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    isPopular: true
  },
  {
    id: 'ST6',
    name: 'VEG MANCHURIA',
    description: 'Vegetable manchurian',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 90,
    ratingCount: 11
  },
  {
    id: 'ST7',
    name: 'CHILLI - PANNER',
    description: 'Indo-Chinese style chilli paneer',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 100,
    ratingCount: 6
  },
  {
    id: 'ST8',
    name: 'MANCHURIAN - GOBI',
    description: 'Cauliflower manchurian',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS',
    isPopular: true
  },
  {
    id: 'ST9',
    name: 'EXTRA CHICKEN',
    description: 'Additional chicken portion',
    price: 2.45,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 100,
    ratingCount: 7
  },
  {
    id: 'ST10',
    name: 'MANCHURIAN - PANNER',
    description: 'Paneer manchurian',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 100,
    ratingCount: 8
  },
  {
    id: 'ST11',
    name: '65-PANNER',
    description: 'Paneer 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST12',
    name: 'CHILLI - BABY CORN',
    description: 'Indo-Chinese style chilli baby corn',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST13',
    name: '65-BABY CORN',
    description: 'Baby corn 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS',
    rating: 100,
    ratingCount: 5
  },
  {
    id: 'ST14',
    name: '65- GOBI',
    description: 'Cauliflower 65',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'schofields',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST15',
    name: 'EXTRA EGG',
    description: 'Additional egg',
    price: 1.95,
    spiceLevel: 0,
    isVegetarian: false,
    category: 'schofields',
    foodCategory: 'STARTERS'
  },
];
