import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";
import createWorkerSlice from "./reducer/worker/createWorkerSlice";
import createRecruiterSlice from "./reducer/recruiter/createRecruiterSlice";
import getWorkerSlice from "./reducer/worker/getWorkerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWorker: createWorkerSlice,
    createRecruiter: createRecruiterSlice,
    getWorkers: getWorkerSlice,
  },
});
