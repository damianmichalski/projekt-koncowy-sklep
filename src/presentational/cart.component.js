import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = props => (
  <div className="pageContainer">
    <div className="subpageArea">
      <h1>KOSZYK</h1>
      {props.cart.map(product => {
        return (
          <div className="cartComponent" key={product.id}>
            <div className="cartContainer">
              <div className="cartImageArea">
                <Link className="link" to={"/product/" + product.id}>
                  <img
                    className="cartProductImage"
                    src={process.env.PUBLIC_URL + `${product.picture}`}
                    alt={`product${product.id}`}
                  />
                </Link>
              </div>
              <div className="cartProductDescriptions">
                <div className="cartProductDescriptionsContainer">
                  <Link className="link" to={"/product/" + product.id}>
                    <p className="cartProductTitle">{product.name}</p>
                  </Link>
                  <p className="cartProductText">{product.description}</p>
                </div>
                <div className="cartProductBuyingArea">
                  <div className="cartProductBuyingContainer">
                    <p className="cartProduct cartProduct--grey">{`$${parseFloat(
                      product.price
                    ).toFixed(2)}`}</p>
                    <span
                      className={
                        product.count > 1
                          ? "cartProduct cartProductClick"
                          : "cartProduct cartProductDisabled"
                      }
                      onClick={() =>
                        product.count === 1
                          ? null
                          : props.clickCartCounter(product.id, -1)
                      }
                    >
                      -
                    </span>
                    <p className="cartProduct">{product.count}</p>
                    <span
                      className={
                        product.count === product.inMagazine
                          ? "cartProduct cartProductDisabled"
                          : "cartProduct cartProductClick"
                      }
                      onClick={() =>
                        product.count === product.inMagazine
                          ? null
                          : props.clickCartCounter(product.id, 1)
                      }
                    >
                      +
                    </span>
                    <p className="cartProduct">szt</p>
                    <span
                      className="cartDelProductButton"
                      onClick={() => props.clickDelProduct(product.id)}
                    >
                      usuń produkt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={props.cart.length !== 0 ? "hide" : "emptyCart"}>
        <h3> Twój koszyk jest pusty :(</h3>
      </div>
      <div className={props.cart.length === 0 ? "hide" : "cartFinishArea"}>
        <p className="cartProduct cartProduct--grey">kod rabatowy</p>
        <input placeholder="Twój kod rabatowy" />
        <p className="cartProduct">
          TOTAL:
          {` $${parseFloat(
            props.cart.reduce(function(previousValue, currentValue) {
              return previousValue + currentValue.price * currentValue.count;
            }, 0)
          ).toFixed(2)} `}
        </p>
        <button
          className="buttonBuy"
          onClick={() => props.clickUpdateMagazine()}
        >
          Zapłać
        </button>
      </div>
    </div>
  </div>
);

export default Cart;
