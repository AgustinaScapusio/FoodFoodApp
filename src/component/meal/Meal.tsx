import { useAppDispatch, useAppSelector } from "../../../store";
import { useEffect } from "react";
import { fetchData } from "../http/MealFetch.tsx";

export function Meal() {
  const { data, loading } = useAppSelector((state) => state.meals);
  const mealDispatch = useAppDispatch();

  useEffect(() => {
    mealDispatch(fetchData());
  }, [mealDispatch]);

  return (
    <div className={"flex gap-2 flex-wrap p-1 "}>
      {loading ? (
        <p>Loading...........</p>
      ) : (
        data.map((meal) => (
          <div
            className={
              " max-w-96 box shadow flex flex-col justify-between gap-2"
            }
          >
            <img
              className={"object-cover h-[240px]"}
              src={meal.mealImage}
              alt={meal.name}
            />
            <div className={"p-2"}>
              <p className={"text-4xl font-extralight"}>{meal.name}</p>
              <p className={"text-xl font-light"}>{meal.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
