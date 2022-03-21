import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, category, price, ratings, img, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4> <br />
        <h5>Price: ${price}</h5>
        <p>Seller: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="main-btn">
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
