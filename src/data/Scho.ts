const MENU_ITEMS: any[] = [
    // BIRYANI
    {
      id: 'B1',
      name: 'VEG DUM BIRYAN',
      description: 'Traditional vegetarian dum biryani',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'BIRYANI'
    },
    {
      id: 'B2',
      name: 'GOBI 65-BIRYANI',
      description: 'Cauliflower 65 biryani',
      price: 16.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'BIRYANI'
    },
    {
      id: 'B3',
      name: 'BIRYANI - PANNER 65',
      description: 'Paneer 65 biryani',
      price: 16.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'BIRYANI',
    },
    {
      id: 'B4',
      name: 'CHICKEN DUM- BIRIYANI',
      description: 'Traditional dum style chicken biryani',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'BIRYANI'
    },
    {
      id: 'B5',
      name: 'CHICKEN 65-BIRYANI',
      description: 'Spicy chicken 65 biryani',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'BIRYANI',
    },
    {
      id: 'B6',
      name: 'EXTRA RAITHA',
      description: 'Yogurt side dish',
      price: 3.45,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'BIRYANI',
    },
  
    // DOSA
    {
      id: 'D1',
      name: 'PLAIN DOSA',
      description: 'Traditional plain dosa',
      price: 7.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D2',
      name: 'GHEE DOSA',
      description: 'Plain dosa with ghee',
      price: 8.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D3',
      name: 'GHEE PODI DOSA',
      description: 'Dosa with ghee and spice powder',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D4',
      name: 'SET DOSA',
      description: 'Set of soft and fluffy dosas',
      price: 9.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D5',
      name: 'SPECIAL DOSA',
      description: 'Special house dosa',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D6',
      name: 'EGG DOSA',
      description: 'Dosa with egg filling',
      price: 10.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D7',
      name: 'KARAM DOSA',
      description: 'Spicy plain dosa',
      price: 9.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D8',
      name: 'ONION DOSA',
      description: 'Dosa with onion filling',
      price: 10.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D9',
      name: 'MASALA DOSA',
      description: 'Classic masala dosa',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D10',
      name: 'PANEER DOSA',
      description: 'Dosa with paneer filling',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D11',
      name: 'CHICKEN DOSA',
      description: 'Dosa with chicken filling',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D12',
      name: 'LAMB DOSA',
      description: 'Dosa with lamb filling',
      price: 12.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D13',
      name: 'GHEE KARAM DOSA',
      description: 'Spicy dosa with ghee',
      price: 9.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D14',
      name: 'EGG KARAM DOSA',
      description: 'Spicy dosa with egg',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D15',
      name: 'ONION KARAM DOSA',
      description: 'Spicy dosa with onion',
      price: 11.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D16',
      name: 'MASALA KARAM DOSA',
      description: 'Spicy masala dosa',
      price: 13.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D17',
      name: 'PANEER KARAM DOSA',
      description: 'Spicy dosa with paneer',
      price: 13.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D18',
      name: 'CHICKEN KARAM DOSA',
      description: 'Spicy dosa with chicken',
      price: 13.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D19',
      name: 'LAMB KARAM DOSA',
      description: 'Spicy dosa with lamb',
      price: 13.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
    {
      id: 'D20',
      name: 'EXTRA SAMBAR',
      description: 'Additional sambar',
      price: 3.45,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DOSA'
    },
  
    // DRINKS
    {
      id: 'DR1',
      name: 'MANGO LASSI',
      description: 'Sweet mango yogurt drink',
      price: 3.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR2',
      name: 'COCA COLA',
      description: 'Coca Cola soft drink',
      price: 2.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DRINKS'
    },
    {
      id: 'DR3',
      name: 'WATER',
      description: 'Bottled water',
      price: 2.95,
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
      name: 'SAMOSA (2 PCS)',
      description: 'Two pieces of crispy samosa',
      price: 4.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH2',
      name: 'SAMOSA CHAT',
      description: 'Samosa topped with chutneys and spices',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH3',
      name: 'PAPIDI CHAT',
      description: 'Crispy crackers with toppings',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH4',
      name: 'ALOO TIKKI CHAT',
      description: 'Spiced potato patties topped with chutneys',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH5',
      name: 'DAHI BHALLA',
      description: 'Lentil dumplings in yogurt with chutneys',
      price: 8.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH6',
      name: 'PANI PURI',
      description: 'Hollow puris with spiced water',
      price: 5.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH7',
      name: 'DAHI PURI',
      description: 'Hollow puris with yogurt filling',
      price: 6.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
    {
      id: 'CH8',
      name: 'PURI TAKEAWAY',
      description: 'Extra puri for takeaway',
      price: 1.00,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'CHAT'
    },
  
    // DESSERT
    {
      id: 'DE1',
      name: 'GULAB JAMUN',
      description: 'Sweet milk dough balls in syrup',
      price: 5.95,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'DESSERT'
    },
  
    // NOODLES
    {
      id: 'N1',
      name: 'PLAIN VEG NOODLES',
      description: 'Simple vegetarian noodles',
      price: 14.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N2',
      name: '65 GOBI NOODLES',
      description: 'Noodles with cauliflower 65',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N3',
      name: 'SCHEZWAN - VEG NOODLES',
      description: 'Spicy schezwan vegetable noodles',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N4',
      name: 'PLAIN TRIPPLE EGG NOODLES',
      description: 'Noodles with triple egg',
      price: 15.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N5',
      name: '65 TRIPPLE EGG NOODLES',
      description: 'Noodles with triple egg and 65 sauce',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N6',
      name: 'SCHEZWAN - TRIPPLE EGG NOODLES',
      description: 'Spicy schezwan noodles with triple egg',
      price: 15.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N7',
      name: 'PLAIN CHICKEN NOODLES',
      description: 'Simple chicken noodles',
      price: 16.45,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N8',
      name: '65 CHICKEN NOODLES',
      description: 'Noodles with chicken 65',
      price: 16.45,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N9',
      name: 'SCHEZWAN - CHKN NOODLES',
      description: 'Spicy schezwan chicken noodles',
      price: 16.45,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N10',
      name: 'EXTRA CHICKEN',
      description: 'Additional chicken portion',
      price: 2.45,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
    {
      id: 'N11',
      name: 'EXTRA EGG',
      description: 'Additional egg',
      price: 1.95,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'NOODLES'
    },
  
    // RICE
    {
      id: 'R1',
      name: 'PLAIN VEG RICE',
      description: 'Plain vegetarian rice',
      price: 14.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R2',
      name: 'PLAIN TRIPPLE EGG RICE',
      description: 'Rice with triple egg',
      price: 15.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R3',
      name: 'SCHEZWAN - VEG RICE',
      description: 'Spicy schezwan vegetable rice',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R4',
      name: 'SCHEZWAN - CHKN RICE',
      description: 'Spicy schezwan chicken rice',
      price: 16.45,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R5',
      name: 'EXTRA CHICKEN',
      description: 'Additional chicken portion',
      price: 2.45,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R6',
      name: 'EXTRA EGG',
      description: 'Additional egg',
      price: 1.95,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R7',
      name: 'PLAIN VEG FRIED RICE',
      description: 'Simple vegetarian fried rice',
      price: 14.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R8',
      name: '65 GOBI FRIED RICE',
      description: 'Fried rice with cauliflower 65',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R9',
      name: 'SCHEZWAN - VEG FRIED RICE',
      description: 'Spicy schezwan vegetable fried rice',
      price: 14.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R10',
      name: 'PLAIN TRIPPLE EGG FRIED RICE',
      description: 'Fried rice with triple egg',
      price: 15.95,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R11',
      name: '65 TRIPPLE EGG FRIED RICE',
      description: 'Fried rice with triple egg and 65 sauce',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R12',
      name: 'SCHEZWAN - TRIPPLE EGG FRIED RICE',
      description: 'Spicy schezwan fried rice with triple egg',
      price: 15.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R13',
      name: 'PLAIN CHICKEN FRIED RICE',
      description: 'Simple chicken fried rice',
      price: 16.45,
      spiceLevel: 1,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R14',
      name: '65 CHICKEN FRIED RICE',
      description: 'Fried rice with chicken 65',
      price: 16.45,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R15',
      name: 'SCHEZWAN - CHKN FRIED RICE',
      description: 'Spicy schezwan chicken fried rice',
      price: 16.45,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R16',
      name: 'CHIC KEEMA FRIED RICE',
      description: 'Fried rice with minced chicken',
      price: 16.45,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
    {
      id: 'R17',
      name: 'LAMB KEEMA FRIED RICE',
      description: 'Fried rice with minced lamb',
      price: 16.45,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'RICE'
    },
  
    // SNACKS
    {
      id: 'S1',
      name: 'MIRCHI BAJJI',
      description: 'Stuffed and battered fried green chilies',
      price: 4.95,
      spiceLevel: 3,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S2',
      name: 'MIRCHI CUT',
      description: 'Cut green chilies',
      price: 4.95,
      spiceLevel: 4,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S3',
      name: 'PUNUGULU',
      description: 'Deep fried rice batter balls',
      price: 7.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S4',
      name: 'IDLY',
      description: 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER SERVED WITH SAMBAR AND PEANTU CHUTNEY',
      price: 7.95,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S5',
      name: 'GHEE IDLY',
      description: 'Idly with ghee',
      price: 8.45,
      spiceLevel: 1,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S6',
      name: 'SAMBAR IDLY DIP',
      description: 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER DIPPED IN SMABAR',
      price: 9.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
    {
      id: 'S7',
      name: 'GHEE PODI IDLY',
      description: 'Idly with ghee and spice powder',
      price: 8.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'SNACKS'
    },
  
    // STARTERS
    {
      id: 'ST1',
      name: 'VEG MANCHURIAN',
      description: 'Indo-Chinese style vegetable manchurian',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST2',
      name: 'GOBI 65',
      description: 'Cauliflower 65',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST3',
      name: 'CHILLI - GOBI',
      description: 'Indo-Chinese style chilli cauliflower',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST4',
      name: 'GOBI MANCHURIAN',
      description: 'Cauliflower manchurian',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST5',
      name: 'BABY CORN 65',
      description: 'Baby corn 65',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST6',
      name: 'CHILLI - BABY CORN',
      description: 'Indo-Chinese style chilli baby corn',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST7',
      name: 'BABY CORN MANCHURIAN',
      description: 'Baby corn in manchurian sauce',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST8',
      name: 'PANNER 65',
      description: 'Paneer 65',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST9',
      name: 'CHILLI - PANNER',
      description: 'Indo-Chinese style chilli paneer',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST10',
      name: 'PANNER MANCHURIAN',
      description: 'Paneer manchurian',
      price: 15.95,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST11',
      name: 'CHIC LOLLIPOP',
      description: 'Spiced chicken wings',
      price: 14.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST12',
      name: 'PODI CHICKEN',
      description: 'Chicken with spice powder',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST13',
      name: 'CHICKEN 65',
      description: 'Classic chicken 65',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST14',
      name: 'CHILLI - CHICKEN',
      description: 'Indo-Chinese style chilli chicken',
      price: 16.95,
      spiceLevel: 3,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST15',
      name: 'CHICKEN MANCHURIAN',
      description: 'Indo-Chinese style manchurian chicken',
      price: 16.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    {
      id: 'ST16',
      name: 'KAJU CHICKKEN PAKODA',
      description: 'Cashew chicken fritters',
      price: 17.95,
      spiceLevel: 2,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'STARTERS'
    },
    // EXTRAS
    {
      id: 'E1',
      name: 'EXTRA EGG',
      description: 'Additional egg portion',
      price: 0.60,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'EXTRAS'
    },
    {
      id: 'E2',
      name: 'EXTRA CHICKEN',
      description: 'Additional chicken portion',
      price: 1.00,
      spiceLevel: 0,
      isVegetarian: false,
      category: 'schofields',
      foodCategory: 'EXTRAS'
    },
    {
      id: 'E3',
      name: 'EXTRA ONION',
      description: 'Additional onion portion',
      price: 0.60,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'EXTRAS'
    },
    {
      id: 'E4',
      name: 'EXTRA RAITHA',
      description: 'Additional yogurt side dish',
      price: 1.00,
      spiceLevel: 0,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'EXTRAS'
    },
    {
      id: 'E5',
      name: 'EXTRA SAMBAR',
      description: 'Additional sambar',
      price: 2.45,
      spiceLevel: 2,
      isVegetarian: true,
      category: 'schofields',
      foodCategory: 'EXTRAS'
    }
  ];

  export default MENU_ITEMS;