import { configureStore } from "@reduxjs/toolkit";

import { calendarState } from "../features/Calendar/CalendarState";
import { modal } from "../features/modal/Modal";
import { notifBarSlice } from "../features/notifBar/NotifBar";
import { themeSlice } from "../features/theme/ChangeTheme";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    notifBar: notifBarSlice.reducer,
    modal: modal.reducer,
    calendar: calendarState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
