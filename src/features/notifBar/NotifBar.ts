import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../store/Store";

interface NotifBarState {
  value: boolean;
}

const initialState: NotifBarState = {
  value: false,
};

export const notifBarSlice = createSlice({
  name: "notifBar",
  initialState,
  reducers: {
    openNotifBar: (state) => {
      state.value = true;
    },
    closeNotifBar: (state) => {
      state.value = false;
    },
  },
});

export const { openNotifBar, closeNotifBar } = notifBarSlice.actions;

export const selectNotifBar = (state: RootState) => state.notifBar.value;

export default notifBarSlice.reducer;
