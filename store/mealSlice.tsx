// import { createSlice } from "@reduxjs/toolkit";

// export mealSlice = createSlice({})

import { Meal } from "../src/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../src/component/http/MealFetch";

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
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
    });
  },
});
