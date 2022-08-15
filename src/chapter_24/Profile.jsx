import React from "react";
import { useParams } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  kmhoon: {
    name: "K-MHoon",
    description: "React Learning",
  },
  ringdingdong: {
    name: "Ringdingdong",
    description: "유치원 입니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
