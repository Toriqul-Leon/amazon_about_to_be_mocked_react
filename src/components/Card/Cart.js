import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <h5>Selected Items: {quantity}</h5>
      <h5>Total Price: $ {total}</h5>
      <h5>Total Shipping Charge: $ {shipping}</h5>
      <h5>Tax: $ {tax.toFixed(2)} </h5>
      <h5>Grand Total: $ {grandTotal.toFixed(2)} </h5>
      <div className="btn-container">
        <button className="cart-btn">
          Clear Cart
          <FontAwesomeIcon className="fa-icon" icon={faTrashCan} />
        </button>

        <button className="cart-btn">
          Review Order{" "}
          <FontAwesomeIcon className="fa-icon" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
