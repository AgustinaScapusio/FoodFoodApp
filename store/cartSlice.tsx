import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postOrder } from '../src/http/OrderHttp';
import { Order } from '../src/types/types';

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
    addCart: (state, action: PayloadAction<Order>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index === -1) {
        state.data.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<Order>) => {
      state.data = state.data.filter((item) => item.mealId !== action.payload.mealId);
    },
    addQuantity: (state, action: PayloadAction<Order>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index !== -1) {
        state.data[index].quantity += 1;
      }
    },
    reduceQuantity: (state, action: PayloadAction<Order>) => {
      const index = state.data.findIndex((item) => item.mealId === action.payload.mealId);
      if (index !== -1) {
        state.data[index].quantity -= 1;
        if (state.data[index].quantity === 0) {
          state.data = state.data.filter((item) => item.mealId !== action.payload.mealId);
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


export const { addCart, removeCart, addQuantity, reduceQuantity } = cartSlice.actions;

export default cartSlice.reducer;
