import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const createRecruiter = createAsyncThunk(
  "recruiter/createRecruiter",
  async ({ data }) => {
    try {
      const response = await axios.post(`${url}/recruiters`, {
        nama: data.nama,
        email: data.email,
        perusahaan: data.perusahaan,
        jabatan: data.jabatan,
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success("register Successfully");

      return response.data;
    } catch (error) {
      //   console.log(error);
      Swal.fire({
        titleText: "register Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const createRecruiterSlice = createSlice({
  name: "createRecruiter",
  initialState: {
    status: "idle",
    loading: false,
    recruiter: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRecruiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      })
      .addCase(createRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.recruiter = action?.payload;
      });
  },
});

// export const createRecruiterSelector = (state) => state.createRecruiter.recruiter;

export default createRecruiterSlice.reducer;
