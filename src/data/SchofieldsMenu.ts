import { MenuItem } from '../types/menu';
const prop = ['id', 'name', 'description', 'price', 'spiceLevel', 'isVegetarian', 'category', 'foodCategory']
const menuData = [
  // BIRYANI
  ['B1', 'VEG DUM BIRYAN', 'Traditional vegetarian dum biryani', 14.95, 2, true, 'schofields', 'BIRYANI'],
  ['B2', 'GOBI 65-BIRYANI', 'Cauliflower 65 biryani', 16.95, 2, true, 'schofields', 'BIRYANI'],
  ['B3', 'BIRYANI - PANNER 65', 'Paneer 65 biryani', 16.95, 2, true, 'schofields', 'BIRYANI'],
  ['B4', 'CHICKEN DUM- BIRIYANI', 'Traditional dum style chicken biryani', 14.95, 3, false, 'schofields', 'BIRYANI'],
  ['B5', 'CHICKEN 65-BIRYANI', 'Spicy chicken 65 biryani', 16.95, 3, false, 'schofields', 'BIRYANI'],
  ['B6', 'EXTRA RAITHA', 'Yogurt side dish', 1.00, 0, true, 'schofields', 'BIRYANI'],
  // DOSA
  ['D1', 'PLAIN DOSA', 'Traditional plain dosa', 7.95, 1, true, 'schofields', 'DOSA'],
  ['D2', 'GHEE DOSA', 'Plain dosa with ghee', 8.95, 1, true, 'schofields', 'DOSA'],
  ['D3', 'GHEE PODI DOSA', 'Dosa with ghee and spice powder', 10.95, 2, true, 'schofields', 'DOSA'],
  ['D4', 'SET DOSA', 'Set of soft and fluffy dosas', 9.95, 1, true, 'schofields', 'DOSA'],
  ['D5', 'SPECIAL DOSA', 'Special house dosa', 12.95, 2, true, 'schofields', 'DOSA'],
  ['D6', 'EGG DOSA', 'Dosa with egg filling', 10.95, 1, false, 'schofields', 'DOSA'],
  ['D7', 'KARAM DOSA', 'Spicy plain dosa', 9.95, 3, true, 'schofields', 'DOSA'],
  ['D8', 'ONION DOSA', 'Dosa with onion filling', 10.95, 2, true, 'schofields', 'DOSA'],
  ['D9', 'MASALA DOSA', 'Classic masala dosa', 12.95, 2, true, 'schofields', 'DOSA'],
  ['D10', 'PANEER DOSA', 'Dosa with paneer filling', 12.95, 2, true, 'schofields', 'DOSA'],
  ['D11', 'CHICKEN DOSA', 'Dosa with chicken filling', 12.95, 2, false, 'schofields', 'DOSA'],
  ['D12', 'LAMB DOSA', 'Dosa with lamb filling', 12.95, 2, false, 'schofields', 'DOSA'],
  ['D13', 'GHEE KARAM DOSA', 'Spicy dosa with ghee', 9.95, 3, true, 'schofields', 'DOSA'],
  ['D14', 'EGG KARAM DOSA', 'Spicy dosa with egg', 11.95, 3, false, 'schofields', 'DOSA'],
  ['D15', 'ONION KARAM DOSA', 'Spicy dosa with onion', 11.95, 3, true, 'schofields', 'DOSA'],
  ['D16', 'MASALA KARAM DOSA', 'Spicy masala dosa', 13.95, 3, true, 'schofields', 'DOSA'],
  ['D17', 'PANEER KARAM DOSA', 'Spicy dosa with paneer', 13.95, 3, true, 'schofields', 'DOSA'],
  ['D18', 'CHICKEN KARAM DOSA', 'Spicy dosa with chicken', 13.95, 3, false, 'schofields', 'DOSA'],
  ['D19', 'LAMB KARAM DOSA', 'Spicy dosa with lamb', 13.95, 3, false, 'schofields', 'DOSA'],
  ['D20', 'EXTRA SAMBAR', 'Additional sambar', 2.45, 2, true, 'schofields', 'DOSA'],
  // DRINKS
  ['DR1', 'MANGO LASSI', 'Sweet mango yogurt drink', 3.95, 0, true, 'schofields', 'DRINKS'],
  ['DR2', 'COCA COLA', 'Coca Cola soft drink', 2.95, 0, true, 'schofields', 'DRINKS'],
  ['DR3', 'WATER', 'Bottled water', 2.95, 0, true, 'schofields', 'DRINKS'],
  ['DR4', 'MASALA TEA', 'Indian spiced tea', 3.95, 1, true, 'schofields', 'DRINKS'],
  // CHAT
  ['CH1', 'SAMOSA (2 PCS)', 'Two pieces of crispy samosa', 4.95, 2, true, 'schofields', 'CHAT'],
  ['CH2', 'CHICKEN SAMOSA', 'Crispy chicken samosa', 5.95, 2, false, 'schofields', 'CHAT'],
  ['CH3', 'PAPIDI CHAT', 'Crispy crackers with toppings', 8.95, 2, true, 'schofields', 'CHAT'],
  ['CH4', 'PURI TAKEAWAY', 'Extra puri for takeaway', 1.00, 0, true, 'schofields', 'CHAT'],
  // DESSERT
  ['DE1', 'GULAB JAMUN', 'Sweet milk dough balls in syrup', 5.95, 0, true, 'schofields', 'DESSERT'],
  // NOODLES
  ['N1', 'PLAIN VEG NOODLES', 'Simple vegetarian noodles', 14.95, 1, true, 'schofields', 'NOODLES'],
  ['N2', 'PLAIN TRIPPLE EGG NOODLES', 'Noodles with triple egg', 15.95, 1, false, 'schofields', 'NOODLES'],
  ['N3', 'SCHEZWAN - VEG NOODLES', 'Spicy schezwan vegetable noodles', 16.45, 3, true, 'schofields', 'NOODLES'],
  ['N4', 'SCHEZWAN - CHKN NOODLES', 'Spicy schezwan chicken noodles', 16.45, 3, false, 'schofields', 'NOODLES'],
  ['N5', 'EXTRA CHICKEN', 'Additional chicken portion', 1.00, 0, false, 'schofields', 'NOODLES'],
  ['N6', 'EXTRA EGG', 'Additional egg', 0.60, 0, false, 'schofields', 'NOODLES'],
  // RICE
  ['R1', 'PLAIN VEG RICE', 'Plain vegetarian rice', 14.95, 1, true, 'schofields', 'RICE'],
  ['R2', 'PLAIN TRIPPLE EGG RICE', 'Rice with triple egg', 15.95, 1, false, 'schofields', 'RICE'],
  ['R3', 'SCHEZWAN - VEG RICE', 'Spicy schezwan vegetable rice', 14.95, 3, true, 'schofields', 'RICE'],
  ['R4', 'SCHEZWAN - CHKN RICE', 'Spicy schezwan chicken rice', 16.45, 3, false, 'schofields', 'RICE'],
  ['R5', 'EXTRA CHICKEN', 'Additional chicken portion', 1.00, 0, false, 'schofields', 'RICE'],
  ['R6', 'EXTRA EGG', 'Additional egg', 0.60, 0, false, 'schofields', 'RICE'],
  ['R7', 'PLAIN VEG FRIED RICE', 'Simple vegetarian fried rice', 14.95, 1, true, 'schofields', 'RICE'],
  ['R8', '65 GOBI FRIED RICE', 'Fried rice with cauliflower 65', 15.95, 2, true, 'schofields', 'RICE'],
  ['R9', 'SCHEZWAN - VEG FRIED RICE', 'Spicy schezwan vegetable fried rice', 14.95, 3, true, 'schofields', 'RICE'],
  ['R10', 'PLAIN TRIPPLE EGG FRIED RICE', 'Fried rice with triple egg', 15.95, 1, false, 'schofields', 'RICE'],
  ['R11', '65 TRIPPLE EGG FRIED RICE', 'Fried rice with triple egg and 65 sauce', 15.95, 2, false, 'schofields', 'RICE'],
  ['R12', 'SCHEZWAN - TRIPPLE EGG FRIED RICE', 'Spicy schezwan fried rice with triple egg', 15.95, 3, false, 'schofields', 'RICE'],
  ['R13', 'PLAIN CHICKEN FRIED RICE', 'Simple chicken fried rice', 16.45, 1, false, 'schofields', 'RICE'],
  ['R14', '65 CHICKEN FRIED RICE', 'Fried rice with chicken 65', 16.45, 2, false, 'schofields', 'RICE'],
  ['R15', 'SCHEZWAN - CHKN FRIED RICE', 'Spicy schezwan chicken fried rice', 16.45, 3, false, 'schofields', 'RICE'],
  ['R16', 'CHIC KEEMA FRIED RICE', 'Fried rice with minced chicken', 16.45, 2, false, 'schofields', 'RICE'],
  ['R17', 'LAMB KEEMA FRIED RICE', 'Fried rice with minced lamb', 16.45, 2, false, 'schofields', 'RICE'],
  // SNACKS
  ['S1', 'MIRCHI BAJJI', 'Stuffed and battered fried green chilies', 4.95, 3, true, 'schofields', 'SNACKS'],
  ['S2', 'MIRCHI CUT', 'Cut green chilies', 4.95, 4, true, 'schofields', 'SNACKS'],
  ['S3', 'PUNUGULU', 'Deep fried rice batter balls', 7.95, 2, true, 'schofields', 'SNACKS'],
  ['S4', 'IDLY', 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER SERVED WITH SAMBAR AND PEANTU CHUTNEY', 7.95, 1, true, 'schofields', 'SNACKS'],
  ['S5', 'GHEE IDLY', 'Idly with ghee', 8.45, 1, true, 'schofields', 'SNACKS'],
  ['S6', 'SAMBAR IDLY DIP', 'SOFT STEAMED SAVORY CAKE MADE FORM FERMENTED RICE AND LENTIL BATTER DIPPED IN SMABAR', 9.95, 2, true, 'schofields', 'SNACKS'],
  ['S7', 'GHEE PODI IDLY', 'Idly with ghee and spice powder', 8.95, 2, true, 'schofields', 'SNACKS'],
  // STARTERS
  ['ST1', 'VEG MANCHURIAN', 'Indo-Chinese style vegetable manchurian', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST2', 'GOBI 65', 'Cauliflower 65', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST3', 'CHILLI - GOBI', 'Indo-Chinese style chilli cauliflower', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST4', 'GOBI MANCHURIAN', 'Cauliflower manchurian', 15.95, 2, true, 'schofields', 'STARTERS', true],
  ['ST5', 'BABY CORN 65', 'Baby corn 65', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST6', 'CHILLI - BABY CORN', 'Indo-Chinese style chilli baby corn', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST7', 'BABY CORN MANCHURIAN', 'Baby corn in manchurian sauce', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST8', 'PANNER 65', 'Paneer 65', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST9', 'CHILLI - PANNER', 'Indo-Chinese style chilli paneer', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST10', 'PANNER MANCHURIAN', 'Paneer manchurian', 15.95, 2, true, 'schofields', 'STARTERS'],
  ['ST11', 'CHIC LOLLIPOP', 'Spiced chicken wings', 14.95, 2, false, 'schofields', 'STARTERS', true],
  ['ST12', 'PODI CHICKEN', 'Chicken with spice powder', 16.95, 3, false, 'schofields', 'STARTERS'],
  ['ST13', 'CHICKEN 65', 'Classic chicken 65', 16.95, 3, false, 'schofields', 'STARTERS'],
  ['ST14', 'CHILLI - CHICKEN', 'Indo-Chinese style chilli chicken', 16.95, 3, false, 'schofields', 'STARTERS'],
  ['ST15', 'CHICKEN MANCHURIAN', 'Indo-Chinese style manchurian chicken', 16.95, 2, false, 'schofields', 'STARTERS', true],
  ['ST16', 'KAJU CHICKKEN PAKODA', 'Cashew chicken fritters', 17.95, 2, false, 'schofields', 'STARTERS'],
  // EXTRAS
  ['E1', 'EXTRA EGG', 'Additional egg portion', 0.60, 0, false, 'schofields', 'EXTRAS'],
  ['E2', 'EXTRA CHICKEN', 'Additional chicken portion', 1.00, 0, false, 'schofields', 'EXTRAS'],
  ['E3', 'EXTRA ONION', 'Additional onion portion', 0.60, 0, true, 'schofields', 'EXTRAS'],
  ['E4', 'EXTRA RAITHA', 'Additional yogurt side dish', 1.00, 0, true, 'schofields', 'EXTRAS'],
  ['E5', 'EXTRA SAMBAR', 'Additional sambar', 2.45, 2, true, 'schofields', 'EXTRAS']
];

const MENU_ITEMS: (MenuItem & { rating?: number, ratingCount?: number })[] = menuData.map(item => 
  Object.fromEntries(prop.map((key, index) => [key, item[index]]))
) as any;

export default MENU_ITEMS;