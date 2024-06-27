import { createSlice } from "@reduxjs/toolkit";

const initialState: { date: string; who?: string } = {
  date: "",
  who: "",
};

export const calendarState = createSlice({
  name: "calendarState",
  initialState,
  reducers: {
    setCelendarState: (state, action) => {
      state.date = action.payload?.date;
      state.who = action.payload?.who;
    },
  },
});

export const { setCelendarState } = calendarState.actions;

export default calendarState.reducer;
