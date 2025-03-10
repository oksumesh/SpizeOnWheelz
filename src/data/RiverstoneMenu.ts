import { MenuItem } from '../types/menu';

const prop = ['id', 'name', 'description', 'price', 'spiceLevel', 'isVegetarian', 'category', 'foodCategory']
const menuData = [
  // STARTERS
  ['ST1', 'PANNER TIKKA', 'Panner Tikka', 13.95, 2, true, 'riverstone', 'STARTERS'],
  ['ST2', 'SOYA CHAAP(TANDOORI)', 'Soya Chaap Tandoori Style', 12.95, 2, true, 'riverstone', 'STARTERS'],
  ['ST3', 'SOYA CHAAP(MALAI)', 'Soya Chaap in Malai Style', 13.95, 1, true, 'riverstone', 'STARTERS'],
  ['ST4', 'ANGARA CHICKEN (Spicy)', 'Spicy Angara Chicken', 14.95, 3, false, 'riverstone', 'STARTERS'],
  ['ST5', 'CHICKEN TIKKA (5pc)', 'Chicken Tikka - 5 pieces', 12.95, 2, false, 'riverstone', 'STARTERS'],
  ['ST6', 'TANDOORI CHICKEN(HALF)', 'Half Tandoori Chicken', 10.95, 2, false, 'riverstone', 'STARTERS'],
  ['ST7', 'TANDOORI CHICKEN(FULL)', 'Full Tandoori Chicken', 15.95, 2, false, 'riverstone', 'STARTERS'],
  ['ST8', 'LAMB KEBAB (5pc)', 'Lamb Kebab - 5 pieces', 15.95, 2, false, 'riverstone', 'STARTERS'],
  ['ST9', 'AMRITSARI FISH FRY', 'Amritsari Style Fish Fry - 8-10 pieces', 14.95, 2, false, 'riverstone', 'STARTERS'],
  ['ST10', 'CHILLI CHICKEN', 'Spicy Chilli Chicken', 14.95, 3, false, 'riverstone', 'STARTERS'],
  ['ST11', 'VEG PAKODA', 'Vegetable Pakoras', 5.95, 2, true, 'riverstone', 'STARTERS'],

  // SNACKS
  ['SN1', 'MIRCHI BAJJI', '2pc Mirchi Bajji', 4.95, 3, true, 'riverstone', 'SNACKS'],
  ['SN2', 'MIRCHI CUT', 'Cut Mirchi', 4.95, 3, true, 'riverstone', 'SNACKS'],
  ['SN3', 'PUNUGULU', 'Punugulu', 9.95, 2, true, 'riverstone', 'SNACKS'],
  ['SN4', 'IDLY', '3pc Idly', 7.95, 0, true, 'riverstone', 'SNACKS'],
  ['SN5', 'GHEE IDLY', '3pc Ghee Idly', 8.45, 0, true, 'riverstone', 'SNACKS'],
  ['SN6', 'SAMBAR IDLY DIP', '3pc Sambar Idly Dip', 9.95, 2, true, 'riverstone', 'SNACKS'],
  ['SN7', 'GHEE PODI IDLY', '3pc Ghee Podi Idly', 8.95, 2, true, 'riverstone', 'SNACKS'],

  // NAAN
  ['N1', 'PLAIN NAAN', 'Plain Naan', 2.95, 0, true, 'riverstone', 'NAANS'],
  ['N2', 'GARLIC NAAN', 'Garlic Naan', 2.95, 0, true, 'riverstone', 'NAANS'],
  ['N3', 'CHEESY GARLIC NAAN', 'Cheesy Garlic Naan', 4.95, 0, true, 'riverstone', 'NAANS'],
  ['N4', 'CHEESE NAAN', 'Cheese Naan', 4.45, 0, true, 'riverstone', 'NAANS'],
  ['N5', 'CHILLI GARLIC NAAN', 'Chilli Garlic Naan', 3.45, 2, true, 'riverstone', 'NAANS'],
  ['N6', 'CHILLI NAAN', 'Chilli Naan', 2.95, 2, true, 'riverstone', 'NAANS'],
  ['N7', 'TANDOORI ROTI', 'Tandoori Roti', 2.95, 0, true, 'riverstone', 'NAANS'],
  
  // SIDES
  ['SD1', 'SAMBAR', 'Sambar', 2.95, 2, true, 'riverstone', 'SIDES'],
  ['SD2', 'SALAD', 'Fresh Salad', 2.95, 0, true, 'riverstone', 'SIDES'],
  ['SD3', 'LACHHA PYAAZ', 'Spiced Onion Rings', 2.95, 1, true, 'riverstone', 'SIDES'],
  ['SD4', 'BOONDI RAITHA', 'Yogurt with Boondi', 2.95, 0, true, 'riverstone', 'SIDES'],

  // IDLY
  ['ID1', 'IDLY(3pc)', 'Three pieces of Idly', 7.95, 0, true, 'riverstone', 'IDLY'],
  ['ID2', 'GHEE IDLY (3pc)', 'Three pieces of Ghee Idly', 8.45, 0, true, 'riverstone', 'IDLY'],
  ['ID3', 'GHEE PODI IDLY (3pc)', 'Three pieces of Ghee Podi Idly', 8.95, 2, true, 'riverstone', 'IDLY'],
  ['ID4', 'SAMBAR IDLY DIP (3pc)', 'Three pieces of Idly with Sambar Dip', 9.95, 2, true, 'riverstone', 'IDLY'],

  // CHAT
  ['CH1', 'SAMOSA (2 PCS)', 'Two pieces of Samosa', 4.95, 2, true, 'riverstone', 'CHATS'],
  ['CH2', 'PANI PURI (6pc)', 'Six pieces of Pani Puri', 5.95, 2, true, 'riverstone', 'CHATS'],
  ['CH3', 'PAPIDI CHAT', 'Papidi Chat', 6.95, 2, true, 'riverstone', 'CHATS'],
  ['CH4', 'DAHI PURI (6pc)', 'Six pieces of Dahi Puri', 6.95, 1, true, 'riverstone', 'CHATS'],
  ['CH5', 'SAMOSA CHAT', 'Samosa Chat', 8.95, 2, true, 'riverstone', 'CHATS'],
  ['CH6', 'ALOO TIKKI CHAT', 'Aloo Tikki Chat', 8.95, 2, true, 'riverstone', 'CHATS'],
  ['CH7', 'DAHI BHALLA', 'Dahi Bhalla', 8.95, 1, true, 'riverstone', 'CHATS'],

  // DOSA
  ['D1', 'PLAIN DOSA', 'Plain Dosa', 6.95, 1, true, 'riverstone', 'DOSA'],
  ['D2', 'GHEE DOSA', 'Ghee Dosa', 7.95, 1, true, 'riverstone', 'DOSA'],
  ['D3', 'GHEE PODI DOSA', 'Ghee Podi Dosa', 8.95, 2, true, 'riverstone', 'DOSA'],
  ['D4', 'ONION DOSA', 'Onion Dosa', 8.95, 1, true, 'riverstone', 'DOSA'],
  ['D5', 'KARAM DOSA', 'Karam Dosa', 8.95, 3, true, 'riverstone', 'DOSA'],
  ['D6', 'EGG DOSA', 'Egg Dosa', 10.95, 1, false, 'riverstone', 'DOSA'],
  ['D7', 'MASALA DOSA', 'Masala Dosa', 10.95, 2, true, 'riverstone', 'DOSA'],
  ['D8', 'PANEER DOSA', 'Paneer Dosa', 10.95, 2, true, 'riverstone', 'DOSA'],
  ['D9', 'CHICKEN DOSA', 'Chicken Dosa', 10.95, 2, false, 'riverstone', 'DOSA'],
  ['D10', 'LAMB DOSA', 'Lamb Dosa', 10.95, 2, false, 'riverstone', 'DOSA'],
  ['D11', 'GHEE KARAM DOSA', 'Ghee Karam Dosa', 10.95, 3, true, 'riverstone', 'DOSA'],
  ['D12', 'EGG KARAM DOSA', 'Egg Karam Dosa', 11.95, 3, false, 'riverstone', 'DOSA'],
  ['D13', 'ONION KARAM DOSA', 'Onion Karam Dosa', 11.95, 3, true, 'riverstone', 'DOSA'],
  ['D14', 'MASALA KARAM DOSA', 'Masala Karam Dosa', 11.95, 3, true, 'riverstone', 'DOSA'],
  ['D15', 'PANEER KARAM DOSA', 'Paneer Karam Dosa', 11.95, 3, true, 'riverstone', 'DOSA'],
  ['D16', 'CHICKEN KARAM DOSA', 'Chicken Karam Dosa', 11.95, 3, false, 'riverstone', 'DOSA'],
  ['D17', 'LAMB KARAM DOSA', 'Lamb Karam Dosa', 11.95, 3, false, 'riverstone', 'DOSA'],

  // ROLLS
  ['R1', 'PANNER TIKKA ROLL', 'Paneer Tikka Roll', 9.95, 2, true, 'riverstone', 'ROLLS'],
  ['R2', 'SOYA CHAAP ROLL', 'Soya Chaap Roll', 9.95, 2, true, 'riverstone', 'ROLLS'],
  ['R3', 'CHICKEN TIKKA ROLL', 'Chicken Tikka Roll', 9.95, 2, false, 'riverstone', 'ROLLS'],

  // KULCHAS
  ['K1', 'KEEMA KULCHA (1pc)', 'One piece Keema Kulcha with Gravy & Yoghurt', 7.95, 2, false, 'riverstone', 'KULCHAS'],
  ['K2', 'ALOO POORI (2pc)', 'Two pieces of Aloo Poori', 10.95, 2, true, 'riverstone', 'KULCHAS'],
  ['K3', 'ALOO PARATHA (2pc)', 'Two pieces of Aloo Paratha', 12.95, 2, true, 'riverstone', 'KULCHAS'],
  ['K4', 'CHOLE BATHURA', 'Chole Bathura', 13.95, 2, true, 'riverstone', 'KULCHAS'],
  ['K5', 'AMIRTSARI KULCHA (2pc)', 'Two pieces of Amirtsari Kulcha', 14.95, 2, true, 'riverstone', 'KULCHAS'],

  // CURRIES
  ['CU1', 'DAAL TADKA', 'Daal Tadka Curry', 12.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU2', 'PALAK PANNER', 'Palak Paneer Curry', 12.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU3', 'CHIKPEAS CURRY', 'Chickpeas Curry', 10.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU4', 'BUTTER PANNER', 'Butter Paneer Curry', 12.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU5', 'PANNER BHURJI', 'Paneer Bhurji Curry', 13.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU6', 'SOYA CHAP MASALA', 'Soya Chap Masala Curry', 14.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU7', 'EGG BHURJI', 'Egg Bhurji Curry', 14.95, 2, false, 'riverstone', 'CURRIES'],
  ['CU8', 'KADAI PANNER', 'Kadai Paneer Curry', 14.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU9', 'DAAL MAKHNI', 'Daal Makhni Curry', 14.95, 2, true, 'riverstone', 'CURRIES'],
  ['CU10', 'BUTTER CHICKEN(MILD)', 'Mild Butter Chicken Curry', 14.95, 1, false, 'riverstone', 'CURRIES'],
  ['CU11', 'CHICKEN CURRY', 'Traditional Chicken Curry', 15.95, 2, false, 'riverstone', 'CURRIES'],
  ['CU12', 'CHICKEN TIKKA MASALA', 'Chicken Tikka Masala Curry', 15.95, 2, false, 'riverstone', 'CURRIES'],
  ['CU13', 'KADAI CHICKEN', 'Kadai Chicken Curry', 15.95, 2, false, 'riverstone', 'CURRIES'],
  ['CU14', 'GOAT CURRY', 'Traditional Goat Curry', 16.95, 3, false, 'riverstone', 'CURRIES'],
  ['CU15', 'LAMB CURRY', 'Traditional Lamb Curry', 16.95, 3, false, 'riverstone', 'CURRIES'],

  // BIRYANI
  ['B1', 'CHCIKEN DUM BIRYANI', 'Chicken Dum Biryani', 15.95, 2, false, 'riverstone', 'BIRYANI'],
  ['B2', 'GOAT BIRYANI', 'Goat Biryani', 16.95, 3, false, 'riverstone', 'BIRYANI'],
  ['B3', 'LAMB BIRYANI', 'Lamb Biryani', 16.95, 3, false, 'riverstone', 'BIRYANI'],

  // DESSERT
  ['DE1', 'GULAB JAMUN', 'Three pieces.', 5.95, 0, true, 'riverstone', 'DESSERT'],

  // DRINKS
  ['DR1', 'WATER', 'Water', 2.95, 0, true, 'riverstone', 'DRINKS'],
  ['DR2', 'COLA CAN', 'Cola Can', 2.95, 0, true, 'riverstone', 'DRINKS'],
  ['DR3', 'TEA', 'Tea', 2.95, 0, true, 'riverstone', 'DRINKS'],
  ['DR4', 'SWEET LASSI', 'Sweet Lassi', 3.95, 0, true, 'riverstone', 'DRINKS'],
  ['DR5', 'SALTED LASSI', 'Salted Lassi', 3.95, 0, true, 'riverstone', 'DRINKS'],
  ['DR6', 'MANGO LASSI', 'Mango Lassi', 3.95, 0, true, 'riverstone', 'DRINKS'],
];

const MENU_ITEMS: (MenuItem & { rating?: number, ratingCount?: number })[] = menuData.map(item => 
  Object.fromEntries(prop.map((key, index) => [key, item[index]]))
) as any;

  export default MENU_ITEMS;