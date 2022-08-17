import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/ColorContext";

const App = () => {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
