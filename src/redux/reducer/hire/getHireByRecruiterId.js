import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getHireByRecruiterId = createAsyncThunk(
  "hire/getHireByRecruiterId",
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

export const getHireByRecruiterIdSlice = createSlice({
  name: "getHireByRecruiterId",
  initialState: {
    status: "idle",
    loading: false,
    hire: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHireByRecruiterId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHireByRecruiterId.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      })
      .addCase(getHireByRecruiterId.rejected, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      });
  },
});

export const getHireByRecruiterIdSelector = (state) =>
  state.getHireByRecruiterId.hire;

export default getHireByRecruiterIdSlice.reducer;
