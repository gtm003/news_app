import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Новости ИТМО"}</title>
        <meta name="keywords" content={keywords || "ИТМО, новости"} />
      </Head>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
