import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const createHire = createAsyncThunk(
  "hire/createHire",
  async ({ workers_id, users_id, data }) => {
    // console.log(hire);
    try {
      const response = await axios.post(`${url}/hire`, {
        objective: data.objective,
        fullname: data.fullname,
        email: data.email,
        handphone: data.handphone,
        description: data.description,
        workers_id: workers_id,
        recruiter_id: users_id,
      });
      console.log(response);

      toast.success("Hire Successfully");

      return response.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        titleText: "Hire Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const createHireSlice = createSlice({
  name: "createHire",
  initialState: {
    status: "idle",
    loading: false,
    hire: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHire.pending, (state) => {
        state.loading = true;
      })
      .addCase(createHire.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      })
      .addCase(createHire.rejected, (state, action) => {
        state.loading = false;
        state.hire = action?.payload;
      });
  },
});

// export const createHireSelector = (state) => state.createHire.hire;

export default createHireSlice.reducer;
