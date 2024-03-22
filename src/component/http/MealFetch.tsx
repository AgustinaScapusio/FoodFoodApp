import { createAsyncThunk } from "@reduxjs/toolkit";
import { Meal } from "../../types/types.ts";

// export async function mealFetch(): Promise<MealRes> {
//   const res = await fetch("https://feedfood.azurewebsites.net/Meal", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   return await res.json();
// }

export const fetchData = createAsyncThunk(
  "get/meals",
  async (): Promise<[Meal]> => {
    const response = await fetch("http://localhost:5147/Meal");
    return await response.json();
  },
);
