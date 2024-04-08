import { Modal } from "./CartModal.tsx";
import { useAppDispatch, useAppSelector } from "../../store";
import { closeModal } from "../../store/userProgressSlice.tsx";

export function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const meal = useAppSelector((state) => state.meals.data);
  const modal = useAppSelector((state) => state.modal.isVisible);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(closeModal());
  }

  return (
    <Modal className={"float-right bg-white w-96 h-dvh z-30"} open={modal}>
      <h1 className={"text-xl font-bold text-center mb-4"}>Your Cart</h1>
      <div>
        {cart.data.map((item) => {
          const mealItem = meal.find(
            (meal) =>
              meal.id === item.mealId &&
              meal.restaurantId === item.restaurantId,
          );
          return (
            <div key={item.mealId}>
              <p>{mealItem?.name}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
      <button
        className={"py-2 px-4 bg-red-500 text-white rounded"}
        type={"button"}
        onClick={handleClose}
      >
        Close
      </button>
    </Modal>
  );
}
