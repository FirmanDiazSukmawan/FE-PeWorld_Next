import React, { useEffect } from "react";
import img from "../../assets/notify.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  getHireByWorkersId,
  getHireByWorkersIdSelector,
} from "@/redux/reducer/hire/getHireByWorkersId";
import {
  getHireByRecruiterId,
  getHireByRecruiterIdSelector,
} from "@/redux/reducer/hire/getHireByRecruiterId";

export default function Notifcation() {
  const users_id = Cookies.get("users_id");
  const dispatch = useDispatch();
  const workers = useSelector(getHireByWorkersIdSelector);
  const recruiter = useSelector(getHireByRecruiterIdSelector);

  console.log(workers);

  useEffect(() => {
    dispatch(getHireByRecruiterId(users_id));
    dispatch(getHireByWorkersId(users_id));
  }, [dispatch, users_id]);

  const role = Cookies.get("role");

  return (
    <div
      style={{
        marginLeft: "-16.5%",
        marginTop: "1%",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <div
        className="w-64 h-500 position-absolute"
        style={{
          backgroundColor: "#fff",
          height: 305,
          width: 258,
          marginRight: 50,
          borderRadius: 5,
          border: "1px solid",
        }}
      >
        <div className="flex flex-col w-[100%] h-[100%] px-3 py-1 overflow-y-auto">
          {/* {recruiter?.data?.length > 0 || workers?.data?.length > 0 ? (
            //
            <>
              {recruiter?.data?.map((recruiters, index) => (
                <div key={index}>
                  <span className="text-base font-semibold font-sans">
                    {recruiters.fullname}
                  </span>
                  <div className="flex w-[95%] bg-slate-300 rounded-lg">
                    <span className="text-sm font-light font-mono">
                      {recruiters.objective}
                    </span>
                  </div>
                </div>
              ))}
              {workers?.data?.map((worker, index) => (
                <div key={index}>
                  <span className="text-base font-semibold font-sans">
                    {worker.fullname}
                  </span>
                  <div className="flex w-[95%] bg-slate-300 rounded-lg">
                    <span className="text-sm font-light font-mono">
                      {worker.objective}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
              <Image src={img} alt="img" className="w-[50%] h=[50%]" />
              <h2 className="text-[#1F2A36] text-sm font-normal">
                Belum ada Notifikasi
              </h2>
            </div>
          )} */}

          {role === "0" && recruiter?.data?.length > 0 && (
            <>
              {recruiter?.data?.map((recruiters, index) => (
                <div key={index}>
                  <span className="text-base font-semibold font-sans">
                    {recruiters.fullname}
                  </span>
                  <div className="flex w-[95%] bg-slate-300 rounded-lg">
                    <span className="text-sm font-light font-mono">
                      {recruiters.objective}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}

          {role === "1" && workers?.data?.length > 0 && (
            <>
              {workers?.data?.map((worker, index) => (
                <div key={index}>
                  <span className="text-base font-semibold font-sans">
                    {worker.fullname}
                  </span>
                  <div className="flex w-[95%] bg-slate-300 rounded-lg">
                    <span className="text-sm font-light font-mono">
                      {worker.objective}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
          {recruiter?.data?.length === 0 && workers?.data?.length === 0 && (
            <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
              <Image src={img} alt="img" className="w-[50%] h=[50%]" />
              <h2 className="text-[#1F2A36] text-sm font-normal">
                Belum ada Notifikasi
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
