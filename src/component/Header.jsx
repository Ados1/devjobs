import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../my.style.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>devjobs</h1>
      <MenuIcon />
    </div>
  );
};

export default Header;
