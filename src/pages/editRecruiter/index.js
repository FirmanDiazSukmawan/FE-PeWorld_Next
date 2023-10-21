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
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative ">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center flex-row w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8] ">
            <div className="flex-col w-[25%] h-[100vh] bg-white lg:-mt-32 md:-mt-32 -mt-14">
              <div className="flex flex-col w-full items-center">
                <div className="flex  lg:w-[150px] md:w-[100px] w-[50px] lg:h-[150px] md:h-[100px] h-[50px] rounded-[50%] my-4">
                  <Image
                    src={img}
                    alt="img"
                    className="rounded-[50%] lg:[100%] lg:h-[100%]"
                  />
                </div>
                <div className="flex flex-col w-[90%]">
                  <h1 className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
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
                  <button className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold mt-3">
                    Simpan
                  </button>
                  <button className="text-center w-[100%] h-9 bg-[#F6F7F8] rounded-md text-[#5E50A1] text-base font-semibold my-3">
                    Batal
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[75%] h-[50%] ml-[3%] lg:-mt-32 md:-mt-32 -mt-14  mb-5">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Data Diri
                  </h1>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="namaPerusahaan"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama Perusahaan
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="nama"
                        name="namaPerusahan"
                        type="text"
                        autoComplete="namaPerusahaan"
                        placeholder="Masukan Nama Perusahaan"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="bidang"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Bidang
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Name"
                        name="bidang"
                        type="text"
                        autoComplete="bidang"
                        placeholder="Masukan Bidang Perusahaan ex Financial"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="kota"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Kota
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="kota"
                        name="kota"
                        type="text"
                        autoComplete="kota"
                        placeholder="Masukan Kota"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <label
                      htmlFor="deskripsi"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Deskripsi Singkat
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <textarea
                        id="deskripsi"
                        name="deskripsi"
                        type="text"
                        autoComplete="deskripsi"
                        placeholder="Tuliskan Deskripsi Singkat"
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Email
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
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
                      htmlFor="instagram"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Instagram
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="instagram"
                        name="instagram"
                        type="text"
                        autoComplete="instagram"
                        placeholder="Masukan Nama Instagram"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="handphone"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nomor Telepon
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="handphone"
                        name="handphone"
                        type="text"
                        autoComplete="handphone"
                        placeholder="Masukan Nomor telepon"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="linkedin"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      LinkedIn
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="text"
                        autoComplete="linkedin"
                        placeholder="Masukan nama LinkedIn"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
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
