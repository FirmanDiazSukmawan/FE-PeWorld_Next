import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

              <div className="flex flex-row  items-center justify-center px-5">
                <Link href="/login" className="nav-link">
                  <button
                    className="btn "
                    style={{
                      border: "1px solid #5E50A1",
                      color: "#5E50A1",
                      marginLeft: "0.5em",
                    }}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/login" className="nav-link">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "#fff",
                      marginLeft: "0.5em",
                    }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
