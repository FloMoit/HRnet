import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});
