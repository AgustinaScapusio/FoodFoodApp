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
    <div className={"flex gap-2 flex-wrap p-1 "}>
      {loading ? (
        <p>Loading...........</p>
      ) : (
        <div>
          {data.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
