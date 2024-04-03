import { MealType } from "../../../util/types";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addQuantity } from "../../../store/cartSlice";
import { Button, Card } from "antd";

export function MealCard({ meal }: { meal: MealType }) {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.meals);

  const order = {
    mealId: meal.id,
    quantity: 1,
    isDelivered: false,
    userId: 1,
    totalPrice: meal.price,
  };

  const handleCart = () => {
    dispatch(addQuantity(order));
  };
  return (
    <Card
      loading={loading}
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
        <Button
          type={"primary"}
          block
          className={"text-xl h-14 border-0 rounded-t-none text-gray-600"}
          onClick={handleCart}
        >
          Add to cart
        </Button>,
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
