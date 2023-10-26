import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";

export const deleteExperience = createAsyncThunk(
  "experience/deleteExperience",
  async (experience_id) => {
    try {
      const response = await axios.delete(`${url}/experience/${experience_id}`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteExperienceSlice = createSlice({
  name: "deleteExperience",
  initialState: {
    status: "idle",
    loading: false,
    experience: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = state.experience.filter(
          (item) => item !== action.payload
        );
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      });
  },
});

export const deleteExperienceSelector = (state) =>
  state.deleteExperience.experience;

export default deleteExperienceSlice.reducer;
