import { createSlice } from "@reduxjs/toolkit";

type userProgressState = {
  isVisible: boolean;
};

const initialState: userProgressState = {
  isVisible: false,
};

export const userProgressSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    showModal: (state) => {
      state.isVisible = true;
    },
    closeModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleVisibility, showModal, closeModal } =
  userProgressSlice.actions;
