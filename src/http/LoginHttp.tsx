import { createAsyncThunk } from "@reduxjs/toolkit";
import { TokenType, UserType } from "../util/types.ts";
import { backendURL } from "../util/consts.ts";

export const postLogin = createAsyncThunk(
  "auth/login",
  async (id: number): Promise<UserType> => {
    const response = await fetch(`${backendURL}/User/${id}`);
    return await response.json();
  },
);

export const fetchToken = createAsyncThunk(
  "auth/token",
  async (): Promise<TokenType> => {
    const response = await fetch(`${backendURL}/Login`);
    return await response.json();
  },
);
