import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AuctionCard from "./AuctionCard";
import "./AuctionCardCarousel.scss";

// Placeholder image imports
import ad from "../../../assets/ad.jpg";
import oo from "../../../assets/oo.jpg";
import pp from "../../../assets/pp.jpg";
import ff from "../../../assets/ff.jpg";
import k from "../../../assets/k.jpg";
import zz from "../../../assets/zz.jpg";
import b from "../../../assets/b.jpg";

// Dynamic Data Array - venue and time properties added to all items
const auctionData = [
  
  {
    _id: "auction4",
    location: "Pretoria, South Africa",
    closes: "2025-11-05T10:00:00+02:00",
    title: "SALE: Mining Equipment Lot",
    images: [k, zz, b, ad, oo, pp, ff],
    venue: "Pretoria, South Africa",
    time: "10:00 AM"
  },
  {
    _id: "auction5",
    location: "Benoni, South Africa",
    closes: "2025-09-01T14:00:00+02:00",
    title: "LIQUIDATION ONLINE AUCTION: Office Furniture & Electronics",
    images: [ad, pp, b, k, ff, oo, zz],
    venue: "Benoni, South Africa",
    time: "2:00 PM"
  },
  {
    _id: "auction6",
    location: "Durban, KwaZulu-Natal",
    closes: "2025-09-15T11:00:00+02:00",
    title: "REPOSSESSED: Vehicles & Salvage Stock Auction",
    images: [oo, ff, k, ad, b, pp, zz],
    venue: "Durban, KwaZulu-Natal",
    time: "11:00 AM"
  },
  {
    _id: "auction7",
    location: "Centurion, Gauteng",
    closes: "2025-10-10T15:00:00+02:00",
    title: "MULTI-VENDOR AUCTION: General Household Appliances",
    images: [pp, b, zz, ff, ad, k, oo],
    venue: "Centurion, Gauteng",
    time: "3:00 PM"
  },
];

// Function to determine auction status based on the current date
const getAuctionStatus = (closesDate) => {
  const now = new Date();
  const closeTime = new Date(closesDate);
  const timeUntilClose = closeTime - now;
  const oneDayInMs = 24 * 60 * 60 * 1000;

  if (timeUntilClose > oneDayInMs) {
    return "upcoming";
  } else if (timeUntilClose <= 0) {
    return "past";
  } else {
    return "live";
  }
};

const AuctionCardCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h3>Featured Auctions</h3>
        <div className="carousel-arrows">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {auctionData.map((item) => {
          const status = getAuctionStatus(item.closes);
          return (
            <SwiperSlide key={item._id}>
              <AuctionCard
                item={item}
                isLive={status === "live"}
                isPast={status === "past"}
                isUpcoming={status === "upcoming"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AuctionCardCarousel;