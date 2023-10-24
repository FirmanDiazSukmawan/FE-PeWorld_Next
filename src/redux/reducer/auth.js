import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const loginWorker = createAsyncThunk(
  "worker/loginWorker",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${url}/workers/login`, {
        email: email,
        password: password,
      });
      Cookies.set("token", response.data.token);
      Cookies.set("users_id", response.data.data.workers_id);
      Cookies.set("role", response.data.data.role);

      toast.success("login succesfully");

      return response.data;
    } catch (error) {
      //   console.log(error);
      Swal.fire({
        titleText: "Login Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const loginRecruiter = createAsyncThunk(
  "recruiter/loginRecruiter",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${url}/recruiters/login`, {
        email: email,
        password: password,
      });
      Cookies.set("token", response.data.token);
      Cookies.set("users_id", response.data.data.recruiter_id);
      Cookies.set("role", response.data.data.role);

      toast.success("login succesfully");

      return response.data;
    } catch (error) {
      //   console.log(error);
      Swal.fire({
        titleText: "Login Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    loading: false,
    auth: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action?.payload;
      })
      .addCase(loginWorker.rejected, (state, action) => {
        state.loading = false;
        state.auth = action?.payload;
      })
      .addCase(loginRecruiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action?.payload;
      })
      .addCase(loginRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.auth = action?.payload;
      });
  },
});

// export const loginWorkerSelector = (state) => state.loginWorker.auth;

export default authSlice.reducer;
