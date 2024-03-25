// import { createSlice } from "@reduxjs/toolkit";

// export mealSlice = createSlice({})

import { Meal } from "../src/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals, fetchMealsByRestaurant } from "../src/http/MealFetch";

type MealState = {
  loading: boolean;
  data: Meal[];
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
