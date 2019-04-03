import React, { Component } from "react";
import ProductList from "./productList-container.component";
import SideBar from "./sideBar-container.component";
import "./homeLayout.css";

export class HomeLayout extends Component {
  render() {
    return (
      <div className="pageContainer">
        <>
          <SideBar />
          <ProductList />
        </>
      </div>
    );
  }
}
