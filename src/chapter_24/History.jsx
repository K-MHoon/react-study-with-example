import React, { useEffect } from "react";
import { usePrompt } from "./Blocker";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  usePrompt("현재 페이지를 벗어나시겠습니까?", true);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default History;
