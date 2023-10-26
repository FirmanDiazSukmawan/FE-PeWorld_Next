import React, { useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { users_id } = params;

    const res = await axios.get(`${url}/recruiters/${users_id}`);
    const recruiters = res.data;
    // console.log(recruiters);

    return {
      props: { recruiters },
    };
  } catch (err) {
    return {
      props: { recruiters: [] },
    };
  }
}

export default function Index({ recruiters }) {
  // console.log(recruiters);
  const [activeTab, setActiveTab] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative h-screen">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            {recruiters?.data?.map((recruiter, index) => (
              <div
                className="flex-col lg:w-[25%] md:w-[25%] w-[100%] bg-white mb-5 lg:-mt-32 md:-mt-32 -mt-14"
                key={index}
              >
                <div className="flex flex-col w-full items-center">
                  <div className="flex  lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-[50%] my-4 bg-gray-500">
                    <Image
                      src={recruiter.image}
                      alt="img"
                      className="rounded-[50%] lg:[100%] lg:h-[100%]"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[100%] flex-wrap">
                    <span className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                      {recruiter?.nama}
                    </span>
                    <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                      {recruiter?.jabatan}
                    </span>
                    <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal py-2">
                      <i className="bi bi-geo-alt lg:text-sm text-xs font-normal"></i>{" "}
                      {recruiter?.location}
                    </span>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {recruiter?.perusahaan}
                    </p>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {recruiter?.description}
                    </p>

                    <button className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold my-3">
                      Simpan
                    </button>
                    <button className="text-center w-[100%] h-9 bg-[#F6F7F8] rounded-md text-[#5E50A1] text-base font-semibold my-2 border-2">
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col lg:w-[75%] md:w-[75%] w-[100%] h-[50%] lg:ml-[3%] md:ml-[3%] ml-[0] lg:-mt-32 md:-mt-32 -mt-14  mb-5">
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
