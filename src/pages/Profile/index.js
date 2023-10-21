import React, { useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const handleHire = () => {
    router.push("/hire");
  };
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="relative">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            <div className="flex-col lg:w-[25%] md:w-[25%] w-[100%] bg-white mb-5 lg:-mt-32 md:-mt-32 -mt-14">
              <div className="flex flex-col w-full items-center">
                <div className="flex  lg:w-[150px] md:w-[100px] w-[50px] lg:h-[150px] md:h-[100px] h-[50px] rounded-[50%] my-4">
                  <Image
                    src={img}
                    alt="img"
                    className="rounded-[50%] lg:[100%] lg:h-[100%]"
                  />
                </div>
                <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[100%] flex-wrap">
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
                  <button
                    className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold my-3"
                    onClick={handleHire}
                  >
                    Hire
                  </button>
                  <h1 className="text-[#1F2A36] lg:text-2xl md:text-lg text-base font-semibold ">
                    Skill :
                  </h1>
                  <div className="flex flex-row flex-wrap w-[100%]">
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Python
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Laravel
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Golang
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        JavaScript
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        PHP
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        HTML
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        C++
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Kotlin
                      </p>
                    </div>
                    <div
                      className="border-[#FBB017] mr-2 lg:w-[30%] md:w-[30%] w-[45%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                      style={{
                        backgroundColor: "rgba(251, 176, 23, 0.8)",
                      }}
                    >
                      <p className="text-[#fff] text-xs my-auto mx-auto ">
                        Swift
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap w-[100%]">
                    <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                      <i className="bi bi-envelope pr-2"></i>
                      Louistommo@gmail.com
                    </p>
                    <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                      <i className="bi bi-instagram pr-2"></i>@Louist91
                    </p>
                    <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                      <i className="bi bi-github pr-2"></i>@Louistommo
                    </p>
                    <p className="lg:text-sm md:text-sm text-xs text-[#9EA0A5]">
                      <i className="bi bi-gitlab pr-2"></i>@Louistommo91
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                    <div className="flex flex-row flex-wrap lg:mx-4 md:mx-4 mx-0">
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Remainder App
                        </p>
                      </div>
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Social Media APP
                        </p>
                      </div>
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Project management web
                        </p>
                      </div>
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Remainder APP
                        </p>
                      </div>
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Social Media APP
                        </p>
                      </div>
                      <div className="card lg:w-[15vw] md:w-[15vw] w-[30] mx-4 mt-3 bg-[#F6F7F8]">
                        <Image
                          src={img}
                          className="card-img-top"
                          alt="..."
                          style={{ widh: "100%" }}
                        />
                        <p className="card-title lg:text-base sm:text-sm text-xs text-[#1F2A36] font-normal text-center">
                          Project management web
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="pengalamanKerja"
                    title="Pengalaman Kerja"
                    className="custom-tab"
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-row w-full pt-3 ">
                        <div className="px-3">
                          <Image
                            src={img1}
                            alt="img"
                            className="lg:w-[5vw] md:w-[20vw] w-[30vw]"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#1F2A36] lg:text-xl md:text-base text-sm font-semibold">
                            Engineer
                          </span>
                          <span className="text-[#46505C] lg:text-lg md:text-base text-xs font-semibold">
                            Tokopedia
                          </span>
                          <div className="flex flex-row">
                            <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-normal pr-2">
                              July 2019 - January 2020
                            </p>
                            <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-normal">
                              6month
                            </p>
                          </div>
                          <span className="text-[#1F2A36] lg:text-sm text-xs font-normal w-[95%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row w-full pt-3  ">
                        <div className="px-3">
                          <Image
                            src={img1}
                            alt="img"
                            className="lg:w-[5vw] md:w-[20vw] w-[30vw]"
                          />
                        </div>
                        <div className="flex flex-col pb-4">
                          <span className="text-[#1F2A36] lg:text-xl md:text-base text-sm font-semibold">
                            Web Developer
                          </span>
                          <span className="text-[#46505C] lg:text-lg md:text-base text-xs font-semibold">
                            Tokopedia
                          </span>
                          <div className="flex flex-row">
                            <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-normal pr-2">
                              July 2019 - January 2020
                            </p>
                            <p className="text-[#9EA0A5] lg:text-base md:text-sm text-xs font-normal">
                              6month
                            </p>
                          </div>
                          <span className="text-[#1F2A36] lg:text-sm text-xs font-normal w-[95%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </span>
                        </div>
                      </div>
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
