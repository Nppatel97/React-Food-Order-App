import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className="flex z-50 bg-slate-800 dark:bg-slate-300 text-green-300 dark:text-green-800 rounded-md absolute top-1/4 right-40 w-2/5 p-8 flex-col text-center">
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
