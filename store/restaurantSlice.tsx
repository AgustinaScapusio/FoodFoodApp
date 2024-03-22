import {Restaurant } from '../src/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurant } from '../src/component/fetch/RestaurantFetch';

type RestaurantState = {
  loading: boolean;
  data: Restaurant[];
};

const initialState: RestaurantState = {
  loading: false,
  data: [],
};

export const restaurantSlice = createSlice({
    name:'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchRestaurant.pending,(state) =>{
            state.loading = true;
        });
        builder.addCase(fetchRestaurant.fulfilled, (state,action) =>{
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchRestaurant.rejected, (state) =>{
            state.loading = false;
        });
    },
});