import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai"; // Import the time icon
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import CountdownTimer from "./CountdownTimer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UpcomingAuctions.scss";
import styled from "styled-components";
import image1 from '../assets/exca.jpg'; 
import image2 from '../assets/ad.jpg'; 
import image3 from '../assets/nv.jpg'; 
import image4 from '../assets/bkk.jpg'; 
import image5 from '../assets/mch.jpg'; 
import image6 from '../assets/hino.jpg'; 
import image7 from '../assets/ok.jpg'; 
import image8 from '../assets/ggg.jpg'; 
import image9 from '../assets/tumb.jpg'; 
import image10 from '../assets/v.jpg'; 
import image11 from '../assets/ppii.jpg'; 
import image12 from '../assets/otf.jpg'; 
import image13 from '../assets/u.jpg'; 
import image14 from '../assets/sidecut.jpg'; 
import image15 from '../assets/b.jpg';
import image16 from '../assets/by.jpg';
import image17 from '../assets/tumb.jpg';
import image18 from '../assets/fn.jpg';
import image20 from '../assets/jj.jpg';

// Hero section
const HeroSection = styled(Box)`
  background-color: #0a0044c3;
  color: #ffffff;
  padding: 100px 0;
  text-align: center;

  .hero-heading {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 20px;
  }

  .hero-subheading {
    font-size: 1.5rem;
  }
`;

// Featured section
const FeaturedAuctionsSection = styled(Box)`
  padding: 80px 0;
  background-color: #f0f0f0;

  .featured-heading {
    font-size: 2.5rem;
    font-weight: bold;
    color: #0a0044c3;
    text-align: center;
    margin-bottom: 40px;
  }
`;

// Auction card styles (shared)
const AuctionCard = styled(Box)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .upcoming-auction-card__image-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .upcoming-auction-card__content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .upcoming-auction-card__title {
      font-size: 1.2rem;
      font-weight: bold;
      color: #0a0044c3;
      margin-bottom: 8px;
    }

    .upcoming-auction-card__details {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 12px;
    }

    .upcoming-auction-card__countdown {
      margin-bottom: 16px;
    }

    .upcoming-auction-card__btn {
      background: #0a0044c3; /* New navy blue color */
      color: #ffffff; /* New white text color */
      border: none;
      padding: 10px 18px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
      align-self: flex-start;
      display: flex;
      align-items: center;

      &:hover {
        background: #080033; /* A slightly darker navy blue on hover */
      }
    }
  }
`;

// Auction Data
const upcomingAuctionsData = [
  {
    id: 1,
    images: [image1, image10, image15],
    title: "Earth Moving Equipment",
    description: "Heavy machinery and powerful tools for large-scale operations.",
    auctionDate: "2025-09-02T09:00:00Z",
    featured: true,
  },
  {
    id: 2,
    images: [image2, image3, image4],
    title: "Vehicle & Trucks Auction",
    description: "A rare collection of timepieces from prestigious brands.",
    auctionDate: "2025-09-05T14:30:00Z",
    featured: true,
  },
  {
    id: 3,
    images: [image5, image6, image7],
    title: "Appliances & Office Equipment Auction",
    description: "Featuring dishwashers, sidecutters, stoves and much more.",
    auctionDate: "2025-09-10T11:00:00Z",
    featured: true,
  },
  {
    id: 4,
    images: [image3, image9, image11],
    title: "Vehicle & Trucks Auction",
    description: "A rare collection of trucks & vehicles for the guaranteed right prices",
    auctionDate: "2025-09-15T10:00:00Z",
    featured: false,
  },
  {
    id: 5,
    images: [image17, image13, image16],
    title: "Appliances & Office Equipment Auction",
    description: "Featuring dishwashers, sidecutters, stoves and much more.",
    auctionDate: "2025-09-20T12:00:00Z",
    featured: false,
  },
  {
    id: 6,
    images: [image12, image18],
    title: "Earth Moving Equipment",
    description: "Heavy machinery and powerful tools for large-scale operations.",
    auctionDate: "2025-09-25",
    featured: false,
  },
];

const featuredAuctions = upcomingAuctionsData.filter(
  (auction) => auction.featured
);
const otherAuctions = upcomingAuctionsData.filter(
  (auction) => !auction.featured
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 },
    },
  ],
};

const UpcomingAuctions = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <h1 className="hero-heading">Upcoming Auctions</h1>
        <p className="hero-subheading">
          Discover and bid on exclusive collections and items.
        </p>
      </HeroSection>


      {/* Other Upcoming Auctions (grid layout) */}
      <Box className="upcoming-auctions__container" sx={{ padding: "60px 0" }}>
        <Container>
          <h2 className="upcoming-auctions__heading">Featured Auctions</h2>
          <p className="upcoming-auctions__subheading">
            Explore more exciting upcoming auctions and register to participate.
          </p>

          <div
            className="upcoming-auction-grid__list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            {otherAuctions.map((auction) => (
              <AuctionCard key={auction.id}>
                <div className="upcoming-auction-card__image-wrapper">
                  <img src={auction.images[0]} alt={auction.title} />
                </div>
                <div className="upcoming-auction-card__content">
                  <h3 className="upcoming-auction-card__title">{auction.title}</h3>
                  <p className="upcoming-auction-card__details">{auction.description}</p>
              
                  <button className="upcoming-auction-card__btn">
                    More Details Soon
                    <AiOutlineClockCircle style={{ marginLeft: "8px" }} />
                  </button>
                </div>
              </AuctionCard>
            ))}
          </div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="see-more__section" sx={{ textAlign: "center", padding: "60px 0" }}>
        <Container>
          <h2 className="see-more__heading">Want to explore more?</h2>
          <p className="see-more__subheading">
            Head back to our home page to discover all upcoming auctions.
          </p>
          <Link to="/" className="see-more__btn">
            See Home Page <FiArrowRight className="see-more__icon" />
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default UpcomingAuctions;