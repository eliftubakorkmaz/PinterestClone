import React from "react";

export default function NavbarLoggedOut() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="container-fluid d-flex gap-1">
            <a
              className="navbar-brand d-flex justify-content-center align-items-center me-0"
              href="#"
            >
              <i className="fab fa-pinterest nav_logo fa fs-2"></i>
            </a>
            <h1 className="ms-0 fs-5 text-danger text-start m-auto">
              Pinterest
            </h1>
          </div>
          <div className="">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item m-auto">
                <a class="nav-link logged_out_link text-dark" href="#">
                  About
                </a>
              </li>
              <li class="nav-item m-auto">
                <a class="nav-link logged_out_link text-dark" href="#">
                  Business
                </a>
              </li>
              <li class="nav-item m-auto">
                <a class="nav-link logged_out_link text-dark" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item m-auto">
              <form class="container-fluid d-flex m-auto gap-2">
                <button class="btn text-white rounded-5 nav_btn1 p-0 m-0" type="button">Login</button>
                <button class="btn rounded-5 nav_btn2  p-0 m-0" type="button">Sign Up</button>
              </form>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
