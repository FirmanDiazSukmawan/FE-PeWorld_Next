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

        <div className="relative pb-5">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center flex-row w-screen lg:px-[10%] md:px[10%] px-[5%] bg-white ">
            <div className="flex-col w-screen h-[100vh]  mt-[3%]">
              <div className="flex flex-col w-full items-center justify-center lg:-mt-32 md:-mt-24 -mt-16 bg-[#F6F7F8] rounded-lg">
                <div className="flex  lg:w-[150px] md:w-[100px] w-[50px] lg:h-[150px] md:h-[100px] h-[50px] rounded-[50%] my-4 ">
                  <Image
                    src={img}
                    alt="img"
                    className="rounded-[50%] lg:[100%] lg:h-[100%]"
                  />
                </div>
                <div className="flex flex-col lg:w-[50%] md:w-[70%] w-[75%] justify-center items-center">
                  <h1 className="text-[#1F2A36] lg:text-xl sm:text-lg text-sm font-semibold">
                    Louis Tomlinson
                  </h1>
                  <span className="text-[#1F2A36] lg:text-sm md:text-sm text-xs font-normal">
                    Web developer
                  </span>
                  <span className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                    <i className="bi bi-geo-alt"></i> Purwokerto, Jawa Tengah
                  </span>
                  <p className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                    Freelance
                  </p>
                  <p className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                  <button className="text-center w-[30%] h-9 bg-[#5E50A1] rounded-md text-white lg:text-base text-xs md:text-sm font-semibold mt-3">
                    Edit Profile
                  </button>
                  <div className="py-4">
                    <p className="text-sm text-[#9EA0A5] font-normal">
                      <i className="bi bi-envelope pr-2"></i>
                      martabatjaya@gmail.com
                    </p>
                    <p className="text-sm text-[#9EA0A5] font-normal">
                      <i className="bi bi-instagram pr-2"></i>martabat_jaya
                    </p>
                    <p className="text-sm text-[#9EA0A5] font-normal">
                      <i className="bi bi-telephone pr-2"></i>0821-8190-1821
                    </p>
                    <p className="text-sm text-[#9EA0A5] font-normal">
                      <i className="bi bi-linkedin pr-2"></i>Martabat Jaya Abadi
                    </p>
                  </div>
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
