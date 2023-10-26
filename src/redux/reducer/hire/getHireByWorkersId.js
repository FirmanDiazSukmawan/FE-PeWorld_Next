import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getHireByWorkersId = createAsyncThunk(
  "hire/getHireByWorkersId",
  async (users_id) => {
    try {
      const response = await axios.get(`${url}/hire/workers/${users_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getHireByWorkersIdSlice = createSlice({
  name: "getHireByWorkersId",
  initialState: {
    status: "idle",
    loading: false,
    hire: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHireByWorkersId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHireByWorkersId.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      })
      .addCase(getHireByWorkersId.rejected, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      });
  },
});

export const getHireByWorkersIdSelector = (state) =>
  state.getHireByWorkersId.hire;

export default getHireByWorkersIdSlice.reducer;
