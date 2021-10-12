import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Navigation />
    </header>
  );
};

export default Header;
