import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";
import createWorkerSlice from "./reducer/worker/createWorkerSlice";
import createRecruiterSlice from "./reducer/recruiter/createRecruiterSlice";
import getWorkerSlice from "./reducer/worker/getWorkerSlice";
import getWorkerByIdSlice from "./reducer/worker/getWorkerByIdSlice";
import getRecruiterSlice from "./reducer/recruiter/getRecruiterSlice";
import getRecruiterByIdSlice from "./reducer/recruiter/getRecruitersByIdSlice";
import updateWorkersSlice from "./reducer/worker/editWorkerSlice";
import updateSkillsWorkersSlice from "./reducer/worker/updateWorkerSkillSlice";
import createExperienceSlice from "./reducer/experience/createExperienceSlice";
import updateExperienceSlice from "./reducer/experience/updateExperienceSlice";
import deleteExperienceSlice from "./reducer/experience/deleteExperienceSlice";
import getExperienceByUsersIdSlice from "./reducer/experience/getExperienceByUsersIdSlice";
import createPortofolioSlice from "./reducer/portofolio/createPortofolioSlice";
import deletePortofolioSlice from "./reducer/portofolio/deletePortofolioSlice";
import getPortofolioByUsersIdSlice from "./reducer/portofolio/getPortofolioByUsersId";
import updatePortofolioSlice from "./reducer/portofolio/updatePortofolioSlice";
import updateRecruiterSlice from "./reducer/recruiter/updateRecruiterSlice";
import createHireSlice from "./reducer/hire/createHireSlice";
import getHireByWorkersIdSlice from "./reducer/hire/getHireByWorkersId";
import getHireByRecruiterIdSlice from "./reducer/hire/getHireByRecruiterId";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWorker: createWorkerSlice,
    createRecruiter: createRecruiterSlice,
    getWorkers: getWorkerSlice,
    getWorkersById: getWorkerByIdSlice,
    updateWorkers: updateWorkersSlice,
    updateSkillsWorkers: updateSkillsWorkersSlice,
    getRecruiter: getRecruiterSlice,
    getRecruiterById: getRecruiterByIdSlice,
    updateRecruiter: updateRecruiterSlice,
    getExperienceByUsersId: getExperienceByUsersIdSlice,
    createExperience: createExperienceSlice,
    updateExperience: updateExperienceSlice,
    deleteExperience: deleteExperienceSlice,
    createPortofolio: createPortofolioSlice,
    deletePortofolio: deletePortofolioSlice,
    getPortofolioByUsersId: getPortofolioByUsersIdSlice,
    updatePortofolio: updatePortofolioSlice,
    getHireByWorkersId: getHireByWorkersIdSlice,
    getHireByRecruiterId: getHireByRecruiterIdSlice,
    createHire: createHireSlice,
  },
});
