import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleDeleteButton } = props;
  const { name, price, shipping, quantity, img } = product;

  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" width={70} height={70} />
      </div>
      <div className="item-heading">
        {" "}
        <h5> {name}</h5>
        <p>Price: ${price}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div onClick={() => handleDeleteButton(product)} className="delete-btn">
        <FontAwesomeIcon className="btn" icon={faTrash}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ReviewItem;
