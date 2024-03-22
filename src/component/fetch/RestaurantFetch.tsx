import {createAsyncThunk} from '@reduxjs/toolkit';
import {Restaurant} from '../../types/types.ts';

export const fetchRestaurant = createAsyncThunk(
    'get/restaurants',
    async (): Promise<[Restaurant]> => {
        const response = await fetch('https://localhost:7081/Restaurant');
        return await response.json();
    },
);