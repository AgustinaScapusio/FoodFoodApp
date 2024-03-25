import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, CreateOrderProps } from "../types/types";


export const postOrder = createAsyncThunk(
    "post/order",
    async (order: CreateOrderProps): Promise<Order> => {
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
