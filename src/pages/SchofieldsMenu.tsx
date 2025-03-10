import MenuPage from './MenuPage';
import SchofieldsHome from '../assets/SchofieldsHome.png';
import SchofieldsMenuImg from '../assets/SchofieldMenu.png';
import SchofieldMenu from '../data/SchofieldsMenu';

const categories = ['BIRYANI', 'DOSA', 'DRINKS', 'CHAT', 'DESSERT', 'NOODLES', 'RICE', 'SNACKS', 'STARTERS', 'EXTRAS'];

export default function SchofieldsMenu() {
  return (
    <MenuPage
      title="Schofields Specials"
      description="Discover the authentic tastes of Schofields"
      backgroundImage={SchofieldsHome}
      menuImage={SchofieldsMenuImg}
      menuItems={SchofieldMenu}
      categories={categories}
      location="schofields"
    />
  );
}