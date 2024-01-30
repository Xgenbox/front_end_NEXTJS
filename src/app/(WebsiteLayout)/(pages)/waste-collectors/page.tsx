"use client"
import React from "react";
import PageLayout from "../../layout/layout";
import Chips from "../../components/shared/chips";
import { WasteCollectorsChipData  } from "../../constant/data";
import WasteCollectorsHero from "../../components/waste-collectors/hero";
const WasteCollectors = () => {
  return (
    <PageLayout>
        <WasteCollectorsHero/>
      <Chips chipsData={WasteCollectorsChipData}/>
    </PageLayout>
  );
};

export default WasteCollectors;