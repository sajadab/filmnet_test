import {configureStore} from "@reduxjs/toolkit";
import {filmReducer} from "@/core/redux/reducer/filmReducer";

export const store = configureStore({
    reducer: {
        filmReducer: filmReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;