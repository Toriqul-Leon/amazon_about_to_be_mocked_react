import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Card/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleDeleteButton = (product) => {
    let rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id)
  };
  return (
    <div className="container">
      <div className="review-container">
        {cart.map((product) => {
          return (
            <ReviewItem
              handleDeleteButton={handleDeleteButton}
              key={product.id}
              product={product}
            ></ReviewItem>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
