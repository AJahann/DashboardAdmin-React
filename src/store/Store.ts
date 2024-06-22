import { configureStore } from "@reduxjs/toolkit";

import { notifBarSlice } from "../features/notifBar/NotifBar";
import { themeSlice } from "../features/theme/ChangeTheme";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    notifBar: notifBarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
