import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const createPortofolio = createAsyncThunk(
  "portofolio/createPortofolio",
  async ({ users_id, portofolio, imagePortofolio }) => {
    // console.log(portofolio);
    try {
      const formData = new FormData();
      formData.append("namaAplikasi", portofolio.namaAplikasi);
      formData.append("linkRepo", portofolio.linkRepo);
      formData.append("typePortofolio", portofolio.typePortofolio);
      formData.append("image", imagePortofolio);
      formData.append("workers_id", users_id);
      const response = await axios.post(`${url}/portofolio`, formData);

      toast.success("Create Portofolio Successfully");

      return response.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        titleText: "Create Portofolio Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const createPortofolioSlice = createSlice({
  name: "createPortofolio",
  initialState: {
    status: "idle",
    loading: false,
    portofolio: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPortofolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      })
      .addCase(createPortofolio.rejected, (state, action) => {
        state.loading = false;
        state.portofolio = action?.payload;
      });
  },
});

// export const createPortofolioSelector = (state) => state.createPortofolio.portofolio;

export default createPortofolioSlice.reducer;
