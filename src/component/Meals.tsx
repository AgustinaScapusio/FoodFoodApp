import { Meal, mealFetch } from "./fetch/MealFetch.tsx";
import { useEffect, useState } from "react";
import styles from "./meals.module.css";

export function Meals() {
  const [meal, setMeal] = useState<Meal[]>([]);

  useEffect(() => {
    mealFetch().then((meal) => setMeal(meal));
  }, []);

  return (
    <div>
      {meal.map((meal) => (
        <div key={meal.id} className={styles.div}>
          <p>{meal.name}</p>
          <img src={meal.mealImage} alt={"text"} />
        </div>
      ))}
    </div>
  );
}
