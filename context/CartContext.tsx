"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from "react";

export interface CartItem {
  productId: string;
  productName: string;
  priceCents: number;
  currency: string;
  imageUrl: string | null;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount (defer to avoid blocking initial render)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use requestIdleCallback or setTimeout to defer localStorage read
      const loadCart = () => {
        try {
          const savedCart = localStorage.getItem("zahi-cart");
          if (savedCart) {
            setItems(JSON.parse(savedCart));
          }
        } catch (e) {
          console.error("Failed to load cart from localStorage", e);
        }
      };

      if (window.requestIdleCallback) {
        const id = window.requestIdleCallback(loadCart, { timeout: 100 });
        return () => window.cancelIdleCallback(id);
      } else {
        const timeoutId = setTimeout(loadCart, 0);
        return () => clearTimeout(timeoutId);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes (debounced to avoid blocking)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use requestIdleCallback for non-blocking writes, fallback to setTimeout
      const saveCart = () => {
        try {
      localStorage.setItem("zahi-cart", JSON.stringify(items));
        } catch (e) {
          console.error("Failed to save cart to localStorage", e);
        }
      };

      if (window.requestIdleCallback) {
        const id = window.requestIdleCallback(saveCart, { timeout: 1000 });
        return () => window.cancelIdleCallback(id);
      } else {
        const timeoutId = setTimeout(saveCart, 0);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [items]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.productId === item.productId);
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.priceCents * item.quantity, 0);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => totalPrice, [totalPrice]);
  const getItemCount = useCallback(() => itemCount, [itemCount]);

  const value = useMemo(
    () => ({
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getItemCount,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getItemCount]
  );

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

