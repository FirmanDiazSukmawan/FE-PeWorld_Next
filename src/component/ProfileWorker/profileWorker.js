import React, { useEffect, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { differenceInMonths, format } from "date-fns";
import ModalUpdateExperience from "@/component/modalUpdateExperience/ModalUpdateExperience";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperience } from "@/redux/reducer/experience/deleteExperienceSlice";
import Swal from "sweetalert2";
import {
  getExperienceByUsersId,
  getExperienceByUsersIdSelector,
} from "@/redux/reducer/experience/getExperienceByUsersIdSlice";
import Cookies from "js-cookie";
import { deletePortofolio } from "@/redux/reducer/portofolio/deletePortofolioSlice";
import {
  getPortofolioByUsersId,
  getPortofolioByUsersIdSelector,
} from "@/redux/reducer/portofolio/getPortofolioByUsersId";
import ModalUpdatePortofolio from "../modalUpdatePortofolio/ModalUpdatePortofolio";

export default function ProfileWorker({ workers }) {
  // console.log(experience);
  const router = useRouter();
  const dispatch = useDispatch();
  const users_id = Cookies.get("users_id");
  const experience = useSelector(getExperienceByUsersIdSelector);
  const portofolio = useSelector(getPortofolioByUsersIdSelector);

  useEffect(() => {
    dispatch(getExperienceByUsersId(users_id));
    dispatch(getPortofolioByUsersId(users_id));
  }, [dispatch, users_id]);

  const handleDeleteExp = async (experience_id) => {
    const result = await Swal.fire({
      title: "Delete Experience",
      text: "Are you sure you want to delete this Experience?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
    });
    if (result.isConfirmed) {
      try {
        await dispatch(deleteExperience(experience_id));
        dispatch(getExperienceByUsersId(users_id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeletePortofolio = async (portofolio_id) => {
    const result = await Swal.fire({
      title: "Delete Portofolio",
      text: "Are you sure you want to delete this Portofolio?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
    });
    if (result.isConfirmed) {
      try {
        await dispatch(deletePortofolio(portofolio_id));
        dispatch(getPortofolioByUsersId(users_id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditProfile = (workers_id) => {
    router.push(`/editProfile/${workers_id}`);
  };

  function formatDateToMonthYear(dateString) {
    const date = new Date(dateString);
    return format(date, "MMMM yyyy");
  }

  const exp = experience?.data?.map((item) => {
    const datein = new Date(item.datein);
    const dateout = new Date(item.dateout);
    const totalBulan = differenceInMonths(dateout, datein);
    return {
      ...item,
      datein: formatDateToMonthYear(item.datein),
      dateout: formatDateToMonthYear(item.dateout),
      totalBulan: totalBulan,
    };
  });

  //   console.log(exp);
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative pb-9">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8] ">
            {workers?.data?.map((worker, index) => (
              <div
                className="flex-col lg:w-[25%] md:w-[25%] w-[100%] bg-white mb-5 lg:-mt-32 md:-mt-32 -mt-14"
                key={index}
              >
                <div className="flex flex-col w-full items-center">
                  <div className="flex  lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-[50%] my-4 bg-gray-500">
                    {worker?.image && (
                      <Image
                        src={worker.image}
                        alt="img"
                        className="rounded-[50%] lg:[100%] lg:h-[100%]"
                        width={150}
                        height={150}
                      />
                    )}
                  </div>
                  <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[100%] flex-wrap">
                    <span className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                      {worker?.nama}
                    </span>
                    <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                      {worker?.profesi === null
                        ? "Update your jobdesk"
                        : worker?.profesi}
                    </span>
                    <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal py-2">
                      <i className="bi bi-geo-alt lg:text-sm text-xs font-normal"></i>{" "}
                      {worker?.location === null
                        ? "update your location"
                        : worker?.location}
                    </span>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {worker?.company === null
                        ? "update your company"
                        : worker?.company}
                    </p>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {worker?.description === null
                        ? `Hello Perkenalkan nama saya ${worker?.nama}`
                        : worker?.description}
                    </p>
                    <button
                      className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold my-3"
                      onClick={() => handleEditProfile(worker?.workers_id)}
                    >
                      Edit Profile
                    </button>
                    <h1 className="text-[#1F2A36] lg:text-2xl md:text-lg text-base font-semibold ">
                      Skill :
                    </h1>
                    <div className="flex flex-row flex-wrap w-[100%]">
                      {worker?.skills ? (
                        worker.skills.split(",").map((skill, index) => (
                          <div
                            className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[44%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                            style={{
                              backgroundColor: "rgba(251, 176, 23, 0.8)",
                            }}
                            key={index}
                          >
                            <p className="text-[#fff] text-xs my-auto mx-auto ">
                              {skill}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div>No skill available</div>
                      )}
                    </div>
                    <div className="flex flex-col flex-wrap w-[100%]">
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-envelope pr-2"></i>
                        {worker?.email}
                      </p>
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-instagram pr-2"></i>
                        {worker?.instagram === null
                          ? "Nothing instagram"
                          : worker?.instagram}
                      </p>
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-github pr-2"></i>
                        {worker?.github === null
                          ? "Nothing github"
                          : worker?.github}
                      </p>
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-gitlab pr-2"></i>
                        {worker?.gitlab === null
                          ? "Nothing gitlab"
                          : worker?.gitlab}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-row lg:w-[75%] md:w-[75%] w-[100%] h-[50%] lg:ml-[3%] md:ml-[3%] ml-[0%] bg-white lg:-mt-32 md:-mt-32 lg:mb-0 md:mb-0 mb-5">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%]">
                <Tabs
                  defaultActiveKey="portofolio"
                  id="noanim-tab-example"
                  className="flex flex-row lg:w-[30vw]  lg:mx-3 md:mx-3 mx-0"
                  justify
                >
                  <Tab
                    eventKey="portofolio"
                    title="Portofolio"
                    className="custom-tab"
                  >
                    <div className="flex flex-row flex-wrap w-[100%] pt-3 bg-white">
                      {portofolio?.data?.map((item, index) => (
                        <div
                          className="flex flex-col lg:w-[25%] md:w-[25%] w-[25%] mx-4 items-center rounded-lg h-[30vh] relative"
                          key={index}
                        >
                          {item?.image && (
                            <Image
                              src={item.image}
                              className="w-[100%] h-[80%] rounded-lg"
                              alt="..."
                              width={300}
                              height={300}
                              style={{ objectFit: "fill" }}
                            />
                          )}
                          <div className="flex flex-col w-full h-[20%]">
                            <span className="lg:text-base sm:text-sm text-xs text-[#1F2A36] font-sans font-semibold text-center ">
                              {item?.namaaplikasi}
                            </span>
                            <span className="text-[#9EA0A5] text-xs font-mono text-center">
                              {item?.typeportofolio}
                            </span>
                          </div>
                          <div className="flex flex-row absolute right-0">
                            <ModalUpdatePortofolio portofolio={item} />
                            <div
                              className="text-center w-[40px] h-[40px] px-2"
                              onClick={() =>
                                handleDeletePortofolio(item.portofolio_id)
                              }
                            >
                              <i className="bi bi-folder-minus text-[100%]"></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab
                    eventKey="pengalamanKerja"
                    title="Pengalaman Kerja"
                    className="custom-tab"
                  >
                    <div className="flex flex-col">
                      {exp?.map((item, index) => (
                        <div
                          className=" px-3 flex flex-row w-full pt-4 justify-between items-center"
                          key={index}
                        >
                          <div className="flex flex-row w-[80%]">
                            <div className="mx-3 lg:w-[8vw] md:w-[20vw] w-[30vw] bg-slate-200 rounded-xl">
                              {item.image && (
                                <Image
                                  src={item.image}
                                  alt="img"
                                  width={219}
                                  height={148}
                                  className="w-[100%] h-[100%] rounded-xl"
                                />
                              )}
                            </div>
                            <div className="flex flex-col ">
                              <span className="text-[#1F2A36] lg:text-xl md:text-base text-sm font-semibold">
                                {item.profesi}
                              </span>
                              <span className="text-[#46505C] lg:text-lg md:text-base text-xs font-semibold">
                                {item.company}
                              </span>
                              <div className="flex flex-row">
                                <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-norma pr-3">
                                  {item.datein} - {item.dateout}
                                </p>
                                <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-normal">
                                  {item.totalBulan}Bulan
                                </p>
                              </div>
                              <span className="text-[#1F2A36] lg:text-sm text-xs font-normal w-[95%]">
                                {item.description}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center  lg:w-[10%] md:w-[15%] w-[20%] items-center">
                            <ModalUpdateExperience experience={item} />

                            <div
                              className="text-center w-[50%] h-[100%]"
                              onClick={() =>
                                handleDeleteExp(item.experience_id)
                              }
                            >
                              <i className="bi bi-folder-minus text-[100%]"></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
