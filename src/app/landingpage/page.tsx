"use client";

import React from "react";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components
import LpHeader from "@/app/(DashboardLayout)/components/landingpage/header/Header";
import Banner from "@/app/(DashboardLayout)/components/landingpage/banner/Banner";
import DemosApps from "@/app/(DashboardLayout)/components/landingpage/demos-apps/DemosApps";
import Testimonial from "@/app/(DashboardLayout)/components/landingpage/testimonial/Testimonial";
import Features from "@/app/(DashboardLayout)/components/landingpage/features/Features";
import C2a2 from "@/app/(DashboardLayout)/components/landingpage/c2a/C2a2";
import Footer from "@/app/(DashboardLayout)/components/landingpage/footer/Footer";
import TopCards from "../(DashboardLayout)/components/landingpage/topCards/TopCards";
import Questions from "../(DashboardLayout)/components/landingpage/questions/Questions";
import Solutions from "../(DashboardLayout)/components/landingpage/solutions/Solutions";
import About from "../(DashboardLayout)/components/landingpage/about/About";

export default function Landingpage() {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <TopCards />
      <About/>
      <Features />
      <Solutions/>
      <Questions/>
      <C2a2 />
      <Footer />
    </PageContainer>
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
