import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const deletePortofolio = createAsyncThunk(
  "portofolio/deletePortofolio",
  async (portofolio_id) => {
    try {
      const response = await axios.delete(`${url}/portofolio/${portofolio_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePortofolioSlice = createSlice({
  name: "deletePortofolio",
  initialState: {
    status: "idle",
    loading: false,
    portofolio: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deletePortofolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portofolio = state.portofolio.filter(
          (item) => item !== action.payload
        );
      })
      .addCase(deletePortofolio.rejected, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      });
  },
});

export const deletePortofolioSelector = (state) =>
  state.deletePortofolio.portofolio;

export default deletePortofolioSlice.reducer;
