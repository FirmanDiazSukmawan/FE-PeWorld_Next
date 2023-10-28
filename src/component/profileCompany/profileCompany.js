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
import { useRouter } from "next/router";

export default function ProfileCompany({ recruiters }) {
  const route = useRouter();

  const handleEdit = (recruiter_id) => {
    route.push(`/editRecruiter/${recruiter_id}`);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <NavbarLogin />

        <div className="relative pb-8">
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center flex-row w-screen lg:px-[10%] md:px[10%] px-[5%] bg-white ">
            <div className="flex-col w-screen mt-[3%]">
              {recruiters?.data?.map((item, index) => (
                <div
                  className="flex flex-col w-full items-center justify-center lg:-mt-32 md:-mt-24 -mt-16 bg-[#F6F7F8] rounded-lg"
                  key={index}
                >
                  <div className="flex  lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-[50%] my-4 ">
                    {item?.image ? (
                      <Image
                        src={item?.image}
                        alt="img"
                        className="rounded-[50%] lg:[100%] lg:h-[100%]"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <div> no image</div>
                    )}
                  </div>
                  <div className="flex flex-col lg:w-[50%] md:w-[70%] w-[75%] justify-center items-center">
                    <span className="text-[#1F2A36] lg:text-xl sm:text-lg text-sm font-semibold">
                      {item.nama}
                    </span>
                    <p className="text-[#1F2A36] lg:text-sm md:text-sm text-xs font-normal">
                      {item.jabatan}
                    </p>
                    <span className="text-[#1F2A36] lg:text-sm md:text-sm text-xs font-semibold">
                      {item.perusahaan}
                    </span>
                    <span className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                      {item.bidang}
                    </span>
                    <p className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                      <i className="bi bi-geo-alt"></i> {item.location}
                    </p>

                    <p className="text-[#9EA0A5] lg:text-sm md:text-sm text-xs font-normal">
                      {item.description}
                    </p>
                    <button
                      className="text-center w-[30%] h-9 bg-[#5E50A1] rounded-md text-white lg:text-base text-xs md:text-sm font-semibold mt-3"
                      onClick={() => handleEdit(item.recruiter_id)}
                    >
                      Edit Profile
                    </button>
                    <div className="py-4">
                      <p className="text-sm text-[#9EA0A5] font-normal">
                        <i className="bi bi-envelope pr-2"></i>
                        {item.email}
                      </p>
                      <p className="text-sm text-[#9EA0A5] font-normal">
                        <i className="bi bi-instagram pr-2"></i>
                        {item.instagram}
                      </p>
                      <p className="text-sm text-[#9EA0A5] font-normal">
                        <i className="bi bi-telephone pr-2"></i>
                        {item.phone}
                      </p>
                      <p className="text-sm text-[#9EA0A5] font-normal">
                        <i className="bi bi-linkedin pr-2"></i>
                        {item.linkedin}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
