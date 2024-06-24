import { createSlice } from "@reduxjs/toolkit";

const initialState: { status: boolean; modalFor: string } = {
  status: false,
  modalFor: "",
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalFor = action.payload;
      state.status = true;
    },
    closeModal: (state) => {
      state.status = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;

export default modal.reducer;
