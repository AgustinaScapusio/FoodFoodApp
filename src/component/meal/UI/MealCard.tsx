import { MealType } from "../../../util/types";
import { useAppDispatch } from "../../../store";
import { addQuantity } from "../../../store/cartSlice";
import { useAppSelector } from "../../../store";
import { Card } from "antd";

export function MealCard({ meal }: { meal: MealType }) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const order = {
    mealId: meal.id,
    quantity: 1,
    isDelivered: false,
    userId: 1,
    totalPrice: meal.price,
    restaurantId: meal.restaurantId,
  };

 function handleCart() {
  const existingCart = [...cart.data];
  
  if(existingCart.length === 0) {
    dispatch(addQuantity(order));
  } else {
    const isSameRestaurant = existingCart.every(item => item.restaurantId === order.restaurantId);
    
    if(isSameRestaurant) {
      dispatch(addQuantity(order));
    } else {
      // Inform the user that they can only add meals from the same restaurant
      alert("You can only add meals from the same restaurant to your cart.");
    }
  }
}
  return (
    <Card
      className={
        "max-w-96 h-full shadow flex flex-col  cursor-pointer bg-white rounded-md custom-card"
      }
      cover={
        <img
          src={meal.mealImage}
          alt={meal.name}
          className={"object-cover h-[200px] rounded-t"}
        />
      }
      hoverable
      actions={[
        <button className={"text-xl h-14"} onClick={handleCart}>
          Add to cart
        </button>,
      ]}
    >
      <div className={"flex flex-col justify-between min-h-44"}>
        <div className={"flex flex-col gap-2"}>
          <p className={"text-4xl font-extralight"}>{meal.name}</p>
          <p className={"text-xl font-light"}>{meal.description}</p>
        </div>
        <div>
          <p className={"text-xl font-light"}>Allergens: {meal.allergens}</p>
          <p className={"text-xl font-light"}>{meal.price}</p>
        </div>
      </div>
    </Card>
  );
}
