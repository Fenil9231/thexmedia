import React from "react";
import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/pages/portfolio/details/portfolio-showcase-details-main";


export const metadata: Metadata = {
  title: "The-X-Media - Portfolio Details Showcase page",
};

const PortfolioDetailsShowcasePage = () => {
  return (
    <PortfolioDetailsShowcaseMain/>
  );
};

export default PortfolioDetailsShowcasePage;
