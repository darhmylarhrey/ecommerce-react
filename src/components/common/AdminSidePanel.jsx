import { ADMIN_PRODUCTS } from "@/constants/routes";
import { ADMIN_USERS } from "@/constants/routes";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Products
        </NavLink>
      </div>

      
     {/* Commenting this out for now, because of the limited time */}
     
      {/* <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_USERS}
        >
          Users
        </NavLink>
      </div> */}

    </div>
  </aside>
);

export default SideNavigation;
