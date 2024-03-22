import {createAsyncThunk} from '@reduxjs/toolkit';
import {Restaurant} from '../../types/types.ts';

export const fetchRestaurant = createAsyncThunk(
    'get/restaurants',
    async (): Promise<[Restaurant]> => {
        const response = await fetch('http://localhost:5147/Restaurant');
        return await response.json();
    },
);

export const fetchRestaurantById = createAsyncThunk(
    'get/restaurantsById',
    async (id: number): Promise<Restaurant> => {
        const response = await fetch(`http://localhost:5147/Restaurant/${id}`);
        return await response.json();
    },
);

export const createRestaurant = createAsyncThunk(
    'post/restaurant',
    async (restaurant: Restaurant): Promise<Restaurant> => {
        const response = await fetch('http://localhost:5147/Restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        });
        return await response.json();
    },
);

export const updateRestaurant = createAsyncThunk(
    'put/restaurant',
    async (restaurant: Restaurant): Promise<Restaurant> => {
        const response = await fetch('http://localhost:5147/Restaurant', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        });
        return await response.json();
    },
);
