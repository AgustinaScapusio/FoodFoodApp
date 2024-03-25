import { Order } from '../src/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { postOrder } from '../src/http/OrderHttp';

type CartState = {
    data: Order[];
    loading?: boolean;
};

const initialState: CartState = {
    data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.data.push(action.payload);
    },
    removeCart: (state, action) => {
      state.data = state.data.filter((cart) => cart.id !== action.payload.id);
    },
    updateCart: (state, action) => {
      state.data = state.data.map((cart) =>
        cart.id === action.payload.id ? action.payload : cart,
      );
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