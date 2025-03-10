import MenuPage from './MenuPage';
import RiverstoneHome from '../assets/RiverstoneHome.png';
import RiverStoneMenuImg from '../assets/RiverstoneMenu.png';
import RiverstoneMenuList from '../data/RiverstoneMenu';

const categories = ['STARTERS', 'SNACKS', 'NAANS', 'SIDES', 'IDLY', 'CHATS', 'DOSA', 'ROLLS', 'KULCHAS', 'CURRIES', 'BIRYANI', 'DESSERT', 'DRINKS'];

export default function RiverstoneMenu() {
  return (
    <MenuPage
      title="Riverstone Delicacies"
      description="Experience the rich, aromatic flavors of Riverstone"
      backgroundImage={RiverstoneHome}
      menuImage={RiverStoneMenuImg}
      menuItems={RiverstoneMenuList}
      categories={categories}
      location="riverstone"
    />
  );
}