import React from "react";

export default function Navbar() {

 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid pb-3 pt-3 ps-3 pe-3">
        <a
          className="navbar-brand roundcontainer d-flex justify-content-center align-items-center"
          href="#"
        >
          <i className="fab fa-pinterest nav_logo fa"></i>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a
                className="nav-link bg-dark text-white rounded-5 me-2 ps-3 pe-3 navtext"
                href="#"
              >
                Ana Sayfa
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navtext"
                href="#"
                id="navbarDropdownCreate"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Oluştur
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownCreate"
              >
                <li>
                  <a className="dropdown-item navtext" href="#">
                    Fikir Pini Oluştur
                  </a>
                </li>
                <li>
                  <a className="dropdown-item navtext" href="#">
                    Pin oluştur
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex flex-grow-1 ">
            <button
              className="btn btn-outline-dark border-end-0 rounded-0 rounded-start-5"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              className="form-control me-2 border-start-0 border-dark rounded-0 rounded-end-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <ul className="navbar-nav ">
            <li className="nav-item roundcontainer dropdown-start">
              <a
                className="nav-link roundcontainer d-flex justify-content-center align-items-center"
                id="navbarDropdownCreate1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <i className="fas fa-bell fa"></i>
              </a>
              <ul
                className="dropdown-menu rounded-4 dropdown1"
                aria-labelledby="navbarDropdownCreate1"
              >
                <li>
                  <p className="text-center mb-0 mt-4">Güncelemeler</p>
                </li>
                <ul className="list-group p-3 mt-0">
                  <li className="list-group-item w-100 bell_list rounded-4 border-0">
                    <div className="card-group d-block ">
                      <div className="card-body d-flex row">
                        <div className="col-9">
                          <p className="card-text">
                            Sizden ilham alan pinler <span>17s</span>
                          </p>
                        </div>
                        <div className="col-3 d-flex">
                          <i className="btn pin_bot_icon fa-solid fa-ellipsis border bg-white d-flex justify-content-center align-items-center"></i>
                        </div>
                      </div>
                      <div className="d-flex row container g-0 mt-3">
                        <div className="col">
                          <img
                            src={"./img/Mauro_Icardi_Galatasaray_Besiktas.jpeg"}
                            className="card-img object-fit-cover x1x rounded-start-4"
                            alt="..."
                          />
                        </div>
                        <div className="col">
                          <img
                            src={"./img/Mauro_Icardi_Galatasaray_Besiktas.jpeg"}
                            className="card-img object-fit-cover x1x"
                            alt="..."
                          />
                        </div>
                        <div className="col">
                          <img
                            src={"./img/Mauro_Icardi_Galatasaray_Besiktas.jpeg"}
                            className="card-img object-fit-cover x1x rounded-end-4"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </ul>
            </li>

            <li className="nav-item roundcontainer dropdown-start">
              <a
                className="nav-link roundcontainer d-flex justify-content-center align-items-center"
                id="navbarDropdownCreate2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <i className="fa-solid fa-comment-dots fa"></i>
              </a>
              <ul
                className="dropdown-menu rounded-4 dropdown1"
                aria-labelledby="navbarDropdownCreate2"
              >
                <li>
                  <div className="d-flex container justify-content-between align-items-center">
                    <p className="m-auto">Gelen Kutusu</p>
                    <i className="btn pin_bot_icon fa-solid fa-ellipsis border bg-white col-6 d-flex justify-content-center align-items-center"></i>
                  </div>
                </li>
                <li>
                  <div className="d-flex container justify-content-start align-items-center">
                    <button className="border-0"><i className="fa-solid fa-pen-to-square text-danger "></i></button>
                    <p className="m-auto ms-2">Yeni mesaj</p>
                  </div>
                </li>
                <li>
                  <h1>Arkadaşlarınızla fikirler paylaşın</h1>
                </li>
                <li>
                  <form className="d-flex flex-grow-1 ">
                    <button
                      className="btn btn-outline-dark border-end-0 rounded-0 rounded-start-5"
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                      className="form-control me-2 border-start-0 border-dark rounded-0 rounded-end-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </li>
              </ul>
            </li>

            <li className="nav-item roundcontainer d-flex justify-content-center align-items-center">
              <a className="nav-link " href="#">
                <span className="navword d-flex justify-content-center align-items-center">
                  B
                </span>
              </a>
            </li>
            <li className="nav-item dropdown-start dropdowncont m-auto">
              <a
                className="nav-link dropdown-toggle fa"
                href="#"
                id="navbarDropdownMore"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul
                className="dropdown-menu rounded-4"
                aria-labelledby="navbarDropdownMore"
              >
                <li>
                  <p className="ndtext ms-4">Şu an kullanılan hesap</p>
                </li>
                <li className="ps-2 pe-2">
                  <a
                    className="dropdown-item row d-flex m-auto az rounded-3 pt-2 pb-2"
                    href="#"
                  >
                    <div className="col-3 accountword ">
                      <h3 className="d-flex align-items-center justify-content-center h-100">
                        B
                      </h3>
                    </div>
                    <div className="d-block col-9 ">
                      <p className="mb-0 acctext1">
                        <b>Batın Kasapoğlu</b>
                      </p>
                      <p className="mb-0 acctext2">Kişisel</p>
                      <p className="mb-0 acctext2">batinkasapoglu@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <p className="ndtext ms-4 mt-3 mb-2">Hesaplarınız</p>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b>Hesap ekle</b>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b>İşletme hesabına geçiş yapın</b>
                  </a>
                </li>
                <li>
                  <p className="ndtext ms-4 mt-3 mb-2">Daha fazla seçenek</p>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b>Ayarlar</b>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b>Ana sayfa akışını ayarlayın</b>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b> Windows uygulamasını yükle</b>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b> Gizlilik haklarınız</b>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a
                    className="dropdown-item d-flex justify-content-between az rounded-3 pt-2 pb-2"
                    href=""
                  >
                    <b> Yardım alın </b>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a
                    className="dropdown-item d-flex justify-content-between az rounded-3 pt-2 pb-2"
                    href=""
                  >
                    <b> Hizmet şartlarına göz at</b>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a
                    className="dropdown-item d-flex justify-content-between az rounded-3 pt-2 pb-2"
                    href=""
                  >
                    <b> Gizlilik politikasına göz at</b>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a
                    className="dropdown-item d-flex justify-content-between az rounded-3 pt-2 pb-2"
                    href=""
                  >
                    <b> Beta test kullanıcısı olun</b>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
                <li className="ps-2 pe-2">
                  <a className="dropdown-item az rounded-3 pt-2 pb-2" href="">
                    <b> Çıkış yap</b>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
