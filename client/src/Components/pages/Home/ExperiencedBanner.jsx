import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import a placeholder image for the banner background
// import bannerBackground from '../../assets/gavel-bg.jpg';

// Styled Components
const BannerWrapper = styled(Box)`
  background-image: url("https://img1.wsimg.com/isteam/getty/1710451698/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; // Creates a parallax-like effect
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); // Dark overlay for text readability
  }
`;

const RoundedBox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: white;
  max-width: 800px;
  width: 90%;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 1.0,
      ease: "easeOut"
    }
  }
};

const ExperiencedBanner = () => {
  return (
    <BannerWrapper>
      <Container maxWidth="lg">
        <RoundedBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Experienced & Qualified Auctioneers
          </Typography>
        </RoundedBox>
      </Container>
    </BannerWrapper>
  );
};

export default ExperiencedBanner;