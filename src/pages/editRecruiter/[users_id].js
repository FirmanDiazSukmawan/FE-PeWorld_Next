import React, { useEffect, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import img from "../../assets/bg1.png";
import Image from "next/image";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import img1 from "../../assets/foto4.png";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { updateRecruiter } from "@/redux/reducer/recruiter/updateRecruiterSlice";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { users_id } = params;

    const res = await axios.get(`${url}/recruiters/${users_id}`);
    const recruiters = res.data;
    // console.log(recruiters);

    return {
      props: { recruiters },
    };
  } catch (err) {
    return {
      props: { recruiters: [] },
    };
  }
}

export default function Index({ recruiters }) {
  // console.log(recruiters);
  const dispatch = useDispatch();
  const router = useRouter();
  const { users_id } = router.query;
  // console.log(users_id);
  const recruiter = recruiters.data[0];
  // console.log(recruiter);
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const [data, setData] = useState({
    nama: "",
    image: image,
    bidang: "",
    location: "",
    description: "",
    perusahaan: "",
    jabatan: "",
    instagram: "",
    linkedin: "",
  });

  useEffect(() => {
    setData({
      nama: recruiter.nama,
      image: recruiter.image,
      bidang: recruiter.bidang,
      location: recruiter.location,
      description: recruiter.description,
      perusahaan: recruiter.perusahaan,
      jabatan: recruiter.jabatan,
      instagram: recruiter.instagram,
      linkedin: recruiter.instagram,
    });
  }, [recruiter]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    const uploader = e.target.files[0];
    if (uploader instanceof Blob || uploader instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      };
      reader.readAsDataURL(uploader);
      setImage(uploader);
    } else {
      console.error("Invalid file selected.");
    }
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateRecruiter({ users_id, data, image }));
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
        <div className="relative h-screen">
          {/* <ToastContainer /> */}
          <div className="flex w-full lg:h-[25vh] md:h-[25vh] h-[15vh] bg-[#5E50A1] "></div>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col w-screen lg:px-[10%] md:px[10%] px-[5%] bg-[#F6F7F8]">
            {recruiters?.data?.map((recruiter, index) => (
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
                    ) : recruiter?.image ? (
                      <Image
                        src={recruiter?.image}
                        alt="img"
                        className="rounded-[50%] lg:[100%] lg:h-[100%]"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <div>No Image</div>
                    )}
                  </div>
                  <div className="flex flex-col lg:w-[90%] md:w-[90%] w-[100%] flex-wrap">
                    <span className="text-[#1F2A36] lg:text-xl sm:text-base text-sm font-semibold">
                      {recruiter?.nama}
                    </span>

                    <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                      {recruiter?.jabatan}
                    </span>

                    <span className="text-[#1F2A36] lg:text-sm text-xs font-normal">
                      {recruiter?.perusahaan}
                    </span>
                    <span className="text-[#9EA0A5] lg:text-sm text-xs font-normal py-2">
                      <i className="bi bi-geo-alt lg:text-sm text-xs font-normal"></i>{" "}
                      {recruiter?.location}
                    </span>
                    <p className="text-[#9EA0A5] lg:text-sm text-xs font-normal">
                      {recruiter?.bidang}
                    </p>

                    <button
                      className="text-center w-[100%] h-9 bg-[#5E50A1] rounded-md text-white text-base font-semibold my-3"
                      onClick={handleUpdate}
                    >
                      Simpan
                    </button>
                    <button className="text-center w-[100%] h-9 bg-[#F6F7F8] rounded-md text-[#5E50A1] text-base font-semibold my-2 border-2">
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col lg:w-[75%] md:w-[75%] w-[100%] h-[50%] lg:ml-[3%] md:ml-[3%] ml-[0] lg:-mt-32 md:-mt-32 -mt-14  mb-5">
              <div className=" border-gray-200 dark:border-gray-700 w-[100%] h-[100%] bg-white">
                <div className="flex flex-col">
                  <h1 className="text-[#1F2A36] text-xl font-semibold font-sans pl-[5%] pt-[3%]">
                    Data Diri
                  </h1>
                  <form className="flex flex-col items-center ">
                    <label
                      htmlFor="nama"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="nama"
                        name="nama"
                        type="text"
                        autoComplete="nama"
                        placeholder="Masukan Nama"
                        onChange={handleChange}
                        value={data.nama}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="bidang"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Bidang
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Name"
                        name="bidang"
                        type="text"
                        autoComplete="bidang"
                        onChange={handleChange}
                        value={data.bidang}
                        placeholder="Masukan Bidang Perusahaan ex Financial"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="Location"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Location
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Location"
                        name="location"
                        type="text"
                        autoComplete="location"
                        placeholder="Masukan Lokasi"
                        onChange={handleChange}
                        value={data.location}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <label
                      htmlFor="Perusahaan"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Nama Perusahaan
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Perusahaan"
                        name="perusahaan"
                        type="text"
                        autoComplete="Perusahaan"
                        placeholder="Masukan Nama Perusahaan"
                        onChange={handleChange}
                        value={data.perusahaan}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <label
                      htmlFor="Jabatan"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Jabatan
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <input
                        id="Jabatan"
                        name="jabatan"
                        type="text"
                        autoComplete="jabatan"
                        placeholder="Masukan Nama Jabatan"
                        onChange={handleChange}
                        value={data.jabatan}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="flex flex-row w-[90%] justify-between">
                      <div className="mt-2 w-[45%] mb-4">
                        <label
                          htmlFor="Instagram"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          Instagram
                        </label>
                        <input
                          id="Instagram"
                          name="instagram"
                          type="text"
                          autoComplete="Instagram"
                          placeholder="Masukan nama Instagram"
                          onChange={handleChange}
                          value={data.instagram}
                          className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="mt-2 w-[45%] mb-4">
                        <label
                          htmlFor="linkedin"
                          className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                        >
                          LinkedIn
                        </label>
                        <input
                          id="linkedin"
                          name="linkedin"
                          type="text"
                          autoComplete="linkedin"
                          onChange={handleChange}
                          value={data.linkedin}
                          placeholder="Masukan nama LinkedIn"
                          className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <label
                      htmlFor="Description"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Description Singkat
                    </label>
                    <div className="mt-2 w-[90%] mb-4">
                      <textarea
                        id="Description"
                        name="description"
                        type="text"
                        autoComplete="Description"
                        onChange={handleChange}
                        value={data.description}
                        placeholder="Tuliskan Description Singkat"
                        className="block w-full h-[144px] pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
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
