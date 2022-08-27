import React, { useState, Suspense } from "react";
import logo from "../logo.svg";
import "../App.css";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div> loadble component loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    // 마우스를 올리는 것만으로도 로딩이 시작된다.
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
};

export default App;
