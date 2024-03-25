import { createAsyncThunk } from "@reduxjs/toolkit";
import { MealType } from "../types/types.ts";

export const fetchMeals = createAsyncThunk(
  "get/meals",
  async (): Promise<[MealType]> => {
    const response = await fetch("https://localhost:7081/Meal");
    return await response.json();
  },
);

export const fetchMealsById = createAsyncThunk(
  "get/mealsById",
  async (id: number): Promise<MealType> => {
    const response = await fetch(`https://localhost:7081/Meal/${id}`);
    return await response.json();
  },
);

export const fetchMealsByRestaurant = createAsyncThunk(
  "get/mealsByRestaurant",
  async (id: number): Promise<[MealType]> => {
    const response = await fetch(`https://localhost:7081/Meal/mealRest/${id}`);
    return await response.json();
  },
);

export const createMeal = createAsyncThunk(
  "post/createMeal",
  async (createMeal: Omit<MealType, "id">): Promise<MealType> => {
    const response = await fetch("https://localhost:7081/Meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createMeal),
    });
    return response.json();
  },
);
