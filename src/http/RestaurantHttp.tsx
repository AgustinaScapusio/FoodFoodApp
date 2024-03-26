import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateRestaurantType, RestaurantType } from "../types/types.ts";

export const fetchRestaurant = createAsyncThunk(
  "get/restaurants",
  async (): Promise<[RestaurantType]> => {
    const response = await fetch("https://localhost:7081/Restaurant");
    return await response.json();
  },
);

export const fetchRestaurantById = createAsyncThunk(
  "get/restaurantsById",
  async (id: number): Promise<RestaurantType> => {
    const response = await fetch(`https://localhost:7081/Restaurant/${id}`);
    return await response.json();
  },
);

export const createRestaurant = createAsyncThunk(
  "post/restaurant",
  async (restaurant: CreateRestaurantType): Promise<RestaurantType> => {
    const response = await fetch("https://localhost:7081/Restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    return await response.json();
  },
);

export const updateRestaurant = createAsyncThunk(
  "put/restaurant",
  async ({
    id,
    restaurant,
  }: {
    id: number;
    restaurant: CreateRestaurantType;
  }): Promise<RestaurantType> => {
    const response = await fetch("https://localhost:7081/Restaurant", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        ...restaurant,
      }),
    });
    return await response.json();
  },
);
