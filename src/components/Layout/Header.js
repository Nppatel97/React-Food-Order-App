import React from "react";

import foodBanner from '../../assets/Food_Order_Banner.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodzie</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={foodBanner} alt="BackgroundImg" />
      </div>
    </React.Fragment>
  );
};

export default Header;