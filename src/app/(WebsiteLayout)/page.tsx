"use client";

import React from "react";
import PageLayout from "./layout/layout";
import Banner from "./components/landingpage/banner/Banner";
import TopCards from "./components/landingpage/topCards/TopCards";
import About from "./components/landingpage/about/About";
import Features from "./components/landingpage/features/Features";
import Solutions from "./components/landingpage/solutions/Solutions";
import Questions from "./components/landingpage/questions/Questions";
import C2a2 from "./components/landingpage/c2a/C2a2";

// components



export default function Landingpage() {
  return (
    <PageLayout>
      <Banner />
      <TopCards />
      <About />
      <Features />
      <Solutions />
      <Questions />
    </PageLayout>
  );
}

Landingpage.layout = "Blank";

//* original component
/*
export default function Landingpage () {
  return ( 
    
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <DemosApps />
      <Features />
      <Testimonial />
      <C2a2 />
      <Footer /> 
    </PageContainer>
  );
};

Landingpage.layout = "Blank";
*/
