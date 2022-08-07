import React from "react";

const Say = (props) => {
  const handleClickEnter = () => {
    props.onClickEnter();
  };

  const handleClickLeave = () => {
    props.onClickLeave();
  };

  return (
    <div>
      <h1 style={{ color: props.color }}>{props.message}</h1> <br />
      입장/퇴장 =<button onClick={handleClickEnter}>입장하기</button>
      <button onClick={handleClickLeave}>퇴장하기</button>
      <br />
      버튼 색 =
      <button
        onClick={() => {
          props.onChangeColor("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          props.onChangeColor("green");
        }}
      >
        초록색
      </button>
      <button
        onClick={() => {
          props.onChangeColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
