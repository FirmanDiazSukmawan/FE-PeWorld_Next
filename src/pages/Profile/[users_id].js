import React, { useEffect, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { differenceInMonths, format } from "date-fns";
import ModalUpdateExperience from "@/component/modalUpdateExperience/ModalUpdateExperience";
import { useDispatch } from "react-redux";
import { deleteExperience } from "@/redux/reducer/experience/deleteExperienceSlice";
import ProfileWorker from "@/component/ProfileWorker/profileWorker";
import Cookies from "js-cookie";
import ProfileCompany from "@/component/profileCompany/profileCompany";
import Head from "next/head";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { users_id } = params;
    // console.log(query);
    const res = await axios.get(`${url}/workers/${users_id}`);
    const workers = res.data;
    const porto = await axios.get(`${url}/portofolio/users/${users_id}`);
    const portofolio = porto.data;
    const exp = await axios.get(`${url}/experience/users/${users_id}`);
    const experience = exp.data;
    const rec = await axios.get(`${url}/recruiters/${users_id}`);
    const recruiters = rec.data;

    // console.log(workers.data);

    return {
      props: { workers, portofolio, experience, recruiters },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { workers: [] },
    };
  }
}

export default function Index({ workers, portofolio, experience, recruiters }) {
  const role = Cookies.get("role");
  return (
    <>
      <Head>
        <title>PeWorld</title>
      </Head>
      <div className="overflow-x-hidden">
        {role === "0" ? (
          <ProfileCompany recruiters={recruiters} />
        ) : (
          <ProfileWorker
            workers={workers}
            portofolio={portofolio}
            experience={experience}
          />
        )}
      </div>
    </>
  );
}
