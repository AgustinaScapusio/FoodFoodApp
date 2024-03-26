import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { mealSlice } from "./mealSlice.tsx";
import { restaurantSlice } from "./restaurantSlice.tsx";
import { cartSlice } from "./cartSlice.tsx";
import { userSlice } from "./userSlice.tsx";
import { userProgressSlice } from "./userProgressSlice.tsx";

export const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
    cart: cartSlice.reducer,
    restaurants: restaurantSlice.reducer,
    modal: userProgressSlice.reducer,
    users : userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
