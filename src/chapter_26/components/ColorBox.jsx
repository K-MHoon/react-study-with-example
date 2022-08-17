import React from "react";
import ColorContext from "../contexts/ColorContext";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
