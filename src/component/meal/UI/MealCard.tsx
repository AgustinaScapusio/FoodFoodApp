import { useAppSelector } from "../../../../store";
import { MealType } from "../../../types/types";

export function MealCard({ meal }: { meal: MealType }) {
  const { data: restaurantData } = useAppSelector((state) => state.restaurants);

  const restaurant = restaurantData.find(
    (restaurant) => restaurant.id === meal.restaurantId,
  );

  return (
    <div
      className={
        "max-w-96 min-w-96 box shadow flex flex-col justify-between gap-2 cursor-pointer"
      }
    >
      <img
        src={meal.mealImage}
        alt={meal.name}
        className={"object-cover h-[240px]"}
      />
      <div className={"p-2"}>
        <p className={"text-4xl font-extralight"}>{meal.name}</p>
        {restaurant && (
          <p className={"text-xl font-light"}>Restaurant: {restaurant.name}</p>
        )}
        <p className={"text-xl font-light"}>{meal.category}</p>
        <p className={"text-xl font-light"}>{meal.price}</p>
      </div>
    </div>
  );
}
