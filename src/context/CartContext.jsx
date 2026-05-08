import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('flex-cart');
    const savedWishlist = localStorage.getItem('flex-wishlist');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('flex-cart', JSON.stringify(cart));
  }, [cart]);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('flex-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(item => item.id === product.id);
      if (exists) {
        return prevWishlist.filter(item => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
