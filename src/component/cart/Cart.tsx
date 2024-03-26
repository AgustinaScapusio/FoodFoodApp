import { Modal } from "./CartModal.tsx";
import { useAppSelector } from "../../store";

export function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const meal = useAppSelector((state) => state.meals.data);

  function handleClose() {}

  return (
    <Modal className={" "} onClose={handleClose} open={true}>
      <h2>Your Cart</h2>
      <div>
        {cart.data.map((item) => {
          const mealItem = meal.find((meal) => meal.id === item.mealId);
          return (
            <div key={item.mealId}>
              <p>{mealItem?.name}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
