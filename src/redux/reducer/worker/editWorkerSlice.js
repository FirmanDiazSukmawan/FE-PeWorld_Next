import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const updateWorkers = createAsyncThunk(
  "worker/updateWorkers",
  async ({ data, users_id, image }) => {
    try {
      const formData = new FormData();
      formData.append("nama", data.nama);
      formData.append("image", image);
      formData.append("profesi", data.profesi);
      formData.append("location", data.location);
      formData.append("company", data.company);
      formData.append("instagram", data.instagram);
      formData.append("github", data.github);
      formData.append("gitlab", data.gitlab);
      formData.append("description", data.description);

      const response = await axios.put(`${url}/workers/${users_id}`, formData);

      toast.success("update Profile Succes");

      // setTimeout(() => {
      //   window.location.reload();
      // }, 5000);

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

export const updateWorkersSlice = createSlice({
  name: "updateWorkers",
  initialState: {
    status: "idle",
    loading: false,
    worker: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateWorkers.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateWorkers.fulfilled, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      })
      .addCase(updateWorkers.rejected, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      });
  },
});

// export const updateWorkersSelector = (state) => state.updateWorkers.worker;

export default updateWorkersSlice.reducer;
