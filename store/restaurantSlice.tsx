import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurant, fetchRestaurantById, createRestaurant,updateRestaurant } from '../src/http/RestaurantHttp';
import { Restaurant } from '../src/types/types';
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
        builder.addCase(fetchRestaurantById.pending,(state) =>{
            state.loading = true;
        });
        builder.addCase(fetchRestaurantById.fulfilled, (state,action) =>{
            state.data = [action.payload];
            state.loading = false;
        });
        builder.addCase(fetchRestaurantById.rejected, (state) =>{
            state.loading = false;
        });
        builder.addCase(createRestaurant.pending,(state) =>{
            state.loading = true;
        });
        builder.addCase(createRestaurant.fulfilled, (state,action) =>{
            state.data = [action.payload];
            state.loading = false;
        });
        builder.addCase(createRestaurant.rejected, (state) =>{
            state.loading = false;
        });
        builder.addCase(updateRestaurant.pending,(state) =>{
            state.loading = true;
        });
        builder.addCase(updateRestaurant.fulfilled, (state,action) =>{
            state.data = [action.payload];
            state.loading = false;
        });
        builder.addCase(updateRestaurant.rejected, (state) =>{
            state.loading = false;
        });
    },

});