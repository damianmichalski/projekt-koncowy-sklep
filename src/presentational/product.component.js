import React from "react";
import "./products.css";

const Product = props => {
  return (
    <div className="product" key={props.id}>
      <div className="productPictureArea">
        <img
          className="productPicture"
          src={process.env.PUBLIC_URL + `${props.picture}`}
          alt={props.id}
        />
      </div>
      <div className="productTextArea">
        <div className="productName">{props.name} </div>

        <div className="productPrice">{`$${parseFloat(props.price).toFixed(
          2
        )}`}</div>
        <div
          className={
            props.inMagazine === 0 ? "soldArea " : "soldArea soldArea--hidden"
          }
        >
          <p className="sold">Wyprzedane</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
