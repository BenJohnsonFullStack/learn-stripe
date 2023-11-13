const products = [
  {
    id: 1,
    title: "Coffee",
    price: 4.99,
  },
  {
    id: 2,
    title: "Sunglasses",
    price: 10.99,
  },
  {
    id: 3,
    title: "Blanket",
    price: 6.99,
  },
  {
    id: 4,
    title: "Vacuum",
    price: 37.99,
  },
  {
    id: 5,
    title: "Dog Leash",
    price: 14.99,
  },
  {
    id: 6,
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
