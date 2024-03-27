import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../util/types.ts";
import { backendURL } from "../util/consts.ts";

export const postUser = createAsyncThunk(
  "register",
  async (registerUser: Omit<UserType, "id">): Promise<UserType> => {
    const response = await fetch(`${backendURL}/User`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerUser),
    });
    return response.json();
  },
);
