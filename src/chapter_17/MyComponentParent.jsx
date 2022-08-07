import React, { useState } from "react";
import MyComponent from "./MyComponent";
import Say from "./Say";

const MyComponentParent = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  return (
    <div>
      <MyComponent name="React" favoriteNumber={3}>
        리액트
      </MyComponent>
      <Say
        message={message}
        onClickEnter={onClickEnter}
        onClickLeave={onClickLeave}
        color={color}
        onChangeColor={(c) => setColor(c)}
      />
    </div>
  );
};

export default MyComponentParent;
