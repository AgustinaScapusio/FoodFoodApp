import { createAsyncThunk } from "@reduxjs/toolkit";
import { Meal } from "../../types/types.ts";

export const fetchMeals = createAsyncThunk(
  "get/meals",
  async (): Promise<[Meal]> => {
    const response = await fetch("http://localhost:5147/Meal");
    return await response.json();
  },
);

export const fetchMealsById = createAsyncThunk(
  "get/mealsById",
  async (id: number): Promise<Meal> => {
    const response = await fetch(`http://localhost:5147/Meal/${id}`);
    return await response.json();
  },
);

export const fetchMealsByRestaurant = createAsyncThunk(
  "get/mealsByRestaurant",
  async (id: number): Promise<[Meal]> => {
    const response = await fetch(`http://localhost:5147/Meal/mealRest/${id}`);
    return await response.json();
  },
);

export const createMeal = createAsyncThunk(
  "post/createMeal",
  async (createMeal: Omit<Meal, "id">): Promise<Meal> => {
    const response = await fetch("http://localhost:5147/Meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createMeal),
    });
    return response.json();
  },
);
