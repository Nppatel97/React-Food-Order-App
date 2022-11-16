import React from "react";
import { useState } from "react/cjs/react.development";

import foodBanner from "../../assets/Food_bg.png";
import foodBanner_l from "../../assets/Food_bg_l.png";
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
      <header className="dark:bg-zinc-800 bg-zinc-300 p-3 z-50">
        <h1 className="text-2xl font-bold text-green-600">Foodzie</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button
          onClick={toggleHandler}
          className="bg-gray-800 dark:bg-gray-500 text-green-800 p-1 text-xl absolute right-8 top-2 rounded-full"
        >
          {toggleBanner && <span>🔆</span>}
          {!toggleBanner && <span>🌙</span>}
        </button>
      </header>
      <div>
        {toggleBanner && (
          <img src={foodBanner} alt="BackgroundImg" className="z-0" />
        )}

        {!toggleBanner && (
          <img src={foodBanner_l} alt="BackgroundImg" className="z-0" />
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
