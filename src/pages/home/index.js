import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../assets/foto2.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkers,
  getWorkersSelector,
} from "@/redux/reducer/worker/getWorkerSlice";
import axios from "axios";
import { url } from "@/redux/baseUrl/url";
import { Button } from "@nextui-org/react";

export async function getServerSideProps(context) {
  try {
    const { query } = context;
    const searchQuery = query.search || "";
    // console.log(query);
    const res = await axios.get(
      `${url}/workers?sort=ASC&search=${searchQuery}`
    );
    const workers = res.data;

    // console.log(workers);

    return {
      props: { searchQuery, workers },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { workers: [] },
    };
  }
}

export default function Index({ workers, searchQuery }) {
  // console.log(searchQuery);
  const [search, setSearch] = useState(searchQuery);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    if (search) {
      const filteredResults = workers.data.filter((item) =>
        item.nama.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(workers.data);
    }
  };
  // console.log(searchResults);

  useEffect(() => {
    // Jalankan pencarian saat komponen dimuat pertama kali
    handleSearch();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <NavbarLogin />
        <div className="flex w-full h-10vh bg-[#5E50A1]">
          <h1 className="text-[#FFF] text-2xl px-20 lg:px-36  ">Top Jobs</h1>
        </div>
        <div className="w-[80vw] h-[8%] mx-auto flex flex-col items-center py-2 bg-[#F6F7F8]">
          <form className="w-full mx-auto flex flex-row items-center bg-white">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-[100%] flex items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch} className="absolute right-3">
                Search
              </Button>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-custom-components"
              >
                <i className="bi bi-filter-square"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Sort By Name</Dropdown.Item>
                <Dropdown.Item as="button">Sort By Skill</Dropdown.Item>
                <Dropdown.Item as="button">Sort By Location</Dropdown.Item>
                <Dropdown.Item as="button">Sort By Type Of Work</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </form>
        </div>
        <div className="flex justify-center items-center py-2">
          <div className="flex flex-col items-center w-[80vw]">
            {searchResults?.map((item, index) => (
              <div
                className="card mb-4"
                style={{ width: "100%", justifyContent: "space-between" }}
                key={index}
              >
                <div className="row items-center w-[100%] lg:h-[200px] justify-around">
                  <div className="col-md-3 items-center justify-center">
                    <Image
                      src={img}
                      className="card-img"
                      alt="..."
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="col-md-8 flex flex-row items-center">
                    <div className="card-body">
                      <h5 className="card-title text-[#1F2A36] font-semibold">
                        {item.nama}
                      </h5>
                      <p
                        className="card-text card-title font-normal text-base"
                        style={{ color: "#9EA0A5" }}
                      >
                        {item.profesi}
                      </p>

                      <p className="card-text">
                        <i className="bi bi-geo-alt pr-2 text-sm text-[#9EA0A5]"></i>
                        <small
                          className="card-text card-title font-normal text-sm"
                          style={{ color: "#9EA0A5" }}
                        >
                          {item.location}
                        </small>
                      </p>

                      <div className="flex flex-row flex-wrap w-[100%]">
                        {item?.skill?.split(",").map((skill, skillIndex) => (
                          <div
                            className="border-[#FBB017] mr-2 lg:w-[10%] md:w-[30%] w-[40%] items-center justify-center text-center flex h-[25px] rounded-md mb-2"
                            style={{
                              backgroundColor: "rgba(251, 176, 23, 0.8)",
                            }}
                            key={skillIndex}
                          >
                            <p className="text-[#fff] text-xs my-auto mx-auto ">
                              {skill}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div
                      className="col-1 flex justify-center items-center bg-slate-300"
                      style={{ width: "50px", height: "50px" }}
                    >
                      Button
                    </div> */}
                    <Button
                      radius="md"
                      className="bg-[#5E50A1] text-white shadow-lg"
                    >
                      Lihat Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
