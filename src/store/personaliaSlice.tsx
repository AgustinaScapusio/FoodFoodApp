import { createSlice } from "@reduxjs/toolkit";
import { PersonaliaUserType } from "../util/types";
import { fetchPersonalia, fetchPersonaliaById } from "../http/PersonaliaHttp";

type PersonaliaState = {
    loading: boolean;
    data: PersonaliaUserType[];
    };

const initialState: PersonaliaState = {
    loading: false,
    data: [],
    };

export const personaliaSlice = createSlice({
    name: "personalia",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPersonalia.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPersonalia.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchPersonalia.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(fetchPersonaliaById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPersonaliaById.fulfilled, (state, action) => {
            state.data = [action.payload];
            state.loading = false;
        });
        builder.addCase(fetchPersonaliaById.rejected, (
            state,
        ) => {
            state.loading = false;
        });
    }
});
