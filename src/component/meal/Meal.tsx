import { useAppDispatch, useAppSelector } from "../../store/index.tsx";
import { useEffect } from "react";
import { fetchMealsByRestaurant } from "../../http/MealHttp.tsx";
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
        <div className={"flex flex-row flex-wrap gap-2 p-1 justify-center"}>
          {data.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
}
