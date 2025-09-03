import React from "react";
import AuctionCardCarousel from "../Components/pages/Home/AuctionCardCarousel"; // Import the new carousel component
import Client from "../Components/pages/Home/Client";
import Specialization from "../Components/pages/Home/Specialization";
import SAIABanner from "../pages/SAIABanner"
import Partners from "../Components/pages/Home/Partners";
import SAIAstrip from "./SAIAStrip";
import Hero from "./HeroSection";

const HomePage = () => {
  return (
    <>
            <Hero /> {/* Place the carousel here */}
            <Client />
      <SAIAstrip />
            <Specialization />
            <SAIABanner />   
    </>
  );
};

export default HomePage;
