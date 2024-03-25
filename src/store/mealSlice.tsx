// import { createSlice } from "@reduxjs/toolkit";

// export mealSlice = createSlice({})

import { MealType } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals, fetchMealsByRestaurant } from "../http/MealHttp"

type MealState = {
  loading: boolean;
  data: MealType[];
};

const initialState: MealState = {
  loading: false,
  data: [],
};

export const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMeals.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchMealsByRestaurant.fulfilled, (state, action) => {
      state.data = action.payload; // Update the state with the payload
    });
  },
});
