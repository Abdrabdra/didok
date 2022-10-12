import { createSlice } from "@reduxjs/toolkit";
import { ActionsEnum } from "../../enum.ts";
import { login, logout } from "./auth.action";

// interface IInitState {
//   isAuth: boolean;
//   error: unknown;
//   status: ActionsEnum;
// }

const initialState = {
  isAuth: false,
  error: null,
  status: "SUCCESS",
};

const authReducer = createSlice({
  name: "auth",
  reducers: {
    setStatus: (state, { payload }) => {
      //debugger
      state.status = payload;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = ActionsEnum.SUCCESS;

        state.isAuth = true;
        console.log(state.isAuth);
      })
      .addCase(login.rejected, (state, response) => {
        // state.status = ActionsEnum.ERROR;
        // @ts-ignore
        state.error = response.payload.message;
        // @ts-ignore
        console.log(response.payload.message);
        // debugger
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      });
  },
});

export const { setStatus } = authReducer.actions;

export default authReducer.reducer;
