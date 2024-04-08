import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../util/types";
import { backendURL } from "../util/consts.ts";

export const fetchUsers = createAsyncThunk(
  "get/User",
  async (): Promise<[UserType]> => {
    const response = await fetch(`${backendURL}/User`);
    return await response.json();
  },
);

export const fetchUsersById = createAsyncThunk(
  "get/UsersById",
  async (id: number): Promise<UserType> => {
    const response = await fetch(`${backendURL}/User/${id}`);
    return await response.json();
  },
);

