import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../store/Store";

interface ThemeState {
  value: boolean;
}

const getLocalStorageTheme = () => {
  return localStorage.getItem("theme") === "light";
};

const initialState: ThemeState = {
  value: getLocalStorageTheme(),
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    dark: (state) => {
      localStorage.setItem("theme", "dark");
      state.value = false;
    },
    light: (state) => {
      localStorage.setItem("theme", "light");
      state.value = true;
    },
  },
});

export const { dark, light } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
