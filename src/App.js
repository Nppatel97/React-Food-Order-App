import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => { setCartShown(true) };

  const hideCartHandler = () => { setCartShown(false) };

  return (
    <React.Fragment>
      {cartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
