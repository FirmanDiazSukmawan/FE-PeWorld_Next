import Image from "next/image";
import React, { useState } from "react";
import bg from "../../assets/bg1.png";
import Link from "next/link";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createWorker } from "@/redux/reducer/worker/createWorkerSlice";
import { createRecruiter } from "@/redux/reducer/recruiter/createRecruiterSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

export async function getServerSideProps() {
  const initialData = {
    nama: "",
    email: "",
    perusahaan: "",
    jabatan: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  return {
    props: {
      initialData,
    },
  };
}

export default function Index(initialData) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const route = useRouter();

  const handleChange = (e) => {
    e.preventDefault(e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(data);

  const handleRegWorker = async (e) => {
    e.preventDefault(e);
    try {
      const response = await dispatch(createWorker({ data }));
      // console.log(response);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegRecruiter = async (e) => {
    e.preventDefault(e);
    try {
      const response = await dispatch(createRecruiter({ data }));
      // console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main>
        <Head>
          <title>PeWorld</title>
        </Head>
        <div className="flex bg-[#F6F7F8]">
          <ToastContainer />
          <div className="hidden lg:flex md:hidden  h-[100vh] w-[50vw] items-center justify-center px-5 ">
            <div className="h-[90%] w-[100%] relative ">
              <div className=" bg-[#5E50A1] w-[100%] h-[100%]  absolute opacity-60 " />
              <div className="absolute left-[5%] top-[5%] text-[#FFF]">
                <p className="">
                  <i className="bi bi-stack text-base pr-1"></i>PeWorld
                </p>
              </div>
              <Image src={bg} className="h-[100%] w-[100%]" alt="bg" />
              <div className="absolute top-[40%] left-[13%] text-[#fff] font-bold text-4xl w-[70%]">
                {" "}
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </div>
            </div>
          </div>
          <div className="flex w-[100vw] lg:w-[50vw] lg:h-[100vh] md:h-[100vh] md:w[50vw] h-[100vh] justify-center items-center flex-col pt-15">
            <div className="sm:col-span-4 lg:w-[50%] md:w-[80%] w-[90%]">
              <div className="flex flex-col ">
                <h1 className="md:text-3xl text-[#1F2A36] text-2xl font-semibold">
                  Halo, Pewpeople
                </h1>
                <p className="md:text-base text-sm pt-1">
                  Ayo segera cari Talent terbaik untuk kebutuhan perusahaan anda
                </p>
              </div>
              <Tabs
                defaultActiveKey="Pekerja"
                id="noanim-tab-example"
                className="flex flex-row rounded"
                justify
              >
                <Tab eventKey="Pekerja" title="Pekerja" className="custom-tab">
                  <div className="flex flex-col pt-3  ">
                    <label
                      htmlFor="Name"
                      className="block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Name :
                    </label>
                    <div className="pb-1">
                      <input
                        name="nama"
                        type="text"
                        autoComplete="Name"
                        placeholder="Your Name"
                        value={data.nama}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
                    >
                      Email address :
                    </label>
                    <div className="pb-1">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                        autoComplete="email"
                        value={data.email}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="NoHandphone"
                      className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
                    >
                      NoHandphone:
                    </label>
                    <div className="pb-1">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Your Phone Number"
                        autoComplete="NoHandphone"
                        value={data.phone}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="password"
                      className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
                    >
                      password :
                    </label>
                    <div className="flex relative pb-1">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="password"
                        placeholder="Your Password"
                        value={data.password}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* <button
                    className="absolute top-0 right-0 m-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button> */}
                    </div>
                    <label
                      htmlFor="password"
                      className="block font-normal text-[#9EA0A5] text-xs leading-6  py-2"
                    >
                      Confirm Password :
                    </label>
                    <div className="flex relative pb-1">
                      <input
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        autoComplete="password"
                        placeholder="Your Confirm Password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* <button
                    className="absolute top-0 right-0 m-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button> */}
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                      <button
                        class="rounded-md bg-[#FBB017] w-[100%] h-[5vh] hover:bg-blue-200 text-white text-base"
                        onClick={handleRegWorker}
                      >
                        Register
                      </button>
                      <h5 className="font-normal text-base text-[#1F2A36] pt-2">
                        Anda sudah punya akun?
                        <Link
                          href="login"
                          className="text-[#FBB017] no-underline pl-1"
                        >
                          Masuk Disini
                        </Link>
                      </h5>
                    </div>
                  </div>
                </Tab>
                <Tab
                  eventKey="Recruiter"
                  title="Recruiter"
                  className="custom-tab"
                >
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Name"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Name :
                    </label>
                    <div className="pb-1">
                      <input
                        name="nama"
                        type="text"
                        autoComplete="Name"
                        placeholder="Your Name"
                        value={data.nama}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[5vh]"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Email address :
                    </label>
                    <div className="pb-1">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                        autoComplete="email"
                        value={data.email}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="perusahaan"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Perusahaan:
                    </label>
                    <div className="pb-1">
                      <input
                        id="perusahaan"
                        name="perusahaan"
                        type="text"
                        placeholder="Input nama perusahaan"
                        autoComplete="perusahaan"
                        value={data.perusahaan}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="jabatan"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Jabatan:
                    </label>
                    <div className="pb-1">
                      <input
                        id="jabatan"
                        name="jabatan"
                        type="text"
                        placeholder="Posisi di perusahaan anda"
                        autoComplete="jabatan"
                        value={data.jabatan}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="phone"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      No Handphone:
                    </label>
                    <div className="pb-1">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Your Phone Number"
                        autoComplete="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="password"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      password :
                    </label>
                    <div className="pb-1">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="password"
                        placeholder="Your Password"
                        value={data.password}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* <button
                    className="absolute top-0 right-0 m-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button> */}
                    </div>
                    <label
                      htmlFor="password"
                      className="lg:block md:block block font-normal text-[#9EA0A5] text-xs leading-6  "
                    >
                      Confirm Password :
                    </label>
                    <div className="pb-1">
                      <input
                        id="password"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        autoComplete="password"
                        placeholder="Your Confirm Password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* <button
                    className="absolute top-0 right-0 m-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button> */}
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                      <button
                        className="rounded-md bg-[#FBB017] w-[100%] h-[5vh] hover:bg-blue-200 text-white text-base"
                        onClick={handleRegRecruiter}
                      >
                        Register
                      </button>
                      <h5 className="font-normal text-base text-[#1F2A36] pt-2">
                        Anda sudah punya akun?
                        <Link
                          href="login"
                          className="text-[#FBB017] no-underline pl-1"
                        >
                          Masuk Disini
                        </Link>
                      </h5>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
