import { MenuItem } from '../types/menu';

const MENU_ITEMS: (MenuItem & { rating?: number, ratingCount?: number })[] = [
    // STARTERS
    {
      id: 'ST1',
      name: 'PANNER TIKKA',
      description: 'Panner Tikka',
      price: 13.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST2',
      name: 'SOYA CHAAP(TANDOORI)',
      description: 'Soya Chaap Tandoori Style',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST3',
      name: 'SOYA CHAAP(MALAI)',
      description: 'Soya Chaap in Malai Style',
      price: 13.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST4',
      name: 'ANGARA CHICKEN (Spicy)',
      description: 'Spicy Angara Chicken',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST5',
      name: 'CHICKEN TIKKA (5pc)',
      description: 'Chicken Tikka - 5 pieces',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST6',
      name: 'TANDOORI CHICKEN(HALF)',
      description: 'Half Tandoori Chicken',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST7',
      name: 'TANDOORI CHICKEN(FULL)',
      description: 'Full Tandoori Chicken',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST8',
      name: 'LAMB KEBAB (5pc)',
      description: 'Lamb Kebab - 5 pieces',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST9',
      name: 'AMRITSARI FISH FRY',
      description: 'Amritsari Style Fish Fry',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST10',
      name: 'CHILLI CKICKEN',
      description: 'Spicy Chilli Chicken',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST11',
      name: 'VEG PAKODAS',
      description: 'Vegetable Pakoras',
      price: 5.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'STARTERS'
    },
  
    // SNACKS
    {
      id: 'SN1',
      name: 'MIRCHI BAJJI (2pc)',
      description: 'Two pieces of Mirchi Bajji',
      price: 4.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN2',
      name: 'MIRCHI CUT',
      description: 'Cut Mirchi',
      price: 5.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN3',
      name: 'PUNUGULU',
      description: 'Punugulu',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN4',
      name: 'IDLY(3pc)',
      description: 'Three pieces of Idly',
      price: 7.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN5',
      name: 'GHEE IDLY (3pc)',
      description: 'Three pieces of Ghee Idly',
      price: 8.45,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN6',
      name: 'GHEE PODI IDLY (3pc)',
      description: 'Three pieces of Ghee Podi Idly',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
    {
      id: 'SN7',
      name: 'SAMBAR IDLY DIP (3pc)',
      description: 'Three pieces of Idly with Sambar Dip',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SNACKS'
    },
  
    // NAAN
    {
      id: 'N1',
      name: 'PLAIN NAAN',
      description: 'Plain Naan',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N2',
      name: 'CHILLI NAAN',
      description: 'Spicy Chilli Naan',
      price: 2.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N3',
      name: 'GARLIC NAAN',
      description: 'Garlic Flavored Naan',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N4',
      name: 'TANDOORI ROTI',
      description: 'Traditional Tandoori Roti',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N5',
      name: 'CHEESY GARLIC NAAN',
      description: 'Naan with Cheese and Garlic',
      price: 4.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N6',
      name: 'CHEESE NAAN',
      description: 'Naan with Cheese',
      price: 4.45,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
    {
      id: 'N7',
      name: 'CHILLI GARLIC NAAN',
      description: 'Spicy Naan with Garlic',
      price: 3.45,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'NAANS'
    },
  
    // SIDES
    {
      id: 'SD1',
      name: 'SAMBAR',
      description: 'Sambar',
      price: 2.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SIDES'
    },
    {
      id: 'SD2',
      name: 'SALAD',
      description: 'Fresh Salad',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SIDES'
    },
    {
      id: 'SD3',
      name: 'LACHHA PYAAZ',
      description: 'Spiced Onion Rings',
      price: 2.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SIDES'
    },
    {
      id: 'SD4',
      name: 'BOONDI RAITHA',
      description: 'Yogurt with Boondi',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'SIDES'
    },
  
    // IDLY
    {
      id: 'ID1',
      name: 'IDLY(3pc)',
      description: 'Three pieces of Idly',
      price: 7.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'IDLY'
    },
    {
      id: 'ID2',
      name: 'GHEE IDLY (3pc)',
      description: 'Three pieces of Ghee Idly',
      price: 8.45,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'IDLY'
    },
    {
      id: 'ID3',
      name: 'GHEE PODI IDLY (3pc)',
      description: 'Three pieces of Ghee Podi Idly',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'IDLY'
    },
    {
      id: 'ID4',
      name: 'SAMBAR IDLY DIP (3pc)',
      description: 'Three pieces of Idly with Sambar Dip',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'IDLY'
    },
  
    // CHAT
    {
      id: 'CH1',
      name: 'SAMOSA (2 PCS)',
      description: 'Two pieces of Samosa',
      price: 4.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH2',
      name: 'PANI PURI (6pc)',
      description: 'Six pieces of Pani Puri',
      price: 5.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH3',
      name: 'PAPIDI CHAT',
      description: 'Papidi Chat',
      price: 6.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH4',
      name: 'DAHI PURI (6pc)',
      description: 'Six pieces of Dahi Puri',
      price: 6.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH5',
      name: 'SAMOSA CHAT',
      description: 'Samosa Chat',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH6',
      name: 'ALOO TIKKI CHAT',
      description: 'Aloo Tikki Chat',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
    {
      id: 'CH7',
      name: 'DAHI BHALLA',
      description: 'Dahi Bhalla',
      price: 8.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CHATS'
    },
  
    // DOSA
    {
      id: 'D1',
      name: 'PLAIN DOSA',
      description: 'Plain Dosa',
      price: 6.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D2',
      name: 'GHEE DOSA',
      description: 'Ghee Dosa',
      price: 7.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D3',
      name: 'GHEE PODI DOSA',
      description: 'Ghee Podi Dosa',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D4',
      name: 'ONION DOSA',
      description: 'Onion Dosa',
      price: 8.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D5',
      name: 'KARAM DOSA',
      description: 'Karam Dosa',
      price: 8.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D6',
      name: 'EGG DOSA',
      description: 'Egg Dosa',
      price: 10.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D7',
      name: 'MASALA DOSA',
      description: 'Masala Dosa',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D8',
      name: 'PANEER DOSA',
      description: 'Paneer Dosa',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D9',
      name: 'CHICKEN DOSA',
      description: 'Chicken Dosa',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D10',
      name: 'LAMB DOSA',
      description: 'Lamb Dosa',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D11',
      name: 'GHEE KARAM DOSA',
      description: 'Ghee Karam Dosa',
      price: 10.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D12',
      name: 'EGG KARAM DOSA',
      description: 'Egg Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D13',
      name: 'ONION KARAM DOSA',
      description: 'Onion Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D14',
      name: 'MASALA KARAM DOSA',
      description: 'Masala Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D15',
      name: 'PANEER KARAM DOSA',
      description: 'Paneer Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D16',
      name: 'CHICKEN KARAM DOSA',
      description: 'Chicken Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
    {
      id: 'D17',
      name: 'LAMB KARAM DOSA',
      description: 'Lamb Karam Dosa',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'DOSA'
    },
  
    // ROLLS
    {
      id: 'R1',
      name: 'PANNER TIKKA ROLL',
      description: 'Paneer Tikka Roll',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'ROLLS'
    },
    {
      id: 'R2',
      name: 'SOYA CHAAP ROLL',
      description: 'Soya Chaap Roll',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'ROLLS'
    },
    {
      id: 'R3',
      name: 'CHICKEN TIKKA ROLL',
      description: 'Chicken Tikka Roll',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'ROLLS'
    },
  
    // KULCHAS
    {
      id: 'K1',
      name: 'KEEMA KULCHA (1pc)',
      description: 'One piece Keema Kulcha with Gravy & Yoghurt',
      price: 7.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'KULCHAS'
    },
    {
      id: 'K2',
      name: 'ALOO POORI (2pc)',
      description: 'Two pieces of Aloo Poori',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'KULCHAS'
    },
    {
      id: 'K3',
      name: 'ALOO PARATHA (2pc)',
      description: 'Two pieces of Aloo Paratha',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'KULCHAS'
    },
    {
      id: 'K4',
      name: 'CHOLE BATHURA',
      description: 'Chole Bathura',
      price: 13.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'KULCHAS'
    },
    {
      id: 'K5',
      name: 'AMIRTSARI KULCHA (2pc)',
      description: 'Two pieces of Amirtsari Kulcha',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'KULCHAS'
    },
  
    // CURRIES
    {
      id: 'CU1',
      name: 'DAAL TADKA',
      description: 'Daal Tadka Curry',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU2',
      name: 'PALAK PANNER',
      description: 'Palak Paneer Curry',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU3',
      name: 'CHIKPEAS CURRY',
      description: 'Chickpeas Curry',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU4',
      name: 'BUTTER PANNER',
      description: 'Butter Paneer Curry',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU5',
      name: 'PANNER BHURJI',
      description: 'Paneer Bhurji Curry',
      price: 13.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU6',
      name: 'SOYA CHAP MASALA',
      description: 'Soya Chap Masala Curry',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU7',
      name: 'EGG BHURJI',
      description: 'Egg Bhurji Curry',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU8',
      name: 'KADAI PANNER',
      description: 'Kadai Paneer Curry',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU9',
      name: 'DAAL MAKHNI',
      description: 'Daal Makhni Curry',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU10',
      name: 'BUTTER CHICKEN(MILD)',
      description: 'Mild Butter Chicken Curry',
      price: 14.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU11',
      name: 'CHICKEN CURRY',
      description: 'Traditional Chicken Curry',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU12',
      name: 'CHICKEN TIKKA MASALA',
      description: 'Chicken Tikka Masala Curry',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU13',
      name: 'KADAI CHICKEN',
      description: 'Kadai Chicken Curry',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU14',
      name: 'GOAT CURRY',
      description: 'Traditional Goat Curry',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
    {
      id: 'CU15',
      name: 'LAMB CURRY',
      description: 'Traditional Lamb Curry',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'CURRIES'
    },
  
    // BIRYANI
    {
      id: 'B1',
      name: 'CHCIKEN DUM BIRYANI',
      description: 'Chicken Dum Biryani',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'BIRYANI'
    },
    {
      id: 'B2',
      name: 'GOAT BIRYANI',
      description: 'Goat Biryani',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'BIRYANI'
    },
    {
      id: 'B3',
      name: 'LAMB BIRYANI',
      description: 'Lamb Biryani',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'riverstone',
      foodCategory: 'BIRYANI'
    },
  
  
    // DESSERT
    {
      id: 'DE1',
      name: 'GULAB JAMUN',
      description: 'Three pieces.',
      price: 5.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DESSERT'
    },
  
  
    // DRINKS
    {
      id: 'DR1',
      name: 'WATER',
      description: 'Water',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR2',
      name: 'COLA CAN',
      description: 'Cola Can',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR3',
      name: 'SWEET LASSI',
      description: 'Sweet Lassi',
      price: 3.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR4',
      name: 'SALTED LASSI',
      description: 'Salted Lassi',
      price: 3.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR5',
      name: 'MANGO LASSI',
      description: 'Mango Lassi',
      price: 3.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'riverstone',
      foodCategory: 'DRINKS'
    },
  
  ];

  export default MENU_ITEMS;