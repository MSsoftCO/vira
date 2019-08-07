import React from 'react';
import imgMasodOzil from "../img/masod-ozil.jpg";
import imgArsenal from "../img/arsenal-logo.png";
import imgChelsea from "../img/chelsea-logo.png";
import imgManchesterUnited from "../img/manchester-united-logo.png";

const Transfer = () => {
  return (
    <div className="transfer-list">
      <div className="transfer-user">
        <figure className="user-wrapper figure">
          <img src={imgMasodOzil} className="figure-img" alt="مسعود ازیل"/>
          <figcaption className="figure-caption mr-0 mr-md-3 d-inline-block">مسعود ازیل</figcaption>
        </figure>
        <div className="teams-wrapper mr-auto">
          <div className="team">
            <figure className="figure">
              <img src={imgArsenal} className="figure-img" alt="لوگو آرسنال"/>
              <figcaption className="figure-caption">آرسنال</figcaption>
            </figure>
          </div>
          <div className="transfer-btn mx-2 mx-lg-4 mx-xl-5">
            <button title="انتقال به" className="btn btn-success px-sm-1 px-lg-3">
              <i className="fa fa-arrow-left px-1"/>
              <span className="transfer-text mr-1">انتقال به</span>
            </button>
          </div>
          <div className="team">
            <figure className="figure">
              <img src={imgChelsea} className="figure-img" alt="لوگو چلسی"/>
              <figcaption className="figure-caption">چلسی</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="transfer-user">
        <figure className="user-wrapper figure">
          <img src={imgMasodOzil} className="figure-img" alt="ماریا سانچز"/>
          <figcaption className="figure-caption mr-0 mr-md-3 d-inline-block">ماریا سانچز</figcaption>
        </figure>
        <div className="teams-wrapper mr-auto">
          <div className="team">
            <figure className="figure">
              <img src={imgArsenal} className="figure-img" alt="لوگو آرسنال"/>
              <figcaption className="figure-caption">آرسنال</figcaption>
            </figure>
          </div>
          <div className="transfer-btn mx-2 mx-lg-4 mx-xl-5">
            <button title="انتقال به" className="btn btn-success px-sm-1 px-lg-3">
              <i className="fa fa-arrow-left px-1"/>
              <span className="transfer-text mr-1">انتقال به</span>
            </button>
          </div>
          <div className="team">
            <figure className="figure">
              <img src={imgManchesterUnited} className="figure-img" alt="لوگو منچستریونایتد"/>
              <figcaption className="figure-caption">منچستریونایتد</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
