import { useCartStore } from '@/store/cartStore';
import { Product } from '@/lib/api';

export const useCart = () => {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  const addToCart = (product: Product, quantity = 1) => {
    addItem(product, quantity);
  };

  const removeFromCart = (productId: number) => {
    removeItem(productId);
  };

  const updateItemQuantity = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const clearAllItems = () => {
    clearCart();
  };

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearAllItems,
  };
};