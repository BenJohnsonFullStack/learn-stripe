const products = [
  {
    id: process.env.NEXT_PUBLIC_COFFEE_PRICE_ID,
    title: "Coffee",
    price: 4.99,
  },
  {
    id: process.env.NEXT_PUBLIC_SUNGLASSES_PRICE_ID,
    title: "Sunglasses",
    price: 10.99,
  },
  {
    id: process.env.NEXT_PUBLIC_BLANKET_PRICE_ID,
    title: "Blanket",
    price: 6.99,
  },
  {
    id: process.env.NEXT_PUBLIC_VACUUM_PRICE_ID,
    title: "Vacuum",
    price: 37.99,
  },
  {
    id: process.env.NEXT_PUBLIC_DOGLEASH_PRICE_ID,
    title: "Dog Leash",
    price: 14.99,
  },
  {
    id: process.env.NEXT_PUBLIC_LAWNCHAIR_PRICE_ID,
    title: "Lawn Chair",
    price: 36.99,
  },
];

const getProductData = (id) => {
  const productData = products.find((product) => product.id === id);

  if (!productData) {
    alert("A product with that Product ID could not be found.");
    return;
  }

  return productData;
};

export { products, getProductData };
