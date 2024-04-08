import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postOrder } from "../http/OrderHttp";
import { CreateOrderType } from "../util/types";

interface CartState {
  data: CreateOrderType[];
  loading: boolean;
}

const initialState: CartState = {
  data: [],
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity: (state, action: PayloadAction<CreateOrderType>) => {
      const index = state.data.findIndex(
        (item) => item.mealId === action.payload.mealId,
      );
      if (index !== -1) {
        state.data[index].quantity += 1;
        // state.data[index].totalPrice = totalPrice;
        // console.log(totalPrice);
      } else {
        const newOrder: CreateOrderType = {
          mealId: action.payload.mealId,
          isDelivered: action.payload.isDelivered,
          userId: action.payload.userId,
          quantity: action.payload.quantity,
          totalPrice: action.payload.totalPrice,
          restaurantId: action.payload.restaurantId,
        };
        state.data.push(newOrder);
      }
    },
    reduceQuantity: (state, action: PayloadAction<CreateOrderType>) => {
      const index = state.data.findIndex(
        (item) => item.mealId === action.payload.mealId,
      );
      if (index !== -1) {
        state.data[index].quantity -= 1;
        if (state.data[index].quantity === 0) {
          state.data = state.data.filter(
            (item) => item.mealId !== action.payload.mealId,
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.data = [action.payload];
      state.loading = false;
    });
    builder.addCase(postOrder.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addQuantity, reduceQuantity } = cartSlice.actions;

export default cartSlice.reducer;
