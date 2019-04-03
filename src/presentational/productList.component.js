import React from "react";
import Product from "./product.component";
import "./productList.css";
import { Link } from "react-router-dom";

const ProductList = props => (
  <div className="productsList">
    {props.item.map(item => {
      return (
        <Link className="link" to={"/product/" + item.id} key={item.id}>
          <Product
            name={item.name}
            price={item.price}
            picture={item.picture}
            sold={item.sold}
            inMagazine={item.inMagazine}
          />
        </Link>
      );
    })}
  </div>
);

export default ProductList;
