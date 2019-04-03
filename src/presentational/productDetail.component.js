import React from "react";
import "./productDetail.css";

const ProductDetail = props => (
  <div className="productDetailComponent">
    <div className="productDetailContainer">
      <div className="productDetailImageArea">
        <img
          className="productDetailImage"
          src={process.env.PUBLIC_URL + `${props.product.picture}`}
          alt={`product${props.product.id}`}
        />
      </div>
      <div className="productDetailDescriptions">
        <p className="productDetailTitle">{props.product.name}</p>
        <p className="productDetailPrice">{`$${parseFloat(
          props.product.price
        ).toFixed(2)}`}</p>
        <p className="productDetailText">{props.product.description}</p>
        <button
          className={
            props.product.inMagazine - props.product.count === 0 ||
            props.product.inMagazine === 0
              ? "buttonCart buttonCart--empty"
              : "buttonCart "
          }
          onClick={() => props.handleClickAddToCart(props.product.id)}
        >
          {props.product.inMagazine - props.product.count === 0 ||
          props.product.inMagazine === 0
            ? "Wybacz, brak więcej produktów w magazynie"
            : "Dodaj do koszyka"}
        </button>
      </div>
    </div>
  </div>
);

export default ProductDetail;
