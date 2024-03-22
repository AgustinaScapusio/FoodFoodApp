import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { mealSlice } from "./mealSlice.tsx";
import { restaurantSlice } from "./restaurantSlice.tsx";

export const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
    restaurants: restaurantSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
