import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendURL } from "../util/consts";
import { PersonaliaUserType } from "../util/types";

export const fetchPersonalia = createAsyncThunk(
    "get/personalia",
    async (): Promise<[PersonaliaUserType]> => {
        const response = await fetch(`${backendURL}/Personalia`);
        return await response.json();
    },
    );

export const fetchPersonaliaById = createAsyncThunk(
    "get/personaliaById",
    async (id: number): Promise<PersonaliaUserType> => {
        const response = await fetch(`${backendURL}/Personalia/${id}`);
        return await response.json();
    },
    );

export const createPersonalia = createAsyncThunk(
    "post/createPersonalia",
    async (createPersonalia: Omit<PersonaliaUserType, "id">): Promise<PersonaliaUserType> => {
        const response = await fetch(`${backendURL}/Personalia`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createPersonalia),
        });
        return response.json();
    },
    );

export const updatePersonalia = createAsyncThunk(
    "put/updatePersonalia",
    async (updatePersonalia: PersonaliaUserType): Promise<PersonaliaUserType> => {
        const response = await fetch(`${backendURL}/Personalia/${updatePersonalia.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePersonalia),
        });
        return response.json();
    },
    );