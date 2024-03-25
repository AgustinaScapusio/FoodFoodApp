import { useAppDispatch, useAppSelector } from "../../../store";
import { useEffect } from "react";
import { fetchMealsByRestaurant } from "../../http/MealFetch.tsx";
import { MealCard } from "./UI/MealCard.tsx";

export function Meal({ restaurantId }: { restaurantId: number }) {
  const { data, loading } = useAppSelector((state) => state.meals);
  const mealDispatch = useAppDispatch();

  useEffect(() => {
    mealDispatch(fetchMealsByRestaurant(restaurantId));
  }, [mealDispatch, restaurantId]);

  return (
    <>
      {loading ? (
        <p>Loading...........</p>
      ) : (
        <div className={"grid grid-cols-4 gap-4 col-span-3 auto-rows-min"}>
          {data.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
}
