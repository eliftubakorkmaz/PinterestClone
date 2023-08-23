import React from "react";

export default function Pinpage() {
  return (
    <div className="container-fluid row ps-5 pe-5">
      <div className="col-3 pin_container mb-5">
        <div className="pin_body position-relative">
          <div className="pin_modal position-absolute">
            <div className="pin_top">
                <div className="save_container d-flex justify-content-center align-items-center bg-danger rounded-5">
              <a className="btn text-white" href="">Kaydet</a>
            </div>
            </div>
            <div className="pin_bot row position-absolute">
              <div className="col-7">asdas</div>
              <div className="col-5 row justify-content-between">
                <i className="btn pin_bot_icon fa-sharp fa-solid fa-arrow-up-from-bracket border bg-white col-6 d-flex justify-content-center align-items-center"></i>
                <i className="btn pin_bot_icon fa-solid fa-ellipsis border bg-white col-6 d-flex justify-content-center align-items-center"></i>
              </div>
            </div>
          </div>
          <div className="pin_img">
            <img
              src={"./img/Mauro_Icardi_Galatasaray_Besiktas.jpeg"}
              alt="sadd"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
