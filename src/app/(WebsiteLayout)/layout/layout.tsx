import React from "react";
import Footer from "../components/landingpage/footer/Footer";
import LpHeader from "../components/landingpage/header/Header";
import C2a2 from "../components/landingpage/c2a/C2a2";

const PageLayout = ({ children }: any) => {
  return (
    <>
      <LpHeader />
      {children}
      <C2a2/>
      <Footer />
    </>
  );
};

export default PageLayout;
