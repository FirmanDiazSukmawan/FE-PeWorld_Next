import React from "react";

export default function Footer() {
  return (
    <footer className="py-2  dark:text-gray-50 bg-[#5E50A1] w-screen">
      <div className="container px-2 space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50 flex flex-col">
        <div className="pb-6 col-span-full md:pb-0 md:col-span-6 flex flex-col ">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center justify-start space-x-3"
            style={{ textDecoration: "none" }}
          >
            <div className="flex items-center justify-center h-12 rounded-full dark:bg-violet-400 font-semibold">
              <i
                className="bi bi-stack px-2"
                style={{ color: "#fff", fontSize: 20 }}
              ></i>
              <p
                style={{
                  color: "#fff",
                  fontSize: 20,
                  display: "block",
                }}
              >
                PeWorld
              </p>
            </div>
          </a>
          <h1 className="text-[#fff] text-base md:w-[100%] lg:w-[25%] text-w-[100%]">
            Kembangkan karier Anda dengan layanan pencarian kerja kami.
          </h1>
        </div>

        <div
          className="grid justify-center pt-6 lg:justify-between py-4"
          style={{ borderTop: "1px solid white" }}
        >
          <div className="flex flex-row justify-between text-sm text-center">
            <span className="text-white text-base ">
              2020 Pewworld. All right reserved
            </span>
            <div>
              <a rel="noopener noreferrer" href="#" className="px-4">
                <span className="text-white text-base ">Telepon</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span className="text-white text-base ">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
