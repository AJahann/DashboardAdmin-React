import { configureStore } from "@reduxjs/toolkit";

import { themeSlice } from "../features/theme/ChangeTheme";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
