import React from "react";
import { Route, Routes } from "react-router-dom";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";
import Menu from "./components/Menu";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage></RedPage>} />
        <Route path="/blue" element={<BluePage></BluePage>} />
        <Route path="/users" element={<UsersPage></UsersPage>} />
      </Routes>
    </div>
  );
};

export default App;
