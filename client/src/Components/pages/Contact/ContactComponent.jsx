import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import GoogleMap from '../../GoogleMap';
import styled from 'styled-components';
import "./contact.scss";
import logo from "../../../assets/ntiranoo.png";

// Import the icons you want to use
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const StyledIconWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin: 10px 0;
    
    .icon {
        color: #333;
        transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
        font-size: 1.5rem;
    }
    
    &:hover .icon {
        color: #6c5dd3;
        text-shadow: 0 0 5px rgba(108, 93, 211, 0.5), 0 0 10px rgba(108, 93, 211, 0.3);
    }
    
    .text {
        font-size: 1.125rem;
        color: #222;
    }
`;

const ContactComponent = () => {
    return (
        <Box mt={5} mb="100px">
            <Container>
                <Box>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        CONTACT
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ textTransform: "uppercase", color: "#888", fontSize: "11px", fontWeight: "400", marginBottom: "20px" }}>
                        Let's work with us
                    </Typography>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        Together we can make dreams come true
                    </Typography>
                </Box>
                <GoogleMap />

                <Box>
                    <Grid container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}>
                        <Grid item lg={4} md={6} sm={8} xs={12} mb="20px">
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                alignItems: "center",
                                textAlign: "center",
                            }}>
                                <StyledIconWrapper>
                                    <FaMapMarkerAlt className="icon" />
                                    <Typography className="text">
                                        Limpopo
                                    </Typography>
                                </StyledIconWrapper>
                                <StyledIconWrapper>
                                    <FaPhone className="icon" />
                                    <Typography className="text">
                                        079 297 9852
                                    </Typography>
                                </StyledIconWrapper>
                                <StyledIconWrapper>
                                    <FaPhone className="icon" />
                                    <Typography className="text">
                                        015 001 1117
                                    </Typography>
                                </StyledIconWrapper>
                                <StyledIconWrapper>
                                    <FaEnvelope className="icon" />
                                    <Typography className="text">
                                        pontsho@ntirano.co.za
                                    </Typography>
                                </StyledIconWrapper>
                                <Box mt={4}>
                                    <img src={logo} alt="Ntiranoo logo" style={{ width: '150px' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactComponent;