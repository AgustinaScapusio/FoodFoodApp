import { MealType } from "../../../types/types";
import { useAppDispatch } from "../../../store";
import { addMealToCart } from "../../../store/cartSlice";


export function MealCard({ meal }: { meal: MealType }) {
  const dispatch = useAppDispatch();

  const order = {
    mealId: meal.id,
    quantity: 1,
  };

  const handleCart = () => {
    dispatch(addMealToCart({ ...order, id: Math.random()}));
  };
  return (
    <div
      className={
        "max-w-96 min-w-96 box shadow flex flex-col justify-between gap-6 cursor-pointer bg-white rounded-md"
      }
    >
      <img
        src={meal.mealImage}
        alt={meal.name}
        className={"object-cover h-[240px]"}
      />
      <div className={"p-2"}>
        <p className={"text-4xl font-extralight"}>{meal.name}</p>
        <p className={"text-xl font-light"}>{meal.description}</p>
        <p className={"text-xl font-light"}>Allergens: {meal.allergens}</p>
        <p className={"text-xl font-light"}>{meal.price}</p>
      </div>
      <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={handleCart}>
        Add to cart
      </button>
    </div>
  );
}
