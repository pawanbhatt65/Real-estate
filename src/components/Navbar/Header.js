import React from "react";
import NavbarHead from "./NavbarHead";
import TopGap from "./TopGap";
import classes from "./Header.module.css";
import ParallaxBackground from "../../images/parallax.jpg";

const Header = () => {
  return (
    <div
      className={classes.headerClass}
      style={{ backgroundImage: `url(${ParallaxBackground})` }}
    >
      <NavbarHead />
      <TopGap />
    </div>
  );
};

export default Header;
