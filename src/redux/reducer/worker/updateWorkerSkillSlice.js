import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../baseUrl/url";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const updateSkillsWorkers = createAsyncThunk(
  "worker/updateSkillsWorkers",
  async ({ skills, users_id }) => {
    // console.log(users_id);
    try {
      const response = await axios.patch(`${url}/workers/update/${users_id}`, {
        skills: skills,
      });

      toast.success("update Skills Succes");

      return response.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        titleText: "Update Skills Failed",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
);

export const updateSkillsWorkersSlice = createSlice({
  name: "updateSkillsWorkers",
  initialState: {
    status: "idle",
    loading: false,
    worker: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSkillsWorkers.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSkillsWorkers.fulfilled, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      })
      .addCase(updateSkillsWorkers.rejected, (state, action) => {
        state.loading = false;
        state.worker = action?.payload;
      });
  },
});

// export const updateSkillsWorkersSelector = (state) => state.updateSkillsWorkers.worker;

export default updateSkillsWorkersSlice.reducer;
