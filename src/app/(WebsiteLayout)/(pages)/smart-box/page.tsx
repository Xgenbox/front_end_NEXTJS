"use client";
import React from "react";
import PageLayout from "../../layout/layout";
import { Avatar, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import SmartBoxHero from "../../components/smart-box/hero";
import SmartBoxChips from "../../components/smart-box/chips/index";
import SmartBoxCharacteristics from "../../components/smart-box/characteristics";
import SmartBoxBrochure from "../../components/smart-box/brochure";
import { SmartBoxChipsData1, SmartBoxChipsData2 } from "../../constant/data";
const SmartBox = () => {
  return (
    <PageLayout>
      <SmartBoxHero />
      <SmartBoxChips chipsData={SmartBoxChipsData1} />
      <SmartBoxCharacteristics />
      <SmartBoxChips chipsData={SmartBoxChipsData2} />
      <SmartBoxBrochure />
    </PageLayout>
  );
};


export default SmartBox;
