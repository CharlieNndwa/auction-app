import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../assets/ty.jpg";
import styled from 'styled-components';
import "./Client.scss";

const ClientImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Client = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box className="about-section" mt={5}>
        <Container maxWidth="lg">
          <Grid container
            spacing={3}
            sx={{ flexDirection: { xs: "column", lg: "row" }, display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={12} lg={6} className="about-content-wrapper">
              <Box className="about-content">
                <Box className="heading-sub">About Us</Box>
                <Box component="h1" className="heading-main">
                  Ntirano Auctioneers
                </Box>
                
                <Box mt={2} textAlign="justify" className="about-paragraph">
                  Ntirano Auctioneers is a **level 1 contributor company** established in **2018** and situated at **Stand Number 427, Rapitsi Village in Limpopo**. Our core business services cover all aspects of the auction from liquidations, valuations and storage, with expertise in Asset disposals of movable assets and members of the Estate Agency Affairs Board with valid Fidelity Fund certificate. We pride ourselves with efficient, professional and ethical service to our clients.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ height: "100%" }}>
              <ClientImage>
                <Box>
                  <img src={logo} alt="Ntirano Auctioneers" style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                  <span className='line active'></span>
                  <span className='line-2 line-bottom'></span>
                </Box>
              </ClientImage>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Client;