import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly />
      <h4>params</h4>
      <textarea value={JSON.stringify(params, null, 2)} rows={7} readOnly />
      <p>
        <button onClick={() => nav("/")}>홈으로</button>
      </p>
    </div>
  );
};

export default WithRouterSample;
