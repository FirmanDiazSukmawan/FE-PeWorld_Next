import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const updateExperience = createAsyncThunk(
  "experience/updateExperience",
  async ({ experience_id, exp, image }) => {
    try {
      const formData = new FormData();
      formData.append("company", exp.company);
      formData.append("datein", exp.datein);
      formData.append("dateout", exp.dateout);
      formData.append("description", exp.description);
      formData.append("profesi", exp.profesi);
      formData.append("image", image);
      const response = await axios.put(
        `${url}/experience/${experience_id}`,
        formData
      );

      toast.success("update Pengalaman Succesfully");

      setTimeout(() => {
        window.location.reload();
      }, 4000);

      return response.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        titleText: "Update Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const updateExperienceSlice = createSlice({
  name: "updateExperience",
  initialState: {
    status: "idle",
    loading: false,
    experience: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false;
        state.experience = action?.payload;
      });
  },
});

// export const updateExperienceSelector = (state) => state.updateExperience.experience;

export default updateExperienceSlice.reducer;
