import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../store/Store";

const initialState: { value: boolean } = {
  value: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;

export const modalStatus = (state: RootState) => state.modal.value;

export default modal.reducer;
