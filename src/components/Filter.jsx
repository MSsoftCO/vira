import React from 'react';
import imgAll from "../img/all-check.png";
import imgArsenal from "../img/arsenal-logo.png";
import imgManchesterUnited from "../img/manchester-united-logo.png";
import imgManchesterCity from "../img/manchester-city-logo.png";
import imgEverton from "../img/everton-logo.png";
import imgChelsea from "../img/chelsea-logo.png";
import imgLiverpool from "../img/liverpool-logo.png";

const Filter = () => {
  return (
    <ul className="team-list nav nav-tabs">
      <li className="nav-item">
        <figure className="figure">
          <img src={imgAll} className="figure-img" alt="همه موارد"/>
          <figcaption className="figure-caption">همه موارد</figcaption>
        </figure>
      </li>
      <li className="nav-item active">
        <figure className="figure">
          <img src={imgArsenal} className="figure-img" alt="لوگو آرسنال"/>
          <figcaption className="figure-caption">آرسنال</figcaption>
        </figure>
      </li>
      <li className="nav-item">
        <figure className="figure">
          <img src={imgManchesterUnited} className="figure-img" alt="لوگو منچستریونایتد"/>
          <figcaption className="figure-caption">منچستریونایتد</figcaption>
        </figure>
      </li>
      <li className="nav-item">
        <figure className="figure">
          <img src={imgManchesterCity} className="figure-img" alt="لوگو منچسترسیتی"/>
          <figcaption className="figure-caption">منچسترسیتی</figcaption>
        </figure>
      </li>
      <li className="nav-item">
        <figure className="figure">
          <img src={imgEverton} className="figure-img" alt="لوگو اورتون"/>
          <figcaption className="figure-caption">اورتون</figcaption>
        </figure>
      </li>
      <li className="nav-item">
        <figure className="figure">
          <img src={imgChelsea} className="figure-img" alt="لوگو چلسی"/>
          <figcaption className="figure-caption">چلسی</figcaption>
        </figure>
      </li>
      <li className="nav-item">
        <figure className="figure">
          <img src={imgLiverpool} className="figure-img" alt="لوگو لیورپول"/>
          <figcaption className="figure-caption">لیورپول</figcaption>
        </figure>
      </li>
    </ul>
  );
};

export default Filter;
