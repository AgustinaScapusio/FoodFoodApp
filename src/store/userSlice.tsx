import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,fetchUsersById } from "../http/ProfileHttp";
import { UserType } from "../types/types";

type UserState = {
    loading : boolean;
    data : UserType[];
}

const initialState: UserState = {
    loading: false,
    data: [],
};


export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
          });
          builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
          });
          
          builder.addCase(fetchUsersById.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(fetchUsersById.fulfilled, (state, action) => {
              state.data = [action.payload];
              state.loading = false;
            });
            builder.addCase(fetchUsersById.rejected, (state) => {
              state.loading = false;
            });
}})