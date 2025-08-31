import { Box, Container, Grid } from '@mui/material';
import React from 'react';
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
                                The Trusted Partner for Government and Corporate Auctions
                            </Box>
                            <Box mt={2} textAlign="justify" className="about-paragraph">
                                Ntirano Auctioneers is a leading name in the auction industry, specializing in the sale of assets for government entities and major corporations. As your trusted partner, we provide end-to-end auction solutions, from expert valuation to the final sale. We meticulously advertise and market all auctions across various channels to ensure maximum reach and optimal returns. Our commitment to professionalism and transparency makes us the first choice for clients seeking to efficiently manage their assets.
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
    );
}

export default Client;