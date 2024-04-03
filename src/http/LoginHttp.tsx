import { createAsyncThunk } from "@reduxjs/toolkit";
import { TokenType } from "../util/types.ts";
import { backendURL } from "../util/consts.ts";
import { removeToken } from "../util/localstorage.ts";

export const postLogin = createAsyncThunk(
  "auth/login",
  async (loginRequest: {
    email: string;
    password: string;
  }): Promise<TokenType> => {
    const response = await fetch(`${backendURL}/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return await response.json();
  },
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});
