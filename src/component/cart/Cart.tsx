import { useAppSelector } from "../../store/index.tsx";

type CartProps = {
  closeModal: () => void;
};

export function Cart({ closeModal }: CartProps ){
  const cartItems = useAppSelector((state) => state.cart.data);
  const meal = useAppSelector((state) => state.meals.data);
  const mealData = meal.filter((meal) => cartItems.some((item) => item.id === meal.id))[0];
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <span>{mealData.name}</span>
                <span>{mealData.price}</span>
                {/* <button onClick={() => handleAddItem(item)}>+</button> */}
                <span>{item.quantity}</span>
                {/* <button onClick={() => handleRemoveItem(item)}>-</button> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
