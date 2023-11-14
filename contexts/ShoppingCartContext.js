"use client";

import { createContext, useState } from "react";
import { products } from "@/constants";

const ShoppingCartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  incrementCartQuantity: () => {},
  decrementItemQuantity: () => {},
  removeFromCart: () => {},
  getTotalCost: () => {},
});

const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (!quantity) return 0;

    return quantity;
  };

  const incrementCartQuantity = (id) => {
    const productExists = getProductQuantity(id);

    if (!productExists) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      cartProducts.map((product) => {
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    }
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    incrementCartQuantity,
    decrementItemQuantity,
    removeFromCart,
    getTotalCost,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
