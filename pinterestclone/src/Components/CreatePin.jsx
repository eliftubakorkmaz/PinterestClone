import React from "react";

export default function CreatePin() {
  return (
    <div className="container-fluid position-relative create_pin_maincont">
      <div className="container col position absolute position-relative">
        <button type="button" class="btn bg-light cpbtntop position-relative">
          <i className="fa-solid fa-plus fa-lg m-auto"></i>
        </button>
        <button type="button" class="btn cpbtnbot position-relative">
          <i class="fa-regular fa-image"></i>
        </button>
      </div>
      
      <div className="container col create_pin_container rounded-4">
        <div className="container d-flex justify-content-between pt-5">
          <i className="btn cp_icon rounded-circle fa-solid fa-ellipsis border-0 col-6 d-flex justify-content-center align-items-center"></i>
          <div class="dropdown-center d-flex cpdd_btn">
            <button
              className="dropdown-toggle rounded-2 ps-2 pe-2 cpdd justify-content-between d-flex align-items-center border-0 text-dark rounded-end-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Listeden seçin
            </button>
            <input
              className="btn btn-danger rounded-start-0"
              type="submit"
              value="Kaydet"
            />
            <ul class="dropdown-menu create_pin_dd rounded-4 border-0 shadow p-2">
              <li className="dd_item1 p-1 d-flex align-items-center justify-content-center">
                <form className="d-flex flex-grow-1">
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
              <li>
                <div className="container border-bottom overflow-y-scroll dd_item2"></div>
              </li>
              <li className="container d-flex dd_item3 mt-2 align-items-center gap-3">
                <button
                  className="rounded-5 border-0 text-light fw-semibold d-flex cp_btn "
                  type="button"
                >
                  <i className="fa-solid fa-plus m-auto"></i>
                </button>
                <p className="m-auto ms-0">Pano oluştur</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid d-flex mt-5">
          <div className="container cpcol_left justify-content-center align-items-center">
            <div className="input-group cp_upload mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
              />
            </div>
            <button type="button" class="btn btn-outline-dark rounded-pill cp_upload_btn text-dark border-0 fw-semibold">Siteden kaydet
            </button>
          </div>
          <div className="container cpcol_right position-relative">
            <div className="form-floating container">
              <textarea
                className="border-0 border-bottom cp_textarea1 rounded-0 fw-bolder fs-2"
                placeholder="Başlığınızı girin"
                id="floatingTextarea2"
              ></textarea>
            </div>
            <div className="container d-flex">
              <div className="accountword mt-5 mb-5">
                <h3 className="d-flex align-items-center justify-content-center h-100">
                  B
                </h3>
              </div>
              <span className="text-dark m-auto ms-3 fw-semibold">
                İsim Soyisim
              </span>
            </div>
            <div className="form-floating container">
              <textarea
                className="border-0 border-bottom cp_textarea2 rounded-0 w-100"
                placeholder="Pininizin ne hakkında olduğunu herkese söyleyin"
                id="floatingTextarea3"
              ></textarea>
            </div>
            <div className="form-floating container">
              <textarea
                className="border-0 border-bottom cp_textarea2 rounded-0 w-100"
                placeholder="İnsanların Pinde neler görebileceğini açıklayın"
                id="floatingTextarea3"
              ></textarea>
            </div>
            <div className="form-floating container position-absolute bottom-0">
              <textarea
                className="border-0 border-bottom cp_textarea3 rounded-0 w-100"
                placeholder="Bir bağlantı ekleyin"
                id="floatingTextarea3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
