import React, { useRef } from 'react';
import FacebookStrip from './FacebookStrip';
import { Box, Container, Typography, CardContent } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';

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
const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const MainCardContent = styled(CardContent)`
  padding: 0;
  text-align: center;
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

const AuctionsSection = styled(Box)`
  background-color: #f5f5f5;
  padding: 60px 0px 20px 0px; /* Reduced bottom padding */
  text-align: center;
`;

const SectionHeader = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const magicGlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AuctionMagicGlowCard = styled(motion.div)`
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #a0a0a0, #c0c0c0, #e0e0e0, #a0a0a0);
    background-size: 400%;
    border-radius: 20px;
    opacity: 0.6;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.3s ease;
    animation: ${magicGlow} 15s linear infinite;
  }
`;

const AutoplayCarouselContainer = styled(AuctionMagicGlowCard)`
  padding: 20px;
  background-color: #fff;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const CarouselButtons = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 10;
`;

const CarouselButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PastEventsSection = styled(Box)`
  background-color: #5c5c5c;
  padding: 60px 0;
  margin-top: 80px;
  text-align: center;
  color: #fff;
`;

const PastEventsHeading = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFD700;
  margin-bottom: 40px;
`;

const VideoSection = styled(Box)`
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
`;

const VideoMagicGlowCard = styled(motion.div)`
  position: relative;
  background-color: #5c5c5c;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  overflow: hidden;
  max-width: 287px;
  margin: 0 auto;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #a0a0a0, #c0c0c0, #e0e0e0, #a0a0a0);
    background-size: 400%;
    border-radius: 20px;
    opacity: 0.6;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.3s ease;
    animation: ${magicGlow} 15s linear infinite;
  }
`;

const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 178.27%; 
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const VideoFooter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #333;
  font-weight: bold;
  & > * {
    margin: 0 5px;
  }
`;

const PreviousAuctions = () => {
  const previousAuctionData = [
    {
      id: 1,
      title: "Office Equipment & Appliances Auction",
      date: "24 January 2025",
      mainImage: drillRig1,
      images: [image18, image17, image16, image15, image14]
    },
    {
      id: 2,
      title: "Earth Moving Equipment Auction",
      date: "28 March 2024",
      mainImage: image2,
      images: [image1, image3, image4, image5, image6]
    },
    {
      id: 3,
      title: "Vehicle Fleet Auction",
      date: "3 May 2023",
      mainImage: image18,
      images: [image7, image8, image9, image10, image11]
    },
    {
      id: 4,
      title: "Mining Equipment Auction",
      date: "17 February 2023",
      mainImage: excavator1,
      images: [image12, image13, image14, image15, image16]
    },
    {
      id: 5,
      title: "Industrial Machinery Auction",
      date: "12 December 2022",
      mainImage: image10,
      images: [image17, image18, image19, image20, image1]
    },
    {
      id: 6,
      title: "Farm Equipment Auction",
      date: "30 November 2019",
      mainImage: image15,
      images: [image2, image3, image4, image5, image6]
    },
  ];

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

  return (
    <AuctionsSection>
      <Container maxWidth="lg">
        <SectionHeader variant="h2">Previous Auctions</SectionHeader>
        <Typography variant="body1" color="text.secondary" style={{ marginBottom: '40px' }}>
          A look back at some of our most successful sales.
        </Typography>

        {previousAuctionData.map((auction, index) => (
          <motion.div
            key={auction.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <AuctionMagicGlowCard>
              <MainCardContent>
                <Typography variant="h5" component="h3" fontWeight="bold" color="text.primary" gutterBottom>
                  {auction.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {auction.date}
                </Typography>
              </MainCardContent>
              <MainImage
                src={auction.mainImage}
                alt={auction.title}
              />
              {/* Gallery Section */}
              <GallerySection>
                <div className="gallery-header">
                  <h2>Image Gallery</h2>
                  <div className="scroll-buttons">
                    <button onClick={() => scrollLeft(imageRowRefs.current[index])}>◀</button>
                    <button onClick={() => scrollRight(imageRowRefs.current[index])}>▶</button>
                  </div>
                </div>
                <div className="image-row" ref={el => imageRowRefs.current[index] = el}>
                  {auction.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`Gallery image ${imageIndex + 1}`}
                    />
                  ))}
                </div>
              </GallerySection>
            </AuctionMagicGlowCard>
          </motion.div>
        ))}

      
   <FacebookStrip />
 
      </Container>
    </AuctionsSection>
  );
};

export default PreviousAuctions;