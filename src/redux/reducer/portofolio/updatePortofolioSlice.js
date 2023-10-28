import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const updatePortofolio = createAsyncThunk(
  "portofolio/updatePortofolio",
  async ({ portofolio_id, porto, image }) => {
    try {
      const formData = new FormData();
      formData.append("namaAplikasi", porto.namaAplikasi);
      formData.append("linkRepo", porto.linkRepo);
      formData.append("typePortofolio", porto.typePortofolio);
      formData.append("image", image);
      const response = await axios.put(
        `${url}/portofolio/${portofolio_id}`,
        formData
      );

      toast.success("update Portofolio Succesfully");

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

export const updatePortofolioSlice = createSlice({
  name: "updatePortofolio",
  initialState: {
    status: "idle",
    loading: false,
    portofolio: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePortofolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      })
      .addCase(updatePortofolio.rejected, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      });
  },
});

// export const updatePortofolioSelector = (state) => state.updatePortofolio.portofolio;

export default updatePortofolioSlice.reducer;
