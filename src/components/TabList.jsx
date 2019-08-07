import React from 'react';
import {Link} from "react-router-dom";

const TabList = () => {
  return (
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
  );
};

export default TabList;
