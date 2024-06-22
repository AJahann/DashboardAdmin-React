import { configureStore } from "@reduxjs/toolkit";

import { modal } from "../features/modal/Modal";
import { notifBarSlice } from "../features/notifBar/NotifBar";
import { themeSlice } from "../features/theme/ChangeTheme";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    notifBar: notifBarSlice.reducer,
    modal: modal.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
