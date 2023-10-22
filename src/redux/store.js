import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";
import createWorkerSlice from "./reducer/worker/createWorkerSlice";
import createRecruiterSlice from "./reducer/recruiter/createRecruiterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWorker: createWorkerSlice,
    createRecruiter: createRecruiterSlice,
  },
});
