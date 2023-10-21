import Image from "next/image";
import React from "react";
import img from "../../assets/foto2.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import NavbarLogin from "@/component/navbarLogin/navbarLogin";

export default function index() {
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
            <div className="relative w-[100%] flex">
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
              />
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
            <div
              className="card mb-4"
              style={{ width: "100%", justifyContent: "space-between" }}
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
                <div className="col-md-8 flex flex-row">
                  <div className="card-body">
                    <h5 className="card-title text-[#1F2A36] font-semibold">
                      Louis Tomlinson
                    </h5>
                    <p
                      className="card-text card-title font-normal text-base"
                      style={{ color: "#9EA0A5" }}
                    >
                      Web developer
                    </p>

                    <p className="card-text">
                      <i className="bi bi-geo-alt pr-2 text-sm text-[#9EA0A5]"></i>
                      <small
                        className="card-text card-title font-normal text-sm"
                        style={{ color: "#9EA0A5" }}
                      >
                        Lorem ipsum
                      </small>
                    </p>
                    <p className="card-text justify-center">
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                        }}
                      >
                        PHP
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        JavaScript
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        HTML
                      </small>
                    </p>
                  </div>
                  <div className="offset-1 flex justify-center items-center">
                    Button
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row lg:flex-row items-center w-[100%] lg:h-[200px] justify-around">
                <div className="col-md-3">
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
                <div className="col-md-8 flex flex-row justify-between">
                  <div className="card-body">
                    <h5 className="card-title text-[#1F2A36] font-semibold">
                      Harry Styles
                    </h5>
                    <p
                      className="card-text card-title font-normal text-base"
                      style={{ color: "#9EA0A5" }}
                    >
                      Web developer
                    </p>

                    <p className="card-text">
                      <i className="bi bi-geo-alt pr-2 text-sm text-[#9EA0A5]"></i>
                      <small
                        className="card-text card-title font-normal text-sm"
                        style={{ color: "#9EA0A5" }}
                      >
                        Lorem ipsum
                      </small>
                    </p>
                    <p className="card-text justify-center">
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                        }}
                      >
                        PHP
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        JavaScript
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        HTML
                      </small>
                    </p>
                  </div>
                  <div className="offset-1 flex justify-center items-center">
                    Button
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row lg:flex-row items-center w-[100%] lg:h-[200px] justify-around">
                <div className="col-md-3">
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
                <div className="col-md-8 flex flex-row justify-between">
                  <div className="card-body">
                    <h5 className="card-title text-[#1F2A36] font-semibold">
                      Niall Horan
                    </h5>
                    <p
                      className="card-text card-title font-normal text-base"
                      style={{ color: "#9EA0A5" }}
                    >
                      Web developer
                    </p>

                    <p className="card-text">
                      <i className="bi bi-geo-alt pr-2 text-sm text-[#9EA0A5]"></i>
                      <small
                        className="card-text card-title font-normal text-sm"
                        style={{ color: "#9EA0A5" }}
                      >
                        Lorem ipsum
                      </small>
                    </p>
                    <p className="card-text justify-center">
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                        }}
                      >
                        PHP
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        JavaScript
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        HTML
                      </small>
                    </p>
                  </div>
                  <div className="offset-1 flex justify-center items-center">
                    Button
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row lg:flex-row items-center w-[100%] lg:h-[200px] justify-around">
                <div className="col-md-3">
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
                <div className="col-md-8 flex flex-row justify-between">
                  <div className="card-body">
                    <h5 className="card-title text-[#1F2A36] font-semibold">
                      Liam Payne
                    </h5>
                    <p
                      className="card-text card-title font-normal text-base"
                      style={{ color: "#9EA0A5" }}
                    >
                      Web developer
                    </p>

                    <p className="card-text">
                      <i className="bi bi-geo-alt pr-2 text-sm text-[#9EA0A5]"></i>
                      <small
                        className="card-text card-title font-normal text-sm"
                        style={{ color: "#9EA0A5" }}
                      >
                        Lorem ipsum
                      </small>
                    </p>
                    <p className="card-text justify-center">
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                        }}
                      >
                        PHP
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        JavaScript
                      </small>
                      <small
                        style={{
                          backgroundColor: "rgba(251, 176, 23, 0.70)",
                          color: "white",
                          border: "1px solid #FBB017",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: 12,
                          marginLeft: "0.5em",
                        }}
                      >
                        HTML
                      </small>
                    </p>
                  </div>
                  <div className="offset-1 flex justify-center items-center">
                    Button
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
