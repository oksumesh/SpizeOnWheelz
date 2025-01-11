import { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types/menu';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartPopup from '../components/CartPopup';
import RiverstoneHome from '../assets/RiverstoneHome.png';


export default function RiverstoneMenu() {
  const [activeCategory, setActiveCategory] = useState('BIRYANI');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);
  const { addToCart, isItemInCart, getItemQuantity, incrementQuantity, decrementQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const categories = ['STARTERS', 'SNACKS', 'NAAN', 'SIDES', 'IDLY', 'CHAT', 'DOSA', 'ROLLS', 'KULCHAS', 'CURRIES', 'BIRYANI', 'DRINKS', 'DESSERT'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
            // Scroll the navigation bar to show the active category
            const navButton = document.querySelector(`button[data-category="${entry.target.id}"]`);
            navButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
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
    categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth' });
  };

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

  console.log('Rendering RiverstoneMenu CartPopup');

  return (
    <div className="pt-16">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: `url(${RiverstoneHome})`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Riverstone Delicacies</h1>
          <p className="text-xl max-w-2xl text-center">
            Experience the rich, aromatic flavors of Riverstone
          </p>
        </div>
      </div>
      
      <div className="bg-neutral-900 min-h-screen">
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

            <nav className="flex space-x-8 overflow-x-auto border-b border-gray-700" ref={navRef}>
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
                  className="scroll-mt-20"
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
        location="riverstone"
      />
    </div>
  );
}

const MENU_ITEMS: (MenuItem & { rating?: number, ratingCount?: number })[] = [
  // STARTERS
  {
    id: 'ST1',
    name: 'PANEER TIKKA',
    description: 'Paneer Tikka',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST2',
    name: 'SOYA CHAAP TANDOORI',
    description: 'Soya Chaap Tandoori',
    price: 20.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST3',
    name: 'SOYA CHAAP MALAI',
    description: 'Soya Chaap Malai',
    price: 22.95,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST4',
    name: 'CHICKEN TIKKA',
    description: 'Chicken Tikka',
    price: 21.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST5',
    name: 'TANDOORI CHICKEN',
    description: 'Tandoori Chicken',
    price: 20.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'STARTERS',
    isPopular: true
  },
  {
    id: 'ST6',
    name: 'LAMB KEBAB',
    description: 'Lamb Kebab',
    price: 22.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },
  {
    id: 'ST7',
    name: 'AMRITSARI FISH FRY',
    description: 'Amritsari Fish Fry',
    price: 23.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'STARTERS'
  },

  // SNACKS
  {
    id: 'SN1',
    name: 'MIRCHI BAJJI',
    description: 'Two pieces.',
    price: 7.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SNACKS'
  },
  {
    id: 'SN2',
    name: 'MIRCHI CUT',
    description: 'Mirchi Cut',
    price: 7.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SNACKS'
  },
  {
    id: 'SN3',
    name: 'PUNUGULU',
    description: 'Punugulu',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SNACKS'
  },
  {
    id: 'SN4',
    name: 'SAMOSA',
    description: 'Two pieces.',
    price: 7.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SNACKS'
  },

  // NAAN
  {
    id: 'N1',
    name: 'GARLIC NAAN',
    description: 'Garlic Naan',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN',
    isPopular: true
  },
  {
    id: 'N2',
    name: 'TANDOORI ROTI',
    description: 'Tandoori Roti',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN'
  },
  {
    id: 'N3',
    name: 'PLAIN NAAN',
    description: 'Plain Naan',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN'
  },
  {
    id: 'N4',
    name: 'BUTTER NAAN',
    description: 'Butter Naan',
    price: 6.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN'
  },
  {
    id: 'N5',
    name: 'CHEESE NAAN',
    description: 'Cheese Naan',
    price: 7.45,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN'
  },
  {
    id: 'N6',
    name: 'CHILLI NAAN',
    description: 'Spicy',
    price: 4.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'NAAN',
    rating: 66,
    ratingCount: 3
  },

  // SIDES
  {
    id: 'SD1',
    name: 'SAMBAR',
    description: 'Sambar',
    price: 4.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SIDES'
  },
  {
    id: 'SD2',
    name: 'SALAD',
    description: 'Salad',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SIDES'
  },
  {
    id: 'SD3',
    name: 'LACHHA PYAAZ',
    description: 'Lachha Pyaaz',
    price: 4.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SIDES'
  },
  {
    id: 'SD4',
    name: 'BOONDI RAITHA',
    description: 'Boondi Raitha',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'SIDES'
  },

  // IDLY
  {
    id: 'ID1',
    name: 'IDLY',
    description: 'Three pieces.',
    price: 11.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'IDLY'
  },
  {
    id: 'ID2',
    name: 'GHEE IDLY',
    description: 'Three pieces.',
    price: 12.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'IDLY'
  },
  {
    id: 'ID3',
    name: 'SAMBAR IDLY DIP',
    description: 'Three pieces.',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'IDLY',
    isPopular: true
  },
  {
    id: 'ID4',
    name: 'GHEE PODI IDLY',
    description: 'Three pieces.',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'IDLY'
  },

  // CHAT
  {
    id: 'CH1',
    name: 'SAMOSA CHAT',
    description: 'Samosa Chat',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT'
  },
  {
    id: 'CH2',
    name: 'PAPIDI CHAT',
    description: 'Papidi Chat',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT',
    isPopular: true
  },
  {
    id: 'CH3',
    name: 'ALOO TIKKI CHAT',
    description: 'Aloo Tikki Chat',
    price: 13.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT'
  },
  {
    id: 'CH4',
    name: 'DAHI BHALLA',
    description: 'Dahi Bhalla',
    price: 13.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT'
  },
  {
    id: 'CH5',
    name: 'PANI PURI',
    description: 'Six pieces.',
    price: 8.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT'
  },
  {
    id: 'CH6',
    name: 'DAHI PURI',
    description: 'Six pieces.',
    price: 10.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CHAT'
  },

  // DOSA
  {
    id: 'D1',
    name: 'MASALA DOSA',
    description: 'Masala Dosa',
    price: 16.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA',
    isPopular: true
  },
  {
    id: 'D2',
    name: 'PLAIN DOSA',
    description: 'Plain Dosa',
    price: 11.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D3',
    name: 'GHEE DOSA',
    description: 'Ghee Dosa',
    price: 13.99,
    spiceLevel: 1,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D4',
    name: 'GHEE PODI DOSA',
    description: 'Ghee Podi Dosa',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D5',
    name: 'SPECIAL DOSA',
    description: 'Special Dosa',
    price: 16.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D6',
    name: 'EGG DOSA',
    description: 'Egg Dosa',
    price: 15.99,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D7',
    name: 'KARAM DOSA',
    description: 'Karam Dosa',
    price: 14.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D8',
    name: 'ONION DOSA',
    description: 'Onion Dosa',
    price: 15.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D9',
    name: 'PANEER DOSA',
    description: 'Paneer Dosa',
    price: 16.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D10',
    name: 'CHICKEN DOSA',
    description: 'Chicken Dosa',
    price: 16.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D11',
    name: 'LAMB DOSA',
    description: 'Lamb Dosa',
    price: 16.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D12',
    name: 'GHEE KARAM DOSA',
    description: 'Ghee Karam Dosa',
    price: 14.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D13',
    name: 'EGG KARAM DOSA',
    description: 'Egg Karam Dosa',
    price: 15.45,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D14',
    name: 'ONION KARAM DOSA',
    description: 'Onion Karam Dosa',
    price: 15.45,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D15',
    name: 'MASALA KARAM DOSA',
    description: 'Masala Karam Dosa',
    price: 16.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D16',
    name: 'PANEER KARAM DOSA',
    description: 'Paneer Karam Dosa',
    price: 16.99,
    spiceLevel: 3,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D17',
    name: 'CHICKEN KARAM DOSA',
    description: 'Chicken Karam Dosa',
    price: 16.99,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },
  {
    id: 'D18',
    name: 'LAMB KARAM DOSA',
    description: 'Lamb Karam Dosa',
    price: 17.45,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'DOSA'
  },

  // ROLLS
  {
    id: 'R1',
    name: 'PANEER TIKKA ROLL',
    description: 'Paneer Tikka Roll',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'ROLLS',
    isPopular: true
  },
  {
    id: 'R2',
    name: 'SOYA CHAAP ROLL',
    description: 'Soya Chaap Roll',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'ROLLS'
  },

  // KULCHAS
  {
    id: 'K1',
    name: 'CHOLE BATHURE',
    description: 'Chole Bathure',
    price: 20.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'KULCHAS'
  },
  {
    id: 'K2',
    name: 'AMIRTSARI KULCHA',
    description: 'Two pieces.',
    price: 21.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'KULCHAS',
    rating: 20,
    ratingCount: 5
  },
  {
    id: 'K3',
    name: 'MAKKI ROTI AND SAAG',
    description: 'Two pieces.',
    price: 28.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'KULCHAS',
    isPopular: true
  },
  {
    id: 'K4',
    name: 'TANDOORI PARATHA',
    description: 'One piece.',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'KULCHAS'
  },
  {
    id: 'K5',
    name: 'KEEMA KULCHA',
    description: 'One piece.',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'KULCHAS'
  },

  // CURRIES
  {
    id: 'CU1',
    name: 'CHICKEN CURRY',
    description: 'Chicken Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES',
    rating: 33,
    ratingCount: 3
  },
  {
    id: 'CU2',
    name: 'BUTTER CHICKEN MASALA CURRY',
    description: 'Butter Chicken Masala Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES',
    isPopular: true
  },
  {
    id: 'CU3',
    name: 'GOAT CURRY',
    description: 'Goat Curry',
    price: 19.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES',
    isPopular: true
  },
  {
    id: 'CU4',
    name: 'LAMB CURRY',
    description: 'Lamb Curry',
    price: 19.95,
    spiceLevel: 3,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU5',
    name: 'DAAL TADAK CURRY',
    description: 'Daal Tadak Curry',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU6',
    name: 'DAAL MAKHNI CURRY',
    description: 'Daal Makhni Curry',
    price: 18.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU7',
    name: 'CHICKPEAS CURRY',
    description: 'Chickpeas Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU8',
    name: 'PALAK PANEER CURRY',
    description: 'Palak Paneer Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU9',
    name: 'PANEER BUTTER MASALA CURRY',
    description: 'Paneer Butter Masala Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU10',
    name: 'SOYA CHAP MASALA',
    description: 'Soya Chap Masala',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU11',
    name: 'KADAI PANEER CURRY',
    description: 'Kadai Paneer Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU12',
    name: 'BUTTER CHICKEN CURRY',
    description: 'Mild',
    price: 19.95,
    spiceLevel: 1,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },
  {
    id: 'CU13',
    name: 'KADAI CHICKEN CURRY',
    description: 'Kadai Chicken Curry',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'CURRIES'
  },

  // BIRYANI
  {
    id: 'B1',
    name: 'LAMB BIRYANI',
    description: 'Lamb Biryani',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'BIRYANI'
  },
  {
    id: 'B2',
    name: 'GOAT BIRYANI',
    description: 'Goat Biryani',
    price: 19.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'BIRYANI',
    isPopular: true
  },
  {
    id: 'B3',
    name: 'CHICKEN DUM BIRYANI',
    description: 'Chicken Dum Biryani',
    price: 17.95,
    spiceLevel: 2,
    isVegetarian: false,
    category: 'riverstone',
    foodCategory: 'BIRYANI'
  },

  // DRINKS
  {
    id: 'DR1',
    name: 'WATER',
    description: 'Water',
    price: 4.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DRINKS'
  },
  {
    id: 'DR2',
    name: 'MANGO LASSI',
    description: 'Mango Lassi',
    price: 6.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DRINKS'
  },
  {
    id: 'DR3',
    name: 'SWEET LASSI',
    description: 'Sweet Lassi',
    price: 6.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DRINKS'
  },
  {
    id: 'DR4',
    name: 'SALTED LASSI',
    description: 'Salted Lassi',
    price: 6.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DRINKS'
  },

  // DESSERT
  {
    id: 'DE1',
    name: 'GULAB JAMUN',
    description: 'Three pieces.',
    price: 8.99,
    spiceLevel: 0,
    isVegetarian: true,
    category: 'riverstone',
    foodCategory: 'DESSERT'
  }
];
