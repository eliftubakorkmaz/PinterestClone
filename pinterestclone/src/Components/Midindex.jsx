import React from "react";

export default function Midindex() {
  return (
    <div className="container-fluid">
      <div className="row rowindex">
        <div className="col-md-6 midleft">
          <div className="container position-relative ind_container">
            <div className="container position-absolute img1">
              <img
                className="card1 rounded-4"
                src={"./img/pinb.png"}
                alt="resim"
              />{" "}
              <br />
              <span className="fw-bold text-white text1">Scout the City</span>
              <br />
              <span className="fw-bolder text-white text2">56.7K followers</span>
            </div>
            <div className="container position-absolute img2">
              <img className="card2" src={"./img/pina.png"} alt="resim" />
            </div>
          </div>
        </div>

        <div className="col-md-6 midright text-center text-danger m-0 d-flex justify-content-center align-items-center">
          <div className="container-fluid w-75">
            <h1 className="fw-bold text3">See it, make it, try it, do it</h1> <br />
            <h3 className="text4">
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </h3>{" "}
            <br />
            <a
              href="#"
              className="btn btn-danger rounded-5 fw-bold"
              role="button"
              data-bs-toggle="button"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
