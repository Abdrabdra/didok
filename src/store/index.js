//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer
import authReducer from "./reducers/auth/auth.slice";

//rtk

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const RootState = typeof store.getState;
export const AppDispatch = typeof store.dispatch;
export const useTypedSelector = useSelector;
