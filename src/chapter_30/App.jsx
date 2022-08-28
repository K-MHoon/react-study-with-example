import React from "react";
import { Route, Routes } from "react-router-dom";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage></RedPage>} />
        <Route path="/blue" element={<BluePage></BluePage>} />
      </Routes>
    </div>
  );
};

export default App;
