import React from "react";

export default function ProfilePage() {

    const basla=()=>{
        var x = document.getElementById("pp_olustur");
        var y = document.getElementById("pp_kaydet");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } 
      }

    const bitir=()=>{
        var x = document.getElementById("pp_kaydet");
        var y = document.getElementById("pp_olustur");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } 
      }

  return (
    <div>
      <div className="container-fluid row d-block">
        <div className="container col m-auto w-50 mb-4">
          <div className="container pp_icon_conatiner">
            <span className="d-flex justify-content-center align-items-center m-auto pp_icon">
              B
            </span>
          </div>
        </div>
        <div className="container col m-auto w-50 mb-4">
          <div className="container d-block">
            <h1 className="text-center">İsim Soyisim</h1>
            <span className="align-middle d-flex justify-content-center mb-1">
              @email
            </span>
            <span className="align-middle d-flex justify-content-center">
              0 takip
            </span>
          </div>
        </div>
        <div className="container col mb-4">
          <form className="container-fluid d-flex m-auto gap-2 justify-content-center">
            <button
              className="btn rounded-5 pp_btn1  p-0 m-0 fw-semibold"
              type="button"
            >
              Paylaş
            </button>
            <button
              className="btn rounded-5 pp_btn2  p-0 m-0 fw-semibold"
              type="button"
            >
              Profili düzenle
            </button>
          </form>
        </div>
        <div className="container col">
          <form className="container-fluid d-flex m-auto gap-2 justify-content-center">
            <button
              className="btn rounded-3 pp_btn3  fw-semibold"
              type="button"
              onClick={basla}
            >
              Oluşturuldu
            </button>
            <button
              className="btn rounded-3 pp_btn4  fw-semibold"
              type="button"
              onClick={bitir}
            >
              Kaydedildi
            </button>
          </form>
        </div>
        <div className="container col mt-4 " id="pp_olustur">
          <span className="align-middle d-flex justify-content-center mb-1">
            Henüz görülecek bir şey yok! Oluşturduğunuz Pinler burada görünecek.
          </span>
          <button
            className="btn rounded-5 text-light pp_btn5 fw-semibold d-flex m-auto mt-4 p-2"
            type="button"
          >
            Fikir Pini oluştur
          </button>
        </div>
        <div className="container col" id="pp_kaydet">
          <div className="container">
            <div className="container-fluid d-flex justify-content-between">
              <button
                className="btn rounded-5 text-dark d-flex pp_btntwn"
                type="button"
              >
                <i className="fa-solid fa-sliders fa-xl m-auto"></i>
              </button>
              <button
                className="btn rounded-5 text-dark fw-semibold d-flex pp_btntwn"
                type="button"
              >
                <i className="fa-solid fa-plus fa-xl m-auto"></i>
              </button>
            </div>
          </div>
          <span className="align-middle d-flex justify-content-center mb-1">
            Henüz hiç Pin kaydetmediniz
          </span>
          <form className="container-fluid d-flex m-auto justify-content-center">
            <button
              className="btn rounded-5 pp_btn6  p-0 m-0 fw-semibold"
              type="button"
            >
              Fikir bul
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
