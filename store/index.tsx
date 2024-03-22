import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { mealSlice } from "./mealSlice.tsx";
<<<<<<< HEAD
import searchSlicess from "./searchSlice.tsx";
=======
import { restaurantSlice } from "./restaurantSlice.tsx";
>>>>>>> c0b5163fc34cf4d770fc9a7dab3317406da795fa

export const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
<<<<<<< HEAD
    oogabooga : searchSlicess,
=======
    restaurants: restaurantSlice.reducer,
>>>>>>> c0b5163fc34cf4d770fc9a7dab3317406da795fa
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
