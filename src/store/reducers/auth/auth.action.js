import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../service/auth/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async function (creds, { rejectWithValue }) {
    try {
      const response = await AuthService.login(creds);
      localStorage.setItem("access_token", response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// @ts-ignore
export const checkAuth = createAsyncThunk(
  "auth/refresh",
  async function (_, { rejectWithValue }) {
    try {
      const response = await AuthService.refresh();
      localStorage.setItem("access_token", response.data.access_token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async function (_, { rejectWithValue }) {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("access_token");
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
