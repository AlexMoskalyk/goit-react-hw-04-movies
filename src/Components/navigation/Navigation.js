import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import styles from "./Navigation.module.css";
import PropTypes from "prop-types";

const Navigation = () => {
  return (
    <ul className={styles.list}>
      {mainRoutes.map((route) => (
        <li key={route.path} className={styles.item}>
          <NavLink
            to={route.path}
            className={styles.itemLink}
            activeClassName={styles.itemLinkActive}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  mainRoutes: PropTypes.array,
};

export default Navigation;
