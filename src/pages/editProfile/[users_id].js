import React, { useEffect, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { url } from "@/redux/baseUrl/url";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateWorkers } from "@/redux/reducer/worker/editWorkerSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { updateSkillsWorkers } from "@/redux/reducer/worker/updateWorkerSkillSlice";
import { createExperience } from "@/redux/reducer/experience/createExperienceSlice";
import { createPortofolio } from "@/redux/reducer/portofolio/createPortofolioSlice";
import Head from "next/head";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { users_id } = params;
    // console.log(query);
    const res = await axios.get(`${url}/workers/${users_id}`);
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
  // console.log(workers);
  const [image, setImage] = useState("");
  const [imagePortofolio, setImagePortofolio] = useState("");
  const [showImage, setShowImage] = useState("");
  const [showImagePortofolio, setshowImagePortofolio] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const worker = workers?.data?.[0];
  const router = useRouter();
  const [skills, setSkills] = useState("");
  const { users_id } = router.query;
  // console.log(users_id);

  const [data, setData] = useState({
    nama: "",
    image: image,
    profesi: "",
    location: "",
    company: "",
    instagram: "",
    github: "",
    gitlab: "",
    description: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    datein: "",
    dateout: "",
    description: "",
    profesi: "",
    workers_id: users_id,
  });

  // console.log(experience);

  const [portofolio, setPortofolio] = useState({
    namaAplikasi: "",
    linkRepo: "",
    typePortofolio: "",
    image: imagePortofolio,
    workers_id: "",
  });

  useEffect(() => {
    // setLoading(workers.length === 0);
    setData({
      nama: worker?.nama,
      image: worker?.image,
      profesi: worker?.profesi,
      location: worker?.location,
      company: worker?.company,
      instagram: worker?.instagram,
      github: worker?.github,
      gitlab: worker?.gitlab,
      description: worker?.description,
    });
    setSkills(worker?.skills);
  }, [worker, workers.length]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleExp = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handlePortofolio = (e) => {
    setPortofolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };
  const handleImagePortofolio = (e) => {
    e.preventDefault();
    const uploader = e.target.files[0];
    if (uploader instanceof Blob || uploader instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        setshowImagePortofolio(reader.result);
      };
      reader.readAsDataURL(uploader);
      setImagePortofolio(uploader);
    } else {
      console.error("Invalid file selected.");
    }
  };

  const handleCreatePortofolio = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        createPortofolio({ users_id, portofolio, imagePortofolio })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = (e) => {
    e.preventDefault();
    const uploader = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setShowImage(reader.result);
    };
    reader.readAsDataURL(uploader);
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (workers_id) => {
    setLoading(true);
    try {
      await dispatch(
        updateWorkers({
          users_id: workers_id,
          data,
          image,
        })
      );
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSkills = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateSkillsWorkers({ users_id, skills }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = async (workers_id) => {
    router.push(`/profile/${workers_id}`);
  };

  const handleExperience = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        createExperience({
          experience,
          users_id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(workers);

  return (
    <>
      <Head>
        <title>PeWorld</title>
      </Head>
      <ToastContainer />
      <div className="overflow-x-hidden">
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
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
                      <div className="flex  lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-[50%] my-4 bg-gray-500 relative">
                        <input
                          type="file"
                          name="files"
                          id="files"
                          onChange={handleImage}
                          className="py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400  w-[100%] h-[100%] absolute top-0 opacity-0"
                        />
                        {showImage ? (
                          <Image
                            src={showImage}
                            alt="img"
                            className="rounded-[50%] lg:[100%] lg:h-[100%]"
                            width={150}
                            height={150}
                          />
                        ) : worker.image ? (
                          <Image
                            src={worker?.image}
                            alt="img"
                            className="rounded-[50%] lg:[100%] lg:h-[100%]"
                            width={150}
                            height={150}
                          />
                        ) : (
                          <div> No Image</div>
                        )}
                      </div>
                      <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[100%] flex-wrap">
                        <span className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                          {worker?.nama}
                        </span>
                        <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                          {worker?.profesi === null
                            ? "Update your jobdesk"
                            : worker?.profesi}
                        </span>
                        <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal py-2">
                          <i className="bi bi-geo-alt lg:text-sm text-xs font-normal"></i>{" "}
                          {worker?.location === null
                            ? "update your location"
                            : worker?.location}
                        </span>
                        <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                          {worker?.company === null
                            ? "update your company"
                            : worker?.company}
                        </p>

                        <button
                          className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold my-3"
                          onClick={() => handleUpdate(worker?.workers_id)}
                        >
                          Simpan
                        </button>
                        <button
                          className="text-center w-[100%] h-9 bg-[#F6F7F8] rounded-md text-[#5E50A1] text-base font-semibold my-2 border-2"
                          onClick={() => handleProfile(worker?.workers_id)}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col lg:w-[75%] md:w-[75%] w-[100%] h-[50%] lg:ml-[3%] md:ml-[3%] lg:-mt-32 md:-mt-32 -mt-14  mb-5  ">
                  <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white">
                    <div className="flex flex-col">
                      <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                        Data Diri
                      </h1>
                      <form className="flex flex-col items-center ">
                        <div className="mt-2 w-[90%] mb-4">
                          <input
                            id="Name"
                            name="nama"
                            type="text"
                            onChange={handleChange}
                            value={data?.nama}
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
                            name="profesi"
                            type="text"
                            onChange={handleChange}
                            value={data?.profesi}
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
                            name="location"
                            type="text"
                            onChange={handleChange}
                            value={data?.location}
                            autoComplete="domisili"
                            placeholder="Masukan Domisili"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <label
                          htmlFor="jobDesk"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Type Pekerjaan
                        </label>
                        <div className="mt-2 w-[90%] mb-4">
                          <input
                            id="jobDesk"
                            name="company"
                            onChange={handleChange}
                            value={data?.company}
                            type="text"
                            autoComplete="jobDesk"
                            placeholder="Masukan Job Desk anda"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-row w-full flex-wrap">
                          <div className="flex flex-col w-[45%] ml-[5%]">
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
                                onChange={handleChange}
                                value={data?.instagram}
                                autoComplete="instagram"
                                placeholder="Masukan Nama instagram"
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-[45%] ml-[5%]">
                            <label
                              htmlFor="github"
                              className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                            >
                              Github
                            </label>
                            <div className="mt-2 w-[90%] mb-4">
                              <input
                                id="github"
                                name="github"
                                type="text"
                                onChange={handleChange}
                                value={data?.github}
                                autoComplete="github"
                                placeholder="Masukan Nama Github"
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-[45%] ml-[5%]">
                            <label
                              htmlFor="gitlab"
                              className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                            >
                              GitLab
                            </label>
                            <div className="mt-2 w-[90%] mb-4">
                              <input
                                id="gitlab"
                                name="gitlab"
                                type="text"
                                onChange={handleChange}
                                value={data?.gitlab}
                                autoComplete="gitlab"
                                placeholder="Masukan Nama Gitlab"
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
                            name="description"
                            type="text"
                            autoComplete="deskripsi"
                            onChange={handleChange}
                            value={data?.description}
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
                            id="skills"
                            name="skills"
                            type="text"
                            autoComplete="skills"
                            placeholder="Input Your Skill"
                            onChange={(e) => setSkills(e.target.value)}
                            value={skills}
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                          <button
                            className="text-center w-[20%] md:-[10%] lg-[10%]  h-9 bg-[#FBB017] rounded-md text-white lg:text-base md:text-sm text-xs font-semibold ml-3"
                            onClick={handleUpdateSkills}
                          >
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
                            id="profesi"
                            name="profesi"
                            type="text"
                            autoComplete="profesi"
                            placeholder="Masukan profesi"
                            onChange={handleExp}
                            value={experience.profesi}
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-row w-full flex-wrap">
                          <div className="flex flex-col w-[45%] ml-[5%]">
                            <label
                              htmlFor="namaPerusahaan"
                              className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                            >
                              Nama Perusahaan
                            </label>
                            <div className="mt-2 w-[90%] mb-4">
                              <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="company"
                                placeholder="PT Harus Bisa"
                                onChange={handleExp}
                                value={experience.company}
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-[45%] ml-[5%]">
                            <label
                              htmlFor="datein"
                              className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                            >
                              Tahun Masuk
                            </label>
                            <div className="mt-2 w-[90%] mb-4">
                              <input
                                id="datein"
                                name="datein"
                                type="date"
                                autoComplete="datein"
                                placeholder="25-06-2021"
                                onChange={handleExp}
                                value={experience.datein}
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col w-[45%] ml-[5%]">
                            <label
                              htmlFor="dateout"
                              className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                            >
                              Tahun Keluar
                            </label>
                            <div className="mt-2 w-[90%] mb-4">
                              <input
                                id="dateout"
                                name="dateout"
                                type="date"
                                autoComplete="dateout"
                                placeholder="15-08-2023"
                                onChange={handleExp}
                                value={experience.dateout}
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                        <label
                          htmlFor="description"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Deskripsi Singkat
                        </label>
                        <div className="mt-2 w-[90%] mb-4">
                          <textarea
                            id="description"
                            name="description"
                            type="text"
                            autoComplete="description"
                            placeholder="descriptionkan Pekerjaan Anda"
                            onChange={handleExp}
                            value={experience.description}
                            className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <button
                          className="text-center w-[90%] h-9 border-2 border-[#FBB017] rounded-md text-[#FBB017] text-base font-semibold mt-3 mb-4"
                          onClick={handleExperience}
                        >
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
                            onChange={handlePortofolio}
                            value={portofolio.namaAplikasi}
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
                            name="linkRepo"
                            type="text"
                            autoComplete="repository"
                            onChange={handlePortofolio}
                            value={portofolio.linkRepo}
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
                                id="typePortofolio-web"
                                type="radio"
                                name="typePortofolio"
                                value="Aplikasi Web"
                                onChange={handlePortofolio}
                                checked={
                                  portofolio.typePortofolio === "Aplikasi Web"
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="typePortofolio-2"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5"
                              >
                                Aplikasi Web
                              </label>

                              <input
                                id="typePortofolio-mobile"
                                type="radio"
                                name="typePortofolio"
                                value="Aplikasi Mobile"
                                onChange={handlePortofolio}
                                checked={
                                  portofolio.typePortofolio ===
                                  "Aplikasi Mobile"
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="typePortofolio-2"
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
                                  Drag & Drop untuk Upload Gambar Aplikasi
                                  Mobile
                                </h1>
                                <span className="text-[#1F2A36] text-xs">
                                  Atau cari untuk mengupload file dari
                                  direktorimu.
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
                                className="py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400  w-[100%] h-[100%] absolute top-0 opacity-0 z-10"
                                onChange={handleImagePortofolio}
                              />
                              {showImagePortofolio && (
                                <div className="w-[100%] h-[100%] absolute bg-zinc-100">
                                  <Image
                                    src={showImagePortofolio}
                                    alt="img"
                                    objectPosition="center"
                                    className="w-[100%] h-[100%]"
                                    fill={true}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </fieldset>
                        <button
                          className="text-center w-[90%] h-9 border-2 border-[#FBB017] rounded-md text-[#FBB017] text-base font-semibold mt-3 mb-4"
                          onClick={handleCreatePortofolio}
                        >
                          Tambah Portofolio
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
