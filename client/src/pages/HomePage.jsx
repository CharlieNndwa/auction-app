import React from "react";
import AuctionCardCarousel from "../Components/pages/Home/AuctionCardCarousel"; // Import the new carousel component
import Client from "../Components/pages/Home/Client";
import Specialization from "../Components/pages/Home/Specialization";

import Partners from "../Components/pages/Home/Partners";
import SAIAstrip from "./SAIAStrip";

const HomePage = () => {
  return (
    <>
            <AuctionCardCarousel /> {/* Place the carousel here */}
            <Client />
      <SAIAstrip />
            <Specialization />
            <Partners />   {" "}
    </>
  );
};

export default HomePage;
