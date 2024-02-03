"use client";

import React from "react";
import PageLayout from "./layout/layout";
import Banner from "./components/pages/landingpage/banner/Banner";
import TopCards from "./components/pages/landingpage/topCards/TopCards";
import About from "./components/pages/landingpage/about/About";
import Features from "./components/pages/landingpage/features/Features";
import Solutions from "./components/pages/landingpage/solutions/Solutions";
import Questions from "./components/pages/landingpage/questions/Questions";

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
