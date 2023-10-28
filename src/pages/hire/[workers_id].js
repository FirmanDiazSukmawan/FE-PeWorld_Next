import React, { useState } from "react";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { url } from "@/redux/baseUrl/url";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { createHire } from "@/redux/reducer/hire/createHireSlice";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { workers_id } = params;
    // console.log(query);
    const res = await axios.get(`${url}/workers/${workers_id}`);
    const workers = res.data;

    // console.log(workers.data);

    return {
      props: { workers },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { workers: [] },
    };
  }
}

export default function Index({ workers }) {
  const route = useRouter();
  const { workers_id } = route.query;
  const users_id = Cookies.get("users_id");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    objective: "",
    fullname: "",
    email: "",
    handphone: "",
    description: "",
    workers_id: "",
    recruiter_id: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleHire = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createHire({ workers_id, users_id, data }));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  return (
    <>
      <Head>
        <title>PeWorld</title>
      </Head>
      <div className="overflow-x-hidden">
        <ToastContainer />
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            {workers?.data?.map((worker, index) => (
              <div
                className="flex-col lg:w-[25%] md:w-[25%] w-[100%] bg-white mb-5 lg:-mt-32 md:-mt-32 -mt-14"
                key={index}
              >
                <div className="flex flex-col w-full items-center">
                  <div className="flex  lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-[50%] my-4 bg-gray-500">
                    {worker.image && (
                      <Image
                        src={worker.image}
                        alt="img"
                        className="rounded-[50%] lg:[100%] lg:h-[100%]"
                        width={150}
                        height={150}
                      />
                    )}
                  </div>
                  <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[90%] flex-wrap">
                    <span className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                      {worker?.nama}
                    </span>
                    <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                      {worker?.profesi}
                    </span>
                    <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal py-2">
                      <i className="bi bi-geo-alt lg:text-sm text-xs font-normal"></i>{" "}
                      {worker?.location}
                    </span>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {worker?.company}
                    </p>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {worker?.description}
                    </p>

                    <h1 className="text-[#1F2A36] lg:text-2xl md:text-lg text-base font-semibold ">
                      Skill :
                    </h1>
                    <div className="flex flex-row flex-wrap w-[100%]">
                      {worker?.skills ? (
                        worker?.skills?.split(",").map((skill, index) => (
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
                        {worker?.instagram}
                      </p>
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-github pr-2"></i>
                        {worker?.github}
                      </p>
                      <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                        <i className="bi bi-gitlab pr-2"></i>
                        {worker?.gitlab}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-row lg:w-[75%] md:w-[75%] w-[100%] h-[50%] lg:ml-[3%] md:ml-[3%] ml-[0%] bg-white lg:-mt-32 md:-mt-32 lg:mb-0 md:mb-0 mb-5 pb-5">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] ">
                <div className="flex flex-col ">
                  {workers?.data?.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <h1 className="text-[#1F2A36] xl:text-3xl md:text-xl text-lg font-semibold font-sans pl-[5%] pt-[3%]">
                        Hubungi {item.nama}
                      </h1>

                      <h5 className="text-[#46505C] lg:text-lg md:text-base text-xs font-semibold font-sans pl-[5%] px-[3%] mb-[3%]">
                        Rekrut Talent Kompeten disini ayo segera hubungi {""}
                        {item.nama}
                      </h5>
                    </div>
                  ))}
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="objective"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Tujuan tentang pesan ini
                    </label>
                    <div className="mt-2 w-[90%] mb-3">
                      <input
                        id="objective"
                        name="objective"
                        type="text"
                        autoComplete="objective"
                        placeholder="Masukan Tujuan Pesan ini"
                        value={data.objective}
                        onChange={handleChange}
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
                        name="fullname"
                        type="text"
                        autoComplete="nama"
                        placeholder="Masukan nama lengkap"
                        value={data.fullname}
                        onChange={handleChange}
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
                        placeholder="Masukan Email Anda"
                        value={data.email}
                        onChange={handleChange}
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
                        value={data.handphone}
                        onChange={handleChange}
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
                        name="description"
                        type="text"
                        autoComplete="deskripsi"
                        placeholder="Deskripsikan/jelaskan lebih detail"
                        value={data.description}
                        onChange={handleChange}
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <button
                      className="text-center w-[90%] h-9 bg-[#FBB017] rounded-md text-white text-base font-semibold "
                      onClick={handleHire}
                    >
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
