import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { Preloader, usePreloader } from "../../lib/PreloadContext";
import { getUser } from "../modules/users";
import { useParams } from "react-router-dom";

const UserContainer = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, id가 일치한다면 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 한다.

  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
