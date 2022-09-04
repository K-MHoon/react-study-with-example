import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import loadable from "@loadable/component";

const BluePage = loadable(() => import("./pages/BluePage"));
const RedPage = loadable(() => import("./pages/RedPage"));
const UsersPage = loadable(() => import("./pages/UsersPage"));

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage></RedPage>} />
        <Route path="/blue" element={<BluePage></BluePage>} />
        <Route path="/users/*" element={<UsersPage></UsersPage>} />
      </Routes>
    </div>
  );
};

export default App;
