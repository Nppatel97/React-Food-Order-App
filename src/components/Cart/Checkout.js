import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isNotWrong = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    city: true,
    zipCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipcodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    console.log(event.target);
    console.log("THIS WORKS CONFIRMED ORDER!");
    event.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputStreet = streetInputRef.current.value;
    const inputZipcode = zipcodeInputRef.current.value;
    const inputCity = cityInputRef.current.value;

    const inputNameValid = isNotEmpty(inputName);
    const inputCityValid = isNotEmpty(inputCity);
    const inputStreetValid = isNotEmpty(inputStreet);
    const inputZipcodeValid = isNotWrong(inputZipcode);

    setFormInputValid({
      name: inputNameValid,
      street: inputStreetValid,
      city: inputCityValid,
      zipCode: inputZipcodeValid,
    });

    const validForm =
      inputStreetValid && inputZipcodeValid && inputNameValid && inputCityValid;

    if (!validForm) {
      return;
    }

    props.onConfirm({
      name: inputName,
      street: inputStreet,
      city: inputCity,
      zipCode: inputZipcode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;

  const zipCodeControlClasses = `${classes.control} ${
    formInputValid.zipCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && <p>Please enter a valid Name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValid.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={zipCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={zipcodeInputRef} />
        {!formInputValid.zipCode && (
          <p>Please enter a valid Postal Code! (e.g. A1A1A1)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValid.city && <p>Please enter a valid City!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
