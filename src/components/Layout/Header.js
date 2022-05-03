import React from "react";

import foodBanner from "../../assets/Food_Order_Banner.png";
import foodBannerLite from "../../assets/Food_Order_Banner_l.png";
import backdropImg from "../../assets/backdrop.png";
// import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="bg-zinc-800 p-3">
        <h1 className="text-2xl font-bold text-green-600">Foodzie</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img src={backdropImg} alt="BackgroundImg" />
        <img src={foodBanner} alt="BackgroundImg" />
      </div>
    </React.Fragment>
  );
};

export default Header;
