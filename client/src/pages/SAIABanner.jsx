import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Placeholder images for the banner
import saiaLogo from '../assets/saia-446x400.jpg';
import gavelImage from '../assets/What-is-auction-finance.jpg';

// Styled Components
const BannerWrapper = styled(Box)`
  position: relative;
  background-color: #f0f0f0;
  padding: 40px 0;
  overflow: hidden;
`;

const BannerContent = styled(Container)`
  position: relative;
  z-index: 1;
`;

const BannerCard = styled(Grid)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 960px) {
    flex-direction: row;
    height: 350px;
  }
`;

const ImageContainer = styled(Grid)`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  flex: 1;
  min-height: 200px;
`;

const TextContainer = styled(Grid)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  text-align: center;
  
  // This will manage the layout for mobile and tablet
  @media (max-width: 959px) {
    align-items: center;
  }

  // This will manage the layout for desktop
  @media (min-width: 960px) {
    text-align: left;
    align-items: flex-start;
  }
`;

// SAIAInfo is now used to group the title and logo on mobile
const SAIAInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  
  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledSAIALogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px; // Add some space below the logo on mobile
  
  @media (min-width: 960px) {
    margin-right: 20px;
    margin-bottom: 0; // Remove bottom margin on desktop
  }
`;

const SAIABanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <BannerWrapper>
        <Container maxWidth="lg">
          <BannerCard container>
            <ImageContainer item xs={12} md={6} image={gavelImage} />
            
            <TextContainer item xs={12} md={6}>
              <SAIAInfo>
                <StyledSAIALogo src={saiaLogo} alt="SAIA Logo" />
                <Typography variant="h5" fontWeight="bold">
                  SAIA Qualified Auctioneers
                </Typography>
              </SAIAInfo>
              <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                Experienced & Qualified Auctioneers
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The South African Institute of Auctioneers (SAIA) is the official professional body for the auction industry in South Africa. Being a member signifies adherence to a strict code of conduct and industry standards, providing peace of mind to clients and protecting their rights.
              </Typography>
            </TextContainer>
          </BannerCard>
        </Container>
      </BannerWrapper>
    </motion.div>
  );
};

export default SAIABanner;