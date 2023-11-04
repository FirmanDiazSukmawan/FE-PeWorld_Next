import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg from "../../assets/bg1.png";
import Link from "next/link";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { useDispatch } from "react-redux";
import { loginRecruiter, loginWorker } from "@/redux/reducer/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Head from "next/head";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
 

  const handleLoginWorker = async() => {
    try {
    await dispatch(loginWorker({email,password}))
     const token = Cookies.get("token");
    if (token) {
      setTimeout(() => {
        router.push("/")
      }, 3000);
      
    }
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleLoginRecruiter = async() => {
    try {
    await dispatch(loginRecruiter({email,password}))
     const token = Cookies.get("token");
    if (token) {
      setTimeout(() => {
        router.push("/")
      }, 3000);
      
    }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, [router]);


  return (
    <>
    <Head>
          <title>PeWorld</title>
        </Head>
      <main>
      <ToastContainer/>
        <div className="flex bg-[#F6F7F8] ">
          <div className="hidden lg:flex md:hidden  h-[100vh] w-[50vw] items-center justify-center px-5 ">
            <div className="h-[90%] w-[100%] relative ">
              <div className=" bg-[#5E50A1] w-[100%] h-[100%]  absolute opacity-60 " />
              <div className="absolute left-[5%] top-[5%] text-[#FFF]"><p className=""> <i className="bi bi-stack text-base pr-1"></i>PeWorld</p></div>
              <Image src={bg} className="h-[100%] w-[100%] " alt="bg" />
              <div className="absolute top-[40%] left-[13%] text-[#fff] font-bold text-4xl w-[70%]"> Temukan developer berbakat & terbaik di berbagai bidang keahlian</div>
            </div>
          </div>
          <div className="flex w-[100vw] lg:w-[50vw] lg:h-[100vh] md:h-[100vh] md:w[50vw] h-[100vh] justify-center items-center flex-col">
            <div className="sm:col-span-4 w-[50%]">
              <div className="flex flex-col -mt-3">
                <h1 className="md:text-3xl text-[#1F2A36] text-2xl font-semibold">Halo, Pewpeople</h1>
                <p className="md:text-base text-sm pt-4">Ayo segera cari kandidat untuk perusahaan anda</p>
              </div>
              <Tabs
                  defaultActiveKey="Pekerja"
                  id="noanim-tab-example"
                  className="flex flex-row rounded"
                  justify
                >
                  <Tab
                    eventKey="Pekerja"
                    title="Pekerja"
                    className="custom-tab"
                  >
                    <div className="flex flex-col pt-3">
              <label
                htmlFor="email"
                className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
              >
                Email address :
              </label>
              <div className="pb-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="block w-full pl-2 rounded-md border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="password"
                className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
              >
                password :
              </label>
              <div className="flex relative pb-1 ">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  className="block w-full pl-2 rounded-md border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  className="absolute top-0 right-0 m-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                </button>
              </div>
              <div className="text-right lg:text-base md:text-base text-xs py-2"> Lupa Kata sandi</div>
                  <div className="flex flex-col items-center justify-center pt-2">
                      <button className="rounded-md bg-[#FBB017] w-[100%] h-[5vh] hover:bg-blue-200 text-white text-base" onClick={handleLoginWorker}>
                        Masuk
                      </button>
                      <h5 className="font-normal text-base text-[#1F2A36] pt-2">
                        Anda belum punya akun?
                        <Link href="register" className="text-[#FBB017] no-underline pl-1">
                          Daftar Disini
                        </Link>
                      </h5>
                    </div>
              </div>
                    </Tab>
                    <Tab
                    eventKey="Recruiter"
                    title="Recruiter"
                    className="custom-tab"
                  > <div className="flex flex-col pt-3">
                  <label
                    htmlFor="email"
                    className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
                  >
                    Email address :
                  </label>
                  <div className="pb-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                      className="block w-full pl-2 rounded-md border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label
                    htmlFor="password"
                    className="block font-normal text-[#9EA0A5] text-xs leading-6  pt-2"
                  >
                    password :
                  </label>
                  <div className="flex relative pb-1 ">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="password"
                      value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                      className="block w-full pl-2 rounded-md border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      className="absolute top-0 right-0 m-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                    </button>
                  </div>
                  <div className="text-right lg:text-base md:text-base text-xs py-2"> Lupa Kata sandi</div>
                  <div className="flex flex-col items-center justify-center pt-2">
                      <button className="rounded-md bg-[#FBB017] w-[100%] h-[5vh] hover:bg-blue-200 text-white text-base" onClick={handleLoginRecruiter}>
                        Masuk
                      </button>
                      <h5 className="font-normal text-base text-[#1F2A36] pt-2">
                        Anda belum punya akun?
                        <Link href="register" className="text-[#FBB017] no-underline pl-1">
                          Daftar Disini
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
