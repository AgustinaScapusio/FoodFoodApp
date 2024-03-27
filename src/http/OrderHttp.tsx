import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderType, CreateOrderType } from "../util/types";
import { backendURL } from "../util/consts.ts";

export const postOrder = createAsyncThunk(
  "post/order",
  async (order: CreateOrderType): Promise<OrderType> => {
    const response = await fetch(`${backendURL}/Order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    return await response.json();
  },
);
