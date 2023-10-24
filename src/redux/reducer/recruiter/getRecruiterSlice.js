import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getRecruiter = createAsyncThunk(
  "recruiter/getRecruiter",
  async () => {
    try {
      const response = await axios.get(`${url}/recruiters`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRecruiterSlice = createSlice({
  name: "getRecruiter",
  initialState: {
    status: "idle",
    loading: false,
    recruiter: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecruiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      })
      .addCase(getRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      });
  },
});

export const getRecruiterSelector = (state) => state.getRecruiter.recruiter;

export default getRecruiterSlice.reducer;
