import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getRecruiterById = createAsyncThunk(
  "recruiter/getRecruiterById",
  async (users_id) => {
    try {
      const response = await axios.get(`${url}/recruiters/${users_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRecruiterByIdSlice = createSlice({
  name: "getRecruiterById",
  initialState: {
    status: "idle",
    loading: false,
    recruiter: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecruiterById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecruiterById.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      })
      .addCase(getRecruiterById.rejected, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      });
  },
});

export const getRecruiterByIdSelector = (state) =>
  state.getRecruiterById.recruiter;

export default getRecruiterByIdSlice.reducer;
