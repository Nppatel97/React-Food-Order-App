import React from "react";
import { useState } from "react/cjs/react.development";

import foodBanner from "../../assets/Food_bg.png";
import foodBanner_l from "../../assets/Food_bg_l.png";
import backdropImg from "../../assets/backdrop.png";
import backdropImg_l from "../../assets/backdrop_l.png";
// import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [toggleBanner, setToggleBanner] = useState(true);

  const toggleHandler = () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
      ? setToggleBanner(true)
      : setToggleBanner(false);
  };
  return (
    <React.Fragment>
      <header className="bg-zinc-800 p-3 z-50">
        <h1 className="text-2xl font-bold text-green-600">Foodzie</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button
          onClick={toggleHandler}
          className="bg-gray-300 text-green-800 p-2 absolute right-8 top-2 rounded-md"
        >
          Toggle Dark!
        </button>
      </header>
      <div>
        {toggleBanner && (
          <img
            src={backdropImg}
            alt="BackgroundImg"
            className="absolute z-10"
          />
        )}
        {toggleBanner && (
          <img src={foodBanner} alt="BackgroundImg" className="z-0" />
        )}

        {!toggleBanner && (
          <img
            src={backdropImg_l}
            alt="BackgroundImg"
            className="absolute z-10"
          />
        )}
        {!toggleBanner && (
          <img src={foodBanner_l} alt="BackgroundImg" className="z-0" />
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
