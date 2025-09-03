import React, { useRef } from 'react';
import FacebookStrip from './FacebookStrip';
import { Box, Container, Typography, CardContent } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Import local images directly
import image1 from "../assets/gt.jpg";
import image2 from "../assets/ooop.jpg";
import image3 from "../assets/ad.jpg";
import image4 from "../assets/bkk.jpg";
import image5 from "../assets/mch.jpg";
import image6 from "../assets/hino.jpg";
import image7 from "../assets/ok.jpg";
import image8 from "../assets/heri.jpg";
import image9 from "../assets/tumb.jpg";
import image10 from "../assets/v.jpg";
import image11 from "../assets/ppii.jpg";
import image12 from "../assets/otf.jpg";
import image13 from "../assets/u.jpg";
import image14 from "../assets/sidecut.jpg";
import image15 from "../assets/b.jpg";
import image16 from "../assets/by.jpg";
import image17 from "../assets/n.jpg";
import image18 from "../assets/fn.jpg";
import image19 from "../assets/ggg.jpg";
import image20 from "../assets/jj.jpg";
import excavator1 from "../assets/rsd.jpg";
import drillRig1 from "../assets/yap.jpg";

// Styled Components
const AuctionsContainer = styled(Box)`
  padding: 80px 0;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
`;

const AuctionsHeading = styled(Typography)`
  && {
    font-size: 3rem;
    font-weight: bold;
    color: #0a0044c3;
    margin-bottom: 10px;
  }
`;

const AuctionsSubheading = styled(Typography)`
  && {
    font-size: 1.2rem;
    color: #000000;
    margin-bottom: 50px;
  }
`;

const AuctionCardItem = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const GallerySection = styled(Box)`
  margin-top: 20px;
  text-align: left;
  .gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .scroll-buttons button {
    background: #e0e0e0;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      background: #c0c0c0;
    }
  }
  .image-row {
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    padding: 10px 0;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

const UpcomingAuctions = () => {
  const imageRowRefs = useRef([]);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Data for the single upcoming auction
  const upcomingAuctionData = {
    id: 1,
    title: "Upcoming Auction",
    date: "19 March 2025",
    mainImage: image5,
    images: [image18, image17, image16, image15, image14, image13]
  };

  return (
    <AuctionsContainer>
      <Container maxWidth="lg">
        <AuctionsHeading variant="h2">Upcoming Auctions</AuctionsHeading>
        <AuctionsSubheading variant="body1">
          The next exciting event is just around the corner!
        </AuctionsSubheading>

        <motion.div
          key={upcomingAuctionData.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <AuctionCardItem>
            <CardContent>
              <Typography variant="h5" component="h3" fontWeight="bold" color="text.primary" gutterBottom>
                {upcomingAuctionData.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {upcomingAuctionData.date}
              </Typography>
            </CardContent>
            <MainImage
              src={upcomingAuctionData.mainImage}
              alt={upcomingAuctionData.title}
            />
            {/* Gallery Section */}
            <GallerySection>
              <div className="gallery-header">
                <h2>Image Gallery</h2>
                <div className="scroll-buttons">
                  <button onClick={() => scrollLeft(imageRowRefs.current[0])}>◀</button>
                  <button onClick={() => scrollRight(imageRowRefs.current[0])}>▶</button>
                </div>
              </div>
              <div className="image-row" ref={el => imageRowRefs.current[0] = el}>
                {upcomingAuctionData.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Gallery image ${imageIndex + 1}`}
                  />
                ))}
              </div>
            </GallerySection>
          </AuctionCardItem>
        </motion.div>
        <FacebookStrip />
      </Container>
    </AuctionsContainer>
  );
};

export default UpcomingAuctions;