import { Modal } from "./CartModal.tsx";
import { useAppDispatch, useAppSelector } from "../../store";
import { closeModal } from "../../store/userProgressSlice.tsx";
import { Button, InputNumber, Typography } from "antd";
import {
  CloseOutlined,
  DeleteFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";

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
      <div className={"flex flex-col justify-between h-full "}>
        <div className={" "}>
          <div className={"flex justify-between "}>
            <h1 className={"text-3xl font-light p-6 pt-12"}>Your Cart</h1>
            <Button
              className={"m-2 w-full"}
              shape={"circle"}
              size={"large"}
              icon={<CloseOutlined />}
              onClick={handleClose}
            />
          </div>
          <div className={"border-t "}>
            {cart.data.map((item) => {
              const mealItem = meal.find(
                (meal) =>
                  meal.id === item.mealId &&
                  meal.restaurantId === item.restaurantId,
              );
              return (
                <div className={" border-b p-2 py-6 px-6"}>
                  <div key={item.mealId} className={"flex justify-between "}>
                    <Typography className={"text-xl"}>
                      {mealItem?.name}
                    </Typography>
                    <div className={"flex gap-2"}>
                      <InputNumber
                        min={1}
                        className={"w-14"}
                        defaultValue={item.quantity}
                      />
                      <Typography className={"text-xl"}></Typography>
                      <Button type={"default"} icon={<DeleteFilled />} />
                    </div>
                  </div>
                  <Typography className={"text-xl"}>
                    ${item.totalPrice}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"text-center py-6"}>
          <Button
            className={"w-3/4 "}
            size={"large"}
            icon={<ShoppingCartOutlined />}
            type={"primary"}
          >
            Checkout
          </Button>
        </div>
      </div>
    </Modal>
  );
}
