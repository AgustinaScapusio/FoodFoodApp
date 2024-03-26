import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../types/types";

export const fetchUsers = createAsyncThunk(
    "get/meals",
    async (): Promise<[UserType]> => {
      const response = await fetch("https://localhost:7081/User");
      return await response.json();
    },
  );
  
  export const fetchUsersById = createAsyncThunk(
    "get/UsersById",
    async (id: number): Promise<UserType> => {
      const response = await fetch(`https://localhost:7081/User/${id}`);
      return await response.json();
    },
  );