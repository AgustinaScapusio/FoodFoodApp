import { Meals } from "../component/Meals";
import { Restaurants } from "../component/restaurant/Restaurants";

export function HomePage() {
  return (
    <div className={"bg-yellow-600 text-blue-800"}>
      <Meals />
      <Restaurants />
    </div>
  );
}
