import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const createWorker = createAsyncThunk(
  "worker/createWorker",
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

export const createWorkerSlice = createSlice({
  name: "createWorker",
  initialState: {
    status: "idle",
    loading: false,
    worker: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      })
      .addCase(createWorker.rejected, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      });
  },
});

// export const createWorkerSelector = (state) => state.createWorker.worker;

export default createWorkerSlice.reducer;
