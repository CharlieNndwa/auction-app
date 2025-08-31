import React from 'react';
import { Box, Container } from '@mui/material';
import "./SAIAStrip.scss";
import saiaLogo from "../assets/saia-removebg-preview.png"; // Placeholder path for the SAIA logo

const SAIAStrip = () => {
    return (
        <Box className="saia-strip-container">
            <Container maxWidth="lg" className="saia-strip-content">
                <Box className="saia-logo-wrapper">
                    <img src={saiaLogo} alt="SAIA Logo" className="saia-logo" />
                </Box>
                <span className="saia-text">
                    Ntirano Auctioneers is a proud member of the South African Institute of Auctioneers (SAIA).
                </span>
            </Container>
        </Box>
    );
};

export default SAIAStrip;