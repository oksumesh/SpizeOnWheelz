import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuItem } from '../types/menu';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  isItemInCart: (itemId: string) => boolean;
  getItemQuantity: (itemId: string) => number;
  incrementQuantity: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const location = useLocation();

  // Reset cart when location changes
  useEffect(() => {
    setItems([]);
  }, [location.pathname]);

  const addToCart = (item: MenuItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const isItemInCart = (itemId: string) => {
    return items.some((item) => item.id === itemId);
  };

  const getItemQuantity = (itemId: string) => {
    return items.find((item) => item.id === itemId)?.quantity || 0;
  };

  const incrementQuantity = (itemId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId: string) => {
    setItems((currentItems) => {
      // Find the item
      const item = currentItems.find((i) => i.id === itemId);
      
      // If item not found or quantity is already 0, return current items
      if (!item || item.quantity === 0) return currentItems;
      
      // If quantity is 1, remove the item
      if (item.quantity === 1) {
        return currentItems.filter((i) => i.id !== itemId);
      }
      
      // Otherwise decrease quantity by 1
      return currentItems.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      isItemInCart,
      getItemQuantity,
      incrementQuantity,
      decrementQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 