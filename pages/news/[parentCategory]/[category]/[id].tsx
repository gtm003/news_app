import React from "react";
import { INews } from "../../../../types/news";
import MainLayout from "../../../../layouts/MainLayout";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import axios from "axios";

function createMarkup(dis: string) {
  return { __html: dis };
}

interface NewsPageProps {
  article:string;
}

const NewsPage: React.FC<NewsPageProps> = ({article}) => {
  const { query } = useRouter();
  const mainPart = article.split(/<\/?article>/)[1];
  return (
    <MainLayout>
      <div className="article">
        <Box dangerouslySetInnerHTML={createMarkup(mainPart)}></Box>
      </div>
    </MainLayout>
  );
};

export default NewsPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const {parentCategory, category, id} = params
  const response = await axios.get(
    `https://news.itmo.ru/ru/${parentCategory}/${category}/news/${id}/`
  );
  //console.log(response);
  return {
    props: {
      article: response.data,
    },
  };
};
