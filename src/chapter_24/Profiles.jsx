import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <Link to="kmhoon">K-MHoon</Link>
        </li>
        <li>
          <Link to="ringdingdong">Ringdingdong</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>사용자를 선택해 주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
