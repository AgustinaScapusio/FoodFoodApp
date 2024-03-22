import { useAppDispatch, useAppSelector } from "../../../store";
import { useEffect } from "react";
import { fetchMeals } from "../http/MealFetch.tsx";
import { MealCard } from "./UI/MealCard.tsx";

export function Meal() {
  const { data, loading } = useAppSelector((state) => state.meals);
  const mealDispatch = useAppDispatch();

  useEffect(() => {
    mealDispatch(fetchMeals());
  }, [mealDispatch]);

  return (
    <div className={"flex gap-2 flex-wrap p-1 "}>
      {loading ? (
        <p>Loading...........</p>
      ) : (
        data.map((meal) => (
         <MealCard key={meal.id} meal={meal} />
        ))
      )}
    </div>
  );
}
