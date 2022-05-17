import React from "react";
import { INews } from "../../types/news";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";

const NewsPage = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      <div className="newsPage">
        <h1>Новость c id {query.id}</h1>
      </div>
    </MainLayout>
  );
};

export default NewsPage;
