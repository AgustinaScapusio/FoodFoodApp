import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderType, CreateOrderType } from "../types/types";

export const postOrder = createAsyncThunk(
  "post/order",
  async (order: CreateOrderType): Promise<OrderType> => {
    const response = await fetch("https://localhost:7081/Order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    return await response.json();
  },
);
