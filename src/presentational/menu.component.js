import React from "react";
import "./menu.css";

import { NavLink } from "react-router-dom";

export const Menu = props => {
  return (
    <div className="menu">
      <div className="logoArea">
        <img
          className="logoPicture"
          src={process.env.PUBLIC_URL + `/img/logo.png`}
          alt="logo1"
        />
      </div>

      <div className="menuArea">
        <ul className="menuList">
          <li className={"menuItem"}>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              className="link"
              to={"/1/name/desc"}
            >
              Home
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              className="link"
              to={"/faq"}
            >
              FAQ
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              className="link"
              to={"/eula"}
            >
              Regulamin
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              className="link"
              to={"/contact"}
            >
              Kontakt
            </NavLink>
          </li>

          <li className={"menuItem cartIconArea"}>
            <NavLink
              activeStyle={{
                color: "black"
              }}
              className="link"
              to={"/cart"}
            >
              <i className="fas fa-shopping-bag cartIcon" />
              <div
                className={props.cart.length > 0 ? "productsInCart" : "hide"}
              >
                {props.inCart}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
