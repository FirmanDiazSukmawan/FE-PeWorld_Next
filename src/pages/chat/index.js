import React, { useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/bgicon.png";
import chatpp from "../../assets/chatpp.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import Head from "next/head";

export default function Index() {
  const [activeTab, setActiveTab] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>PeWorld</title>
      </Head>
      <div>
        {/* <Navbar /> */}
        <NavbarLogin />

        <div className="relative ">
          <div className="flex justify-center flex-row w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            <div className="flex-col w-[25%] h-[70vh] bg-white mt-[3%] mb-[5%]">
              <div className="flex flex-col w-full items-center h-[100%]">
                <div className="flex  w-[100%] h-[50px] my-4 px-3 border-b-2">
                  <h1 className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                    Chat
                  </h1>
                </div>
                <div className="flex flex-col w-[100%] h-[100%] lg:px-3 md:px-3 px-0">
                  <div className="flex flex-row w-[100%] h-[100%]">
                    <div className=" flex lg:w-[36px] md:w-[30px] w-[25px] lg:h-[32px] md:h-[26px] h-[21px] bg-[#C4C4C4] rounded-[50%] items-center justify-center">
                      <Image
                        src={chatpp}
                        alt="img"
                        className="w-[100%] h-[100%] rounded-[50%] "
                      />
                    </div>
                    <div className="flex flex-col w-[100%] pl-2">
                      <div className="text-[#1F2A36] lg:text-base md:text-sm text-xs font-semibold">
                        Jonas adam
                      </div>
                      <div className="text-[#9B9B9B] lg:text-sm md:text-sm text-xs font-normal">
                        Permisi kak, mau tanya...
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col w-[90%] h-[100%] justify-center items-center">
                  <div className="flex flex-col w-[90%] h-[100%] justify-center items-center">
                    <Image src={img1} alt="img" />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex flex-col w-[75%] h-[70vh] ml-[3%] mt-[3%] bg-white mb-[5%]">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%]  ">
                <div className="flex  w-[100%] h-[50px] my-3 px-3 border-b-2">
                  <div className="flex flex-col w-[100%] h-[100%] px-3 ">
                    <div className="flex flex-row w-[100%] h-[100%] justify-center items-center">
                      <div className=" flex lg:w-[36px] md:w-[30px] w-[25px] lg:h-[32px] md:h-[26px] h-[21px] bg-[#C4C4C4] rounded-[50%] items-center justify-center">
                        <Image
                          src={chatpp}
                          alt="img"
                          className="w-[100%] h-[100%] rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-col w-[100%] pl-2">
                        <div className="text-[#1F2A36] lg:text-base md:text-sm text-xs font-semibold">
                          Jonas adam
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div> tes</div>
              </div>
              <div className="mt-2 w-[90%] mb-4 justify-center items-center mx-auto flex flex-row">
                <input
                  id="domisili"
                  name="domisili"
                  type="text"
                  autoComplete="domisili"
                  placeholder="Masukan Domisili"
                  className="block w-full pl-2 rounded-xl border-1  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button className=" w-6 h-6 bg-[#5E50A1] rounded-[50%] ml-1">
                  <i className="bi bi-send text-white text-9px"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
