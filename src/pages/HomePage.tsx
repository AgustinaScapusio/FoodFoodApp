import { Meal } from "../component/meal/Meal.tsx";
import { Restaurants } from "../component/restaurant/Restaurants";

export function HomePage() {
  return (
    <div className={" "}>
      <p className={"text-amber-50 bg-black"}>Meals</p>
      <Meal />
      <p className={"text-amber-50 bg-black"}>Restaurants</p>
      <Restaurants />
    </div>
  );
}
