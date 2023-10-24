import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";
import createWorkerSlice from "./reducer/worker/createWorkerSlice";
import createRecruiterSlice from "./reducer/recruiter/createRecruiterSlice";
import getWorkerSlice from "./reducer/worker/getWorkerSlice";
import getWorkerByIdSlice from "./reducer/worker/getWorkerByIdSlice";
import getRecruiterSlice from "./reducer/recruiter/getRecruiterSlice";
import getRecruiterByIdSlice from "./reducer/recruiter/getRecruitersByIdSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWorker: createWorkerSlice,
    createRecruiter: createRecruiterSlice,
    getWorkers: getWorkerSlice,
    getWorkersById: getWorkerByIdSlice,
    getRecruiter: getRecruiterSlice,
    getRecruiterById: getRecruiterByIdSlice,
  },
});
