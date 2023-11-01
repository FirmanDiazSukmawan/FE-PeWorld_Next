import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../assets/chatpp.png";
import image from "../../assets/foto3.png";

import Notifcation from "../notification/notifcation";
import { useRouter } from "next/router";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkers,
  getWorkersSelector,
} from "@/redux/reducer/worker/getWorkerSlice";
import Cookies from "js-cookie";
import {
  getWorkersById,
  getWorkersByIdSelector,
} from "@/redux/reducer/worker/getWorkerByIdSlice";
import {
  getRecruiterById,
  getRecruiterByIdSelector,
} from "@/redux/reducer/recruiter/getRecruitersByIdSlice";

function NavbarLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const worker = useSelector(getWorkersByIdSelector);
  const recruiter = useSelector(getRecruiterByIdSelector);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const users_id = Cookies.get("users_id");
  const token = Cookies.get("token");

  // console.log(recruiter);

  useEffect(() => {
    dispatch(getWorkersById(users_id));
    dispatch(getRecruiterById(users_id));
  }, [dispatch, users_id]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const profileCompany = (recruiter_id) => {
    if (token) {
      router.push(`/profile/${recruiter_id}`);
    } else {
      router.push("login");
    }
  };

  const profile = (worker_id) => {
    if (token) {
      router.push(`/profile/${worker_id}`);
    } else {
      router.push("login");
    }
  };

  const logout = () => {
    Cookies.remove("role");
    Cookies.remove("users_id");
    Cookies.remove("token");
    router.push("/login");
  };

  const chat = () => {
    if (token) {
      router.push("/chat");
    } else {
      router.push("login");
    }
  };

  const role = Cookies.get("role");

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
                <i
                  className="bi bi-envelope"
                  style={{ marginRight: 20 }}
                  onClick={chat}
                ></i>
                {role === "0" ? (
                  <div className="flex items-center gap-4">
                    {recruiter?.data?.map((item, index) => (
                      <Dropdown placement="bottom-start" key={index}>
                        <DropdownTrigger>
                          <div className=" flex lg:w-[36px] md:w-[30px] w-[25px] lg:h-[32px] md:h-[26px] h-[21px] bg-[#C4C4C4] rounded-[50%] items-center justify-center">
                            {item.image && (
                              <Image
                                src={item.image}
                                alt="img"
                                className="w-[100%] h-[100%] rounded-[50%]"
                                width={36}
                                height={36}
                              />
                            )}
                          </div>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                          <DropdownItem
                            key="profile"
                            onClick={() => profileCompany(item.recruiter_id)}
                          >
                            Profile
                          </DropdownItem>

                          <DropdownItem
                            key="logout"
                            color="danger"
                            onClick={logout}
                          >
                            Log Out
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    {worker?.data?.map((item, index) => (
                      <Dropdown placement="bottom-start" key={index}>
                        <DropdownTrigger>
                          <div className=" flex lg:w-[36px] md:w-[30px] w-[25px] lg:h-[32px] md:h-[26px] h-[21px] bg-[#C4C4C4] rounded-[50%] items-center justify-center">
                            {item.image && (
                              <Image
                                src={item.image}
                                alt="img"
                                className="w-[100%] h-[100%] rounded-[50%]"
                                width={36}
                                height={36}
                              />
                            )}
                          </div>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                          <DropdownItem
                            key="profile"
                            onClick={() => profile(item.workers_id)}
                          >
                            Profile
                          </DropdownItem>

                          <DropdownItem
                            key="logout"
                            color="danger"
                            onClick={logout}
                          >
                            Log Out
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarLogin;
