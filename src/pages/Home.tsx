import CuisineSection from '../components/CuisineSection';
import { MenuItem } from '../types/menu';
import RiverstoneHome from '../assets/RiverstoneHome.png'
import SchofieldsHome from '../assets/SchofieldsHome.png'

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce',
    price: 14.99,
    spiceLevel: 2,
    isVegetarian: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    category: 'riverstone',
    foodCategory: 'Main Course'
  },
  {
    id: '2',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potatoes',
    price: 11.99,
    spiceLevel: 2,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=800',
    category: 'schofields',
    foodCategory: 'Main Course'
  },
  // Add more menu items as needed
];

export default function Home() {
  const riverstoneItems = MENU_ITEMS.filter(item => item.category === 'riverstone');
  const schofieldsItems = MENU_ITEMS.filter(item => item.category === 'schofields');

  return (
    <div className="pt-16">
      <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
        <div className="flex-1 h-[50vh] md:h-full">
        <CuisineSection
            title="Schofields Specials"
            description="Discover the authentic tastes of Schofields"
            backgroundImage={SchofieldsHome}
            items={schofieldsItems}
            type="schofields"
          />
        </div>
        
        <div className="flex-1 h-[50vh] md:h-full">
        <CuisineSection
            title="Riverstone Delicacies"
            description="Experience the aromatic flavors of Riverstone"
            backgroundImage={RiverstoneHome}
            items={riverstoneItems}
            type="riverstone"
          />
        </div>
      </div>
    </div>
  );
}