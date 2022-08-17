import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/ColorContext";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
