import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="nav sidebar">
      <Link className="nav-link" to="#"><i className="fa fa-user"/><span>پروفایل</span></Link>
      <Link className="nav-link" to="#"><i className="fa fa-gamepad"/><span>بازی‌ها</span></Link>
      <Link className="nav-link active" to="#"><i
        className="fa fa-newspaper-o fa-flip-horizontal"/><span>اخبار</span></Link>
      <Link className="nav-link" to="#"><i className="fa fa-table"/><span>جدول</span></Link>
      <Link className="nav-link" to="#"><i className="fa fa-magic"/><span>پیش‌بینی</span></Link>
    </nav>
  );
};

export default Sidebar;
