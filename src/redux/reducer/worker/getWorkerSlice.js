import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getWorkers = createAsyncThunk(
  "worker/getWorkers",
  async ({ data }) => {
    try {
      const response = await axios.post(`${url}/workers`, {
        nama: data.nama,
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success("register Successfully");

      return response.data;
    } catch (error) {
      //   console.log(error);
      Swal.fire({
        titleText: "register Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const getWorkersSlice = createSlice({
  name: "getWorkers",
  initialState: {
    status: "idle",
    loading: false,
    worker: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorkers.fulfilled, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      })
      .addCase(getWorkers.rejected, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      });
  },
});

export const getWorkersSelector = (state) => state.getWorkers.worker;

export default getWorkersSlice.reducer;
