import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <div className="container-fluid fixed-top">
      {/* Top Bar */}
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="#" className="text-white">
                123 Street, New York
              </a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">
                Email@Example.com
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms of Use</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white ms-2">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <NavLink to="/" className="navbar-brand" onClick={closeNavbar}>
            <h1 className="text-primary NavTitle">MOHITE’S SALUBRIOUS FOOD</h1>
            <h6
              className="text-dark NavSubTitle"
              style={{ fontFamily: "cursive" }}
            >
              Fuel your life with fresh greens
            </h6>
          </NavLink>

          {/* Mobile / Tablet Icons + Toggler */}
          <div className="d-xl-none d-flex align-items-center gap-5">
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars bs-gray-dark"></span>
            </button>
            {/* Cart Icon */}
            <NavLink
              to="/cart"
              className="position-relative my-auto"
              onClick={closeNavbar}
            >
              <i className="fa fa-shopping-bag fa-2x"></i>
              <span
                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "16px",
                  minWidth: "16px",
                  fontSize: "12px",
                }}
              >
                3
              </span>
            </NavLink>

            {/* User Icon */}
            <NavLink to="/account" className="my-auto d-flex align-items-center gap-3" onClick={closeNavbar} >
              <i className="fas fa-user fa-2x"></i>{" "}
              <span className="text-dark" style={{fontFamily:"monospace"}}>
                <small className="d-block">Hello, Sign in</small>
                <strong>Account</strong>
                <i className="fa-solid fa-lock ms-2"></i>
              </span>
            </NavLink>

            {/* Toggler */}
          </div>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-item nav-link${isActive ? " active" : ""}`
                }
                onClick={closeNavbar}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `nav-item nav-link${isActive ? " active" : ""}`
                }
                onClick={closeNavbar}
              >
                Shop
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `nav-item nav-link${isActive ? " active" : ""}`
                }
                onClick={closeNavbar}
              >
                Cart
              </NavLink>
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  `nav-item nav-link${isActive ? " active" : ""}`
                }
                onClick={closeNavbar}
              >
                Check Out
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-item nav-link${isActive ? " active" : ""}`
                }
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </div>

            {/* Desktop Icons */}
            <div className="d-none d-xl-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary"></i>
              </button>

              <NavLink
                to="/cart"
                className="position-relative me-4 my-auto"
                onClick={closeNavbar}
              >
                <i className="fa fa-shopping-bag fa-2x"></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  3
                </span>
              </NavLink>
              <NavLink to="/account" className="my-auto" onClick={closeNavbar}>
                <i className="fas fa-user fa-2x"></i>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
