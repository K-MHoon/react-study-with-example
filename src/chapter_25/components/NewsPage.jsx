import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();

  return (
    <>
      <Categories />
      <NewsList category={category || "all"} />
    </>
  );
};

export default NewsPage;
