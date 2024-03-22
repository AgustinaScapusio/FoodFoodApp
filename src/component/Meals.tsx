import { fetchData } from "./http/MealFetch.tsx";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

export function Meals() {
  const { data, loading } = useAppSelector((state) => state.meals);
  const mealDispatch = useAppDispatch();

  useEffect(() => {
    mealDispatch(fetchData());
  }, [mealDispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...........</p>
      ) : (
        data.map((meals) => <p>{meals.name}</p>)
      )}
    </div>
  );
}
