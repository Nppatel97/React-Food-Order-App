import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amtIsValid, setAmtIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmt = amountInputRef.current.value;
    const enteredAmtNum = +enteredAmt;

    if (
      enteredAmt.trim().length === 0 ||
      enteredAmtNum < 1 ||
      enteredAmtNum > 5
    ) {
      setAmtIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmtNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* <input type="text" /> */}
      <button type="submit">+ Add</button>
      {!amtIsValid && <p>Error: Please select an amount between 1 and 5.</p>}
    </form>
  );
};

export default MealItemForm;
