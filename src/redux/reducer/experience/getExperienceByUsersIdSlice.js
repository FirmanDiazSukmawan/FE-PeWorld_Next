import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const getExperienceByUsersId = createAsyncThunk(
  "experience/getExperienceByUsersId",
  async (users_id) => {
    try {
      const response = await axios.get(`${url}/experience/users/${users_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getExperienceByUsersIdSlice = createSlice({
  name: "getExperienceByUsersId",
  initialState: {
    status: "idle",
    loading: false,
    experience: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExperienceByUsersId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExperienceByUsersId.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      })
      .addCase(getExperienceByUsersId.rejected, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      });
  },
});

export const getExperienceByUsersIdSelector = (state) =>
  state.getExperienceByUsersId.experience;

export default getExperienceByUsersIdSlice.reducer;
