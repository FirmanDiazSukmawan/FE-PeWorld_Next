import React, { useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";

export default function Index() {
  const [activeTab, setActiveTab] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="overflow-x-hidden bg-[#F6F7F8]">
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative mb-5">
          <div
            className="flex w-full h-[40vh] bg-[#5E50A1] absolute"
            style={{ zIndex: -1 }}
          ></div>
          <div className="flex justify-center flex-row w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            <div className="flex-col w-[25%] bg-white mt-[3%] mb-5">
              <div className="flex flex-col w-full items-center">
                <div className="flex  lg:w-[150px] md:w-[100px] w-[50px] lg:h-[150px] md:h-[100px] h-[50px] rounded-[50%] my-4">
                  <Image
                    src={img}
                    alt="img"
                    className="rounded-[50%] lg:[100%] lg:h-[100%]"
                  />
                </div>
                <div className="flex flex-col w-[90%]">
                  <h1 className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold ">
                    Louis Tomlinson
                  </h1>
                  <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                    Web developer
                  </span>
                  <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                    <i className="bi bi-geo-alt"></i> Purwokerto, Jawa Tengah
                  </span>
                  <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                    Freelance
                  </p>
                  <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>

                  <h1 className="text-[#1F2A36] lg:text-2xl md:text-lg text-base font-semibold ">
                    Skill :
                  </h1>
                  <div className="flex flex-row flex-wrap w-[100%]">
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Python
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Laravel
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Golang
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        JavaScript
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        PHP
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        HTML
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        C++
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Kotlin
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[100%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Swift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[75%] h-[50%] ml-[3%]  mx-[3%] ">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%]">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] xl:text-3xl md:text-xl text-lg font-semibold font-sans pl-[5%] pt-[3%]">
                    Hubungi Louis Tomlinson
                  </h1>
                  <h5 className="text-[#46505C] lg:text-lg md:text-base text-xs font-semibold font-sans pl-[5%] px-[3%] mb-[3%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </h5>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="project"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Tujuan tentang pesan ini
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <input
                        id="project"
                        name="project"
                        type="text"
                        autoComplete="project"
                        placeholder="Masukan nama lengkap"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="nama"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama Lengkap
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <input
                        id="Name"
                        name="nama"
                        type="text"
                        autoComplete="nama"
                        placeholder="Masukan nama lengkap"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Email
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        placeholder="Masukan Email"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="handphone"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      No Handphone
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <input
                        id="handphone"
                        name="handphone"
                        type="text"
                        autoComplete="handphone"
                        placeholder="Masukan No Handphone"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="deskripsi"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Deskripsi
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <textarea
                        id="deskripsi"
                        name="deskripsi"
                        type="text"
                        autoComplete="deskripsi"
                        placeholder="Deskripsikan/jelaskan lebih detail"
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <button className="text-center w-[90%] h-9 bg-[#FBB017] rounded-md text-white text-base font-semibold ">
                      Hire
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
