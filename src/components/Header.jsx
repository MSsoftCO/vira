import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
