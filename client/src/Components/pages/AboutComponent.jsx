import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Typography, Box, Grid } from "@mui/material";



// Styled Components
const AboutWrapper = styled(Box)`
  padding: 2rem 0;
  background-color: #f9fafb;
`;

const SectionContainer = styled(Container)`
  padding: 3rem 1rem;
`;

const SectionHeader = styled(Typography)`
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a202c;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #2c5282;
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

const FeatureCard = styled(Box)`
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const GallerySection = styled(Box)`
  padding: 3rem 1rem;
  background: #f1f5f9;
`;

const ImageRow = styled(Box)`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem; // Prevents content from being hidden behind scrollbar

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
`;

const GalleryImage = styled.img`
  flex-shrink: 0;
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = () => {
  const images = [
    "https://cdn.corporatefinanceinstitute.com/assets/auction.jpeg",
    "https://judicateme.com/wp-content/uploads/2020/06/Auction-Sale-JudicateMe.jpg",
    "https://www.in2assets.co.za/uploads/blogs/1750413550-1665630122/image_the-true-value-of-auctions_O2WhcGkPQuse.jpg",
    "https://cdn.lawnet.vn/uploads/tintuc/2022/11/22/hinh-thuc-dau-gia-tai-san.png",
    "https://media.citizen.co.za/wp-content/uploads/2024/06/Auction-Warehouse.jpg",
  ];

  const scrollLeft = () => {
    document.getElementById("imageRow").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("imageRow").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <AboutWrapper>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionContainer maxWidth="lg">
          <SectionHeader variant="h3">About Ntirano Auctioneers</SectionHeader>
          <Typography variant="body1" align="center" color="text.secondary" mb={5}>
            Ntirano Auctioneers is a trusted leader in the auction industry, delivering seamless, transparent, and professional services for buyers and sellers across South Africa. With years of combined expertise, our mission is to ensure that every transaction is conducted with integrity, efficiency, and unmatched service excellence.
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {/* "Who We Are" Section */}
            <Grid item xs={12} md={6}>
              <Box mb={4}>
                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ntirano Auctioneers is a **level 1 contributor company** established in **2018** and situated at **Stand Number 427, Rapitsi Village in Limpopo**. Our core business services cover all aspects of the auction from liquidations, valuations and storage, with expertise in Asset disposals of movable assets and members of the Estate Agency Affairs Board with valid Fidelity Fund certificate. We pride ourselves with efficient, professional and ethical service to our clients.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: '100%', height: 'auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <img src="https://cdn.corporatefinanceinstitute.com/assets/auction.jpeg" alt="Ntirano team" style={{ width: '100%', display: 'block' }} />
              </Box>
            </Grid>
          </Grid>
        </SectionContainer>
 


        <GallerySection>
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5" fontWeight="bold">Our Work in Action</Typography>
              <Box>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollLeft} style={{ marginRight: '1rem' }}>◀</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollRight}>▶</motion.button>
              </Box>
            </Box>
            <ImageRow id="imageRow">
              {images.map((src, idx) => (
                <GalleryImage key={idx} src={src} alt={`Ntirano auction ${idx + 1}`} />
              ))}
            </ImageRow>
          </Container>
        </GallerySection>
      </motion.div>
    </AboutWrapper>
  );
};

export default About;