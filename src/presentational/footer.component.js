import React from "react";
import "./footer.css";

import { NavLink } from "react-router-dom";

export const Footer = props => {
  return (
    <div className="footer">
      <div className="allRightsArea">
        <p>All rights reserved</p>
      </div>

      <div className="footerArea">
        <ul className="footerList">
          <li className="footerItem">
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              className="link"
              to={
                "/" +
                props.active +
                "/" +
                props.sortParams.by +
                "/" +
                props.sortParams.order
              }
            >
              Home
            </NavLink>
          </li>
          <li className="footerItem">
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
          <li className="footerItem">
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
          <li className="footerItem">
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
        </ul>
      </div>
    </div>
  );
};
