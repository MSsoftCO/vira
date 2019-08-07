import React from 'react';
import {Link} from 'react-router-dom'
import './App.scss';
import imgAll from "./img/all-check.png";
import imgArsenal from "./img/arsenal-logo.png";
import imgManchesterUnited from "./img/manchester-united-logo.png";
import imgManchesterCity from "./img/manchester-city-logo.png";
import imgLiverpool from "./img/liverpool-logo.png";
import imgChelsea from "./img/chelsea-logo.png";
import imgEverton from "./img/everton-logo.png";
import imgMasodOzil from "./img/masod-ozil.jpg";

function App() {
  return (
    <React.Fragment>
      {/* header */}
      <header className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" href="#">رقابت‌ها</Link>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-search"/>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-user-circle ml-1"/>
              <div className="d-none d-sm-inline-block">مرتضی صادقی</div>
            </Link>
          </li>
        </ul>
      </header>
      <main role="main" className="container-fluid">
        <div className="row">
          {/* sidebar */}
          <nav className="nav sidebar">
            <Link className="nav-link" to="#"><i className="fa fa-user"/><span>پروفایل</span></Link>
            <Link className="nav-link" to="#"><i className="fa fa-gamepad"/><span>بازی‌ها</span></Link>
            <Link className="nav-link active" to="#"><i
              className="fa fa-newspaper-o fa-flip-horizontal"/><span>اخبار</span></Link>
            <Link className="nav-link" to="#"><i className="fa fa-table"/><span>جدول</span></Link>
            <Link className="nav-link" to="#"><i className="fa fa-magic"/><span>پیش‌بینی</span></Link>
          </nav>
          <div className="main-content">
            {/*tab */}
            <ul className="tab-list nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="#">جدیدترین</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">نقل‌و‌انتقالات</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">محبوب‌ترین</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">گیشه‌روزنامه</Link>
              </li>
            </ul>
            <div className="tab-content row">
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                {/* filter */}
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
              </div>
              {/* user list */}
              <div className="transfer-list col">
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
            </div>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
