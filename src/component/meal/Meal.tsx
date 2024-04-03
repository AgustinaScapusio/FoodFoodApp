import { useAppDispatch, useAppSelector } from "../../store";
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
        <div
          className={"grid gap-4  lg:grid-cols-3 md:grid-cols-2 mx-3 my-10 "}
        >
          {data.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
}
