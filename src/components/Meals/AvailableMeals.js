import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import sensitive from "../../sensitive";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${sensitive.FIREBASE_URL}/meals.json`);

      if (!response.ok) {
        throw new Error("Oopsie! Something's wrong...");
      }

      const resData = await response.json();

      const fetchedMealsArray = [];

      for (const key in resData) {
        fetchedMealsArray.push({
          id: key,
          name: resData[key].name,
          desc: resData[key].desc,
          price: resData[key].price,
        });
      }

      setMeals(fetchedMealsArray);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, [httpError]);

  if (loading) {
    return (
      <section className={classes.loadingMeals}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>Error: {httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        desc={meal.desc}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
