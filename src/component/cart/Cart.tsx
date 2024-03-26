import { Modal } from "./CartModal.tsx";
import { useAppSelector } from "../../store";

export function Cart() {
  const cart = useAppSelector((state) => state.cart.data);
  const meal = useAppSelector((state) => state.meals.data);

  const mealData = meal.filter((meal) =>
    cart.some((item) => item.mealId === meal.id),
  );

  function handleClose() {}

  return (
    <Modal className={"bg-gray-600 h-60 w-4"} onClose={handleClose} open={true}>
      <h2>Your Cart</h2>
      <div>
        {cart.data.map((item) => (
          <p>{item.mealId}</p>
        ))}
      </div>
    </Modal>
  );
}
