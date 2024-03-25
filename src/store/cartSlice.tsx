import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postOrder } from '../http/OrderHttp';
import { CreateOrderProps, Order } from '../types/types';

interface CartState {
  data: Order[];
  loading: boolean;
}

const initialState: CartState = {
  data: [],
  loading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addQuantity: (state, action: PayloadAction<CreateOrderProps>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index !== -1) {
        state.data[index].quantity += 1;
      }
    },
    reduceQuantity: (state, action: PayloadAction<CreateOrderProps>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index !== -1) {
        state.data[index].quantity -= 1;
        if (state.data[index].quantity === 0) {
          state.data = state.data.filter((item) => item.mealId !== action.payload.mealId);
        }
      }
    },
    addMealToCart: (state, action: PayloadAction<CreateOrderProps>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index !== -1) {
        state.data[index].quantity += 1;
      } else {
        const newOrder: Order = {
          id: Math.random(),
          mealId: action.payload.mealId,
          quantity: 1,
        };
        state.data.push(newOrder);
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


export const { addMealToCart, addQuantity, reduceQuantity } = cartSlice.actions;

export default cartSlice.reducer;
