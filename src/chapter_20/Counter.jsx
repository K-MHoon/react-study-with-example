import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  } else if (action.type === "DECREMENT") {
    return { value: state.value - 1 };
  } else {
    return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
