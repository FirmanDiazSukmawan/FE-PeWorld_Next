import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/component/Navbar/Navbar";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/foto2.png";
import bg3 from "../assets/foto3.png";
import CardCarousel from "@/component/cardCarousel/cardCarousel";
import Footer from "@/component/Footer/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { useEffect, useState } from "react";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import Cookies from "js-cookie";
const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  try {
    const res = await axios.get(`${url}/workers`);
    const workers = res.data;

    // console.log(workers);

    return {
      props: { workers },
      revalidate: 30,
    };
  } catch (error) {
    console.log(error);
    return {
      props: { workers: [] },
    };
  }
}

export default function Home(workers) {
  // console.log(workers.workers.data);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState("");
  const route = useRouter();

  useEffect(() => {
    const getToken = Cookies.get("token");
    if (getToken) {
      setLogin(getToken);
    }
  }, []);

  const handleClick = () => {
    if (login) {
      route.push("home");
    } else {
      route.push("login");
    }
  };

  return (
    <>
      <Head>
        <title>PeWorld</title>
      </Head>

      <div className="w-screen h-screen overflow-x-hidden">
        {!login ? <Navbar /> : <NavbarLogin />}
        <main className="flex w-full h-[50vh] lg:h-[75vh] md:[75vh] justify-center lg:flex-row md:flex-row flex-col items-center">
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 lg:h-screen md:h-[100%] h-[50%] md:  justify-center items-center px-4">
            <div className="flex flex-col lg:w-[60%] w-[100%]">
              <h1 className="lg:text-4xl sm:text-xl text-base font-semibold">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="lg:text-lg sm:text-base text-xs">
                Cari talenta terbaik untuk perusahaan anda agar berkembang
                bersama kami
              </p>
              <buttons
                className="bg-[#5E50A1] text-[#FFF] lg:text-lg text-xs lg:w-[45%] w-[100%] h-[5vh] rounded"
                onClick={handleClick}
              >
                Mulai Dari Sekarang
              </buttons>
            </div>
          </div>
          <div className="flex w-[80%] lg:w-1/2 md:w-1/2 lg:h-screen md:h-[100%] h-[50%]     lg:px-5  px-1 justify-center md:items-start lg:items-center ">
            <Image
              src={bg1}
              className="w-[100%] h-[100%] lg:w-[85%] md:w-[90%] md:h-[80%] lg:h-[65%] rounded-lg"
              alt="image"
            />
          </div>
        </main>
        <main className="flex w-full h-[50vh] lg:h-[75vh] md:[75vh] justify-center lg:flex-row md:flex-row flex-col items-center lg:pt-0 md:pt-0 pt-4">
          <div className="flex w-[80%] lg:w-1/2 md:w-1/2 lg:h-screen md:h-[100%] h-[50%] lg:px-5  px-1 justify-center items-center ">
            <Image
              src={bg2}
              className="w-[100%] h-[100%] lg:w-[80%] md:w-[90%] md:h-[80%] lg:h-[60%] rounded-lg"
              alt="image"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 lg:h-screen md:h-[100%] h-[50%] md:  justify-center items-center px-4">
            <div className="flex flex-col lg:w-[60%] w-[100%]">
              <h1 className="lg:text-4xl sm:text-xl text-base font-semibold">
                Kenapa harus mencari tallent di peworld
              </h1>
              <div className="">
                <div className="lg:text-lg  sm:text-base text-xs py-1">
                  <i className="bi bi-check-circle-fill text-[#5E50A1] pr-1 "></i>
                  Kami adalah sumber terpercaya
                </div>
                <div className="lg:text-lg sm:text-base text-xs py-1">
                  <i className="bi bi-check-circle-fill text-[#5E50A1] pr-1"></i>
                  Dengan tingkat akurasi dan keberhasilan yang tinggi dalam
                  pencarian talent
                </div>
                <div className="lg:text-lg sm:text-base text-xs py-1">
                  <i className="bi bi-check-circle-fill text-[#5E50A1] pr-1"></i>
                  kami menciptakan kemitraan yang langgeng untuk pertumbuhan
                  bisnis Anda.
                </div>
                <div className="lg:text-lg sm:text-base text-xs py-1">
                  <i className="bi bi-check-circle-fill text-[#5E50A1] pr-1"></i>
                  Kami memiliki jaringan luas dan akses ke kandidat berkualitas
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="flex w-full h-screen lg:h-[75vh] md:[75vh] lg:flex-row md:flex-row flex-col items-center lg:pt-0 md:pt-0 pt-4">
          <div className="flex flex-col  w-full md:w-1/2 lg:w-1/2 lg:h-screen md:h-[100%] h-[40%] md:justify-center items-center px-4">
            <div className="flex flex-col lg:w-[60%] w-[100%]">
              <h1 className="lg:text-4xl sm:text-xl text-base font-semibold">
                Skill Tallent
              </h1>
              <h1 className="lg:text-xl sm:text-lg text-base font-normal">
                Kami memiliki kandidat yang memiliki skill berikut
              </h1>
              <div className="flex flex-row ">
                <div>
                  <div className="lg:text-lg sm:text-base text-xs py-1 text-[#46505C]">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    Java
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    Kotlin
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    PHP
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    JavaScript
                  </div>
                </div>
                <div className="pl-20">
                  <div className="lg:text-lg sm:text-base text-xs py-1 text-[#46505C]">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    Java
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    Kotlin
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    PHP
                  </div>
                  <div className="lg:text-lg sm:text-base text-xs py-1">
                    <i className="bi bi-check-circle-fill text-[#FBB017] pr-1 font-normal "></i>
                    JavaScript
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[80%] lg:w-1/2 md:w-1/2 lg:h-screen md:h-[100%] h-[60%] lg:px-5  px-1 justify-center lg:items-center md:items-center ">
            <Image
              src={bg3}
              className="w-[100%] h-[60%] lg:w-[80%] md:w-[90%] md:h-[40%] lg:h-[60%] rounded-lg"
              alt="image"
            />
          </div>
        </main>
        <div className="hidden lg:flex md:flex flex-col w-[100%] items-center ">
          <h1> Their opinion about peworld</h1>
          {/* {loading
            ? "loading.."
            : workers?.workers?.data.map((item, index) => ( */}
          <div
          // onClick={handleProfile}
          >
            {loading ? "loading..." : <CardCarousel workers={workers} />}
          </div>
          {/* ))} */}
        </div>

        <div className="flex flex-row justify-around items-center w-screen h-[20vh] my-5">
          <div className="flex flex-row justify-between items-center w-[80%] h-[100%] bg-[#5E50A1] rounded-3xl px-14">
            <div className="text-[#fff] font-sans lg:text-2xl sm-text-xl text-lg lg:w-[50%] sm:w-[50%] w-[60%] ">
              Ayo mulai dari sekarang
            </div>
            <button className="w-[40%] sm:w-[50%] lg:w-[20%] h-[40%] bg-white text-[#796EAF] lg:text-base sm:text-sm text-xs rounded-xl">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
