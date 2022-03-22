import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { addToCart, product } = props;
  const { name, price, ratings, img, seller } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4> <br />
        <h5>Price: ${price}</h5>
        <p>Seller: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => addToCart(product)} className="main-btn">
        <p>
          Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Product;
