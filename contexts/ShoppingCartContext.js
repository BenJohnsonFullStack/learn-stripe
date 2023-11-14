"use client";

import { createContext, useState } from "react";
import { getProductData } from "@/constants";

export const ShoppingCartContext = createContext({
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
    const quantity = getProductQuantity(id);

    if (!quantity) {
      setCartProducts((cartProducts) => [
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts((cartProducts) =>
        cartProducts.map((product) => {
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        })
      );
    }
  };

  const decrementItemQuantity = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      removeFromCart(id);
    } else {
      setCartProducts((cartProducts) =>
        cartProducts.map((product) => {
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        })
      );
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((product) => {
      const productData = getProductData(product.id);
      totalCost += productData.price * product.quantity;
    });

    return totalCost;
  };

  const removeFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id !== id)
    );
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

export default ShoppingCartProvider;
