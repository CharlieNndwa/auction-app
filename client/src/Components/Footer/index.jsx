import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/z.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../assets/ntiranoo.png";
import { Link } from "react-router-dom";

const BacgroundImage = styled.div`
  position: relative;
  width: 100%;
  // Adjusted height for better spacing
  height: auto; 
  padding: 50px 0;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const LogoSize = styled.div`
  & img {
    width: 120px;
    height: 100px;
    object-fit: contain;
  }
`;

const StyledItem = styled.li`
  list-style-type: none;
  padding: 5px 0;
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ffd700;
  }
`;

const Footer = () => {
  return (
    <Box mt={{ xs: "100px", md: "0px" }}>
      <BacgroundImage>
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {/* Contact Info Section */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {/* Removed absolute positioning */}
              <LogoSize>
                <img src={logo} alt="Ntiranoo Logo" />
              </LogoSize>
              <Box sx={{ color: "#ebebeb", mt: 2 }}>
                <Typography>Address: 427 Rapitsi Village, Limpopo</Typography>
                <Typography>Tel: 015 001 1117</Typography>
                <Typography>Cel: 079 297 9852</Typography>
                <Typography>Email: pontsho@ntirano.co.za</Typography>
              </Box>
            </Grid>

            {/* Links Section */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {/* Removed absolute positioning */}
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  mb: 2,
                }}
              >
                Links
              </Typography>
              <StyledUl>
                <StyledItem>
                  <StyledLinks to="/">Home</StyledLinks>
                </StyledItem>
                <StyledItem>
                  <StyledLinks to="/about">About</StyledLinks>
                </StyledItem>
                <StyledItem>
                  <StyledLinks to="/projects">Projects</StyledLinks>
                </StyledItem>
                <StyledItem>
                  <StyledLinks to="/our-services">Services</StyledLinks>
                </StyledItem>
                <StyledItem>
                  <StyledLinks to="/contact">Contact</StyledLinks>
                </StyledItem>
              </StyledUl>
            </Grid>

            {/* Copyright Section */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "flex-start" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              {/* Removed absolute positioning */}
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "400",
                  mb: 2,
                }}
              >
                Copyright
              </Typography>
              <Typography sx={{ color: "white" }}>
                Copyright © 2025 | NTIRANO AUCTIONEERS
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </BacgroundImage>
    </Box>
  );
};

export default Footer;