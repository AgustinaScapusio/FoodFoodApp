import { useAppSelector } from "../../store";
import { Modal } from "./CartModal.tsx";

export function Cart() {
  const cartItems = useAppSelector((state) => state.cart.data);
  // const meal = useAppSelector((state) => state.meals.data);
  // const mealData = meal.filter((meal) =>
  //   cartItems.some((item) => item.id === meal.id),
  // )[0];

  function handleClose() {}

  console.log(cartItems);

  return (
    <Modal className={""} onClose={handleClose} open={true}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map((item) => (
            // <li key={item.id}>
            <div>
              {/*<span>{meal.name}</span>*/}
              {/*<span>{mealData.price}</span>*/}
              {/* <button onClick={() => handleAddItem(item)}>+</button> */}
              <span>{item.quantity}</span>
              {/* <button onClick={() => handleRemoveItem(item)}>-</button> */}
            </div>
            // </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
