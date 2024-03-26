import { Modal } from "./CartModal.tsx";
import { useAppDispatch, useAppSelector } from "../../store";
import { closeModal } from "../../store/userProgressSlice.tsx";

export function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const meal = useAppSelector((state) => state.meals.data);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(closeModal());
  }

  return (
    <Modal className={"bg-gray-600 h-60 w-80"}  open={true}>
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
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
}
