import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showDetail = searchParams.get("detail");
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 About jsx 예제입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
