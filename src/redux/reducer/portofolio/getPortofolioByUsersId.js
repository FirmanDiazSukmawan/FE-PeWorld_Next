import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getPortofolioByUsersId = createAsyncThunk(
  "portofolio/getPortofolioByUsersId",
  async (users_id) => {
    try {
      const response = await axios.get(`${url}/portofolio/users/${users_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPortofolioByUsersIdSlice = createSlice({
  name: "getPortofolioByUsersId",
  initialState: {
    status: "idle",
    loading: false,
    portofolio: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortofolioByUsersId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPortofolioByUsersId.fulfilled, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      })
      .addCase(getPortofolioByUsersId.rejected, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      });
  },
});

export const getPortofolioByUsersIdSelector = (state) =>
  state.getPortofolioByUsersId.portofolio;

export default getPortofolioByUsersIdSlice.reducer;
