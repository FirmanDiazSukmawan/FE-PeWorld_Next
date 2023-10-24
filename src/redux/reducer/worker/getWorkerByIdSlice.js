import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getWorkersById = createAsyncThunk(
  "worker/getWorkersById",
  async (users_id) => {
    try {
      const response = await axios.get(`${url}/workers/${users_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWorkersByIdSlice = createSlice({
  name: "getWorkersById",
  initialState: {
    status: "idle",
    loading: false,
    worker: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkersById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorkersById.fulfilled, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      })
      .addCase(getWorkersById.rejected, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      });
  },
});

export const getWorkersByIdSelector = (state) => state.getWorkersById.worker;

export default getWorkersByIdSlice.reducer;
