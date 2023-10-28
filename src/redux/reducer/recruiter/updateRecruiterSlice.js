import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const updateRecruiter = createAsyncThunk(
  "recruiter/updateRecruiter",
  async ({ data, users_id, image }) => {
    try {
      const formData = new FormData();
      formData.append("nama", data.nama);
      formData.append("image", image);
      formData.append("bidang", data.bidang);
      formData.append("location", data.location);
      formData.append("description", data.description);
      formData.append("perusahaan", data.perusahaan);
      formData.append("jabatan", data.jabatan);
      formData.append("instagram", data.instagram);
      formData.append("linkedin", data.linkedin);

      const response = await axios.put(
        `${url}/recruiters/${users_id}`,
        formData
      );

      toast.success("update Profile Succes");
      // console.log(formData);

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

export const updateRecruiterSlice = createSlice({
  name: "updateRecruiter",
  initialState: {
    status: "idle",
    loading: false,
    recruiter: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateRecruiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      })
      .addCase(updateRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      });
  },
});

// export const updateRecruiterSelector = (state) => state.updateRecruiter.recruiter;

export default updateRecruiterSlice.reducer;
