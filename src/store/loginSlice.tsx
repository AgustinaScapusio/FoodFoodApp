import { createSlice } from "@reduxjs/toolkit";
import { postLogin, signOut } from "../http/LoginHttp.tsx";
import { setToken } from "../util/localstorage.ts";

interface LoginState {
  loading: boolean;
  userId: number;
  accessToken: string | null;
  expiresIn: number;
}

const initialState: LoginState = {
  loading: false,
  userId: 0, // for user object
  accessToken: null, // for storing the JWT
  expiresIn: 0,
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.loading = false;
      state.expiresIn = action.payload.expiresIn;
      setToken(action.payload.accessToken);
      
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.loading = false;
      state.accessToken = null;
      state.userId = 0;
      state.expiresIn = 0;
    });
  },
});
export { signOut };

