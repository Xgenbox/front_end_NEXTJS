"use client";
import React from "react";
import PageLayout from "../../layout/layout";

import SmartBoxHero from "../../components/smart-box/hero";
import SmartBoxCharacteristics from "../../components/smart-box/characteristics";
import SmartBoxBrochure from "../../components/smart-box/brochure";
import { SmartBoxChipsData1, SmartBoxChipsData2 } from "../../constant/data";
import Chips from "../../components/shared/chips";
const SmartBox = () => {
  return (
    <PageLayout>
      <SmartBoxHero />
      <Chips chipsData={SmartBoxChipsData1} />
      <SmartBoxCharacteristics />
      <Chips chipsData={SmartBoxChipsData2} />
      <SmartBoxBrochure />
    </PageLayout>
  );
};


export default SmartBox;
