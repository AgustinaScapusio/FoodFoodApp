import { createSlice } from "@reduxjs/toolkit";
import { LoginType} from "../util/types.ts";
import { postUser } from "../http/RegisterHttp.tsx";

type registerState = {
  user: LoginType;
  loading: boolean;
};

const initialState: registerState = {
  user: { username: "", password: "" },
  loading: false,
};

export const registerSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
    });
    builder.addCase(postUser.rejected, (state) => {
      state.loading = false;
    });
  },
});
