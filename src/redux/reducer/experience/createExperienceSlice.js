import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const createExperience = createAsyncThunk(
  "experience/createExperience",
  async ({ experience, users_id }) => {
    try {
      const response = await axios.post(`${url}/experience`, {
        company: experience.company,
        datein: experience.datein,
        dateout: experience.dateout,
        description: experience.description,
        profesi: experience.profesi,
        workers_id: users_id,
      });

      toast.success("Create Pengalaman Kerja Successfully");

      return response.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        titleText: "Create Pengalaman Kerja Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const createExperienceSlice = createSlice({
  name: "createExperience",
  initialState: {
    status: "idle",
    loading: false,
    experience: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      });
  },
});

// export const createExperienceSelector = (state) => state.createExperience.experience;

export default createExperienceSlice.reducer;
