import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import History from "./History";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="profiles/*" element={<Profiles />} />
        <Route path="history/*" element={<History />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다 : </h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
