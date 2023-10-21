import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img from "../../assets/chatpp.png";
import Notifcation from "../notification/notifcation";
import { useRouter } from "next/router";

function NavbarLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleProfile = () => {
    // console.log(handleProfile, "console");
    router.push("/Profile");
  };

  return (
    <header id="navbarHome">
      <nav
        className={`navbar navbar-expand-lg bg-white d-flex my-2 ${
          isOpen ? "show" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="container d-flex flex-row ">
            <button
              className="navbar-toggler bg-secondary"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-between ${
                isOpen ? "show" : ""
              }`}
              id="navbarNavAltMarkup"
            >
              <div className="navhome navbar-nav justify-center items-center">
                <Link
                  href="/"
                  className="navhome nav nav-link  d-flex flex-row "
                  aria-current="page"
                >
                  <i
                    className="bi bi-stack px-2"
                    style={{ color: "#5E50A1", fontSize: 20 }}
                  ></i>
                  <p style={{ color: "#5E50A1", fontSize: 20 }}> PeWorld</p>
                </Link>
              </div>

              <div className="flex flex-row  items-center justify-center">
                <i
                  className="bi bi-bell"
                  style={{ marginRight: 20 }}
                  onClick={toggleNotification}
                >
                  {isNotificationVisible && <Notifcation />}
                </i>
                <i className="bi bi-envelope" style={{ marginRight: 20 }}></i>
                <div
                  className=" flex lg:w-[36px] md:w-[30px] w-[25px] lg:h-[32px] md:h-[26px] h-[21px] bg-[#C4C4C4] rounded-[50%] items-center justify-center"
                  onClick={handleProfile}
                >
                  <Image
                    src={img}
                    alt="img"
                    className="w-[100%] h-[100%] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarLogin;
