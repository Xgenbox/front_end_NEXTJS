"use client"
import React from "react";
import SmartCitiesHero from "../../components/pages/smart-cities/hero";
import PageLayout from "../../layout/layout";
import Chips from "../../components/shared/pages/chips";
import { SmartCitiesChipData,SmartCitiesCards  } from "../../constant/data";
import Cards from "../../components/shared/pages/cards";
const SmartCities = () => {
  return (
    <PageLayout>
      <SmartCitiesHero />
      <Chips chipsData={SmartCitiesChipData}/>
      <Cards cards={SmartCitiesCards}/>
    </PageLayout>
  );
};

export default SmartCities;
