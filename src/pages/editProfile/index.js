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

        <div className="relative">
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

            <div className="flex flex-col w-[75%] h-[50%] ml-[3%] lg:-mt-32 md:-mt-32 -mt-14  mb-5  ">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Data Diri
                  </h1>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="Nama Lengkap"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama Lengkap
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Masukan nama lengkap"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="jobDesk"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Job Desk
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Name"
                        name="jobDesk"
                        type="text"
                        autoComplete="jobDesk"
                        placeholder="Masukan job desk"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="domisili"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Domisili
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="domisili"
                        name="domisili"
                        type="text"
                        autoComplete="domisili"
                        placeholder="Masukan Domisili"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="tempatKerja"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Masukan tempat kerja
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="tempatKerja"
                        name="tempatKerja"
                        type="text"
                        autoComplete="tempatKerja"
                        placeholder="Masukan tempat kerja"
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
                        placeholder="Masukan Deskripsi Singkat"
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white my-5">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Skill
                  </h1>
                  <form className="flex flex-col items-center ">
                    <div className="mt-2 w-[80%] md:[90%] lg:w-[90%] mb-4 flex flex-row">
                      <input
                        id="skill"
                        name="skill"
                        type="text"
                        autoComplete="skill"
                        placeholder="Input Your Skill"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />

                      <button className="text-center w-[20%] md:-[10%] lg-[10%]  h-9 bg-[#FBB017] rounded-md text-white lg:text-base md:text-sm text-xs font-semibold ml-3">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white mb-5">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Pengalaman Kerja
                  </h1>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="posisi"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Posisi
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="posisi"
                        name="posisi"
                        type="text"
                        autoComplete="posisi"
                        placeholder="Masukan Posisi"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="flex flex-row w-full justify-center items-center">
                      <div className="flex flex-col w-[45%] ml-[5%]">
                        <label
                          htmlFor="namaPerusahaan"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Nama Perusahaan
                        </label>
                        <div className="mt-2 w-[90%] mb-4">
                          <input
                            id="namaPerusahaan"
                            name="namaPerusahaan"
                            type="text"
                            autoComplete="namaPerusahaan"
                            placeholder="PT Harus Bisa"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-[45%] ml-[5%]">
                        <label
                          htmlFor="tahun"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Tahun Masuk - Tahun Keluar
                        </label>
                        <div className="mt-2 w-[90%] mb-4">
                          <input
                            id="tahun"
                            name="tahun"
                            type="text"
                            autoComplete="tahun"
                            placeholder="june/2022-dec/2023"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
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
                        placeholder="Deskripsikan Pekerjaan Anda"
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <button className="text-center w-[90%] h-9 border-2 border-[#FBB017] rounded-md text-[#FBB017] text-base font-semibold mt-3 mb-4">
                      Tambah Pengalaman Kerja
                    </button>
                  </form>
                </div>
              </div>
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Portofolio
                  </h1>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="namaAplikasi"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama Aplikasi
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="namaAplikasi"
                        name="namaAplikasi"
                        type="text"
                        autoComplete="namaAplikasi"
                        placeholder="Masukan Nama Aplikasi"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="repository"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Link Repository
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="repository"
                        name="repository"
                        type="text"
                        autoComplete="repository"
                        placeholder="Masukkan Link Repository"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="flex flex-row w-full">
                      <div className="flex flex-col w-[90%] ml-[5%]">
                        <label
                          htmlFor="tahun"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Type Portofolio
                        </label>
                        <div className="mt-2 w-[90%] mb-4 flex flex-row items-center">
                          <input
                            defaultChecked=""
                            id="default-radio-2"
                            type="radio"
                            defaultValue=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5"
                          >
                            Aplikasi Web
                          </label>

                          <input
                            defaultChecked=""
                            id="default-radio-2"
                            type="radio"
                            defaultValue=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Aplikasi Mobile
                          </label>
                        </div>
                      </div>
                    </div>
                    <fieldset className="w-full space-y-1 dark:text-gray-100 flex justify-center h-[30vh]">
                      <div className="flex border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 border-2 w-[80%] h-[30vh] justify-center items-center relative">
                        <div className="flex flex-col items-center w-[100%] h-[100%] justify-center">
                          <label
                            htmlFor="files"
                            className="text-sm font-medium text-center flex flex-col"
                          >
                            <i className="bi bi-cloud-arrow-up text-[5vw]"></i>
                            <h1 className="text-[#1F2A36] text-sm">
                              Drag & Drop untuk Upload Gambar Aplikasi Mobile
                            </h1>
                            <span className="text-[#1F2A36] text-xs">
                              Atau cari untuk mengupload file dari direktorimu.
                            </span>
                            <div className="flex flex-row items-center px-[10%] py-2">
                              <i className="bi bi-image-fill text-[20px]"></i>
                              <span className="text-[#1F2A36] text-xs w-[50%] mr-[5%]">
                                High-Res Image PNG, JPG or GIF
                              </span>
                              <i className="bi bi-arrows-angle-expand text-[20px]"></i>
                              <span className="text-[#1F2A36] text-xs w-[50%] ml-[5%] ">
                                High-Res Image PNG, JPG or GIF
                              </span>
                            </div>
                          </label>

                          <input
                            type="file"
                            name="files"
                            id="files"
                            className="py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400  w-[100%] h-[100%] absolute top-0 opacity-0"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <button className="text-center w-[90%] h-9 border-2 border-[#FBB017] rounded-md text-[#FBB017] text-base font-semibold mt-3 mb-4">
                      Tambah Pengalaman Kerja
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
