import { Button } from "react-bootstrap";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useContext } from "react";
import { getProductData } from "@/constants";

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(ShoppingCartContext);
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>Quantity: {quantity}</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button
        size="sm"
        onClick={() => cart.removeFromCart(id)}
        variant="danger"
      >
        Remove
      </Button>
      <hr></hr>
    </>
  );
};

export default CartProduct;
