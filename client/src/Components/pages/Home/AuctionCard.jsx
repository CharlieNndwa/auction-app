import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link
import "./AuctionCard.scss";
import facebookIcon from '../../../assets/fb-removebg-preview.png';

// Styled Components
const AuctionTable = styled(motion.div)`
    background-color: #F8F8F8;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0; 
    border-bottom: 1px solid #E0E0E0;
    
    &:last-child {
        border-bottom: none;
    }
`;

const TableLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

const TableValue = styled.span`
    font-size: 14px;
    color: #555;
    text-align: right;
    word-break: break-word;
`;

const SocialIcon = styled(motion.a)`
    display: inline-block;
    cursor: pointer;
    
    img {
        width: 40px; 
        height: auto;
        transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover img {
        transform: scale(1.2);
        filter: drop-shadow(0 0 15px #4267B2) drop-shadow(0 0 25px #4267B2);
    }
`;

// New styled component for the "View More" button
const ViewMoreButton = styled(Link)`
    background-color: #008000;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    padding: 12px 24px;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    display: block; /* Make it a block element to center it */
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #006400;
    }
`;

const AuctionCard = ({ item, isLive, isPast, isUpcoming }) => {
    // Dynamic Heading Logic
    const getAuctionStatusHeading = () => {
        if (isLive) {
            return (
                <span className="live-status">
                    <span className="live-dot"></span>
                    Live / Webcast
                </span>
            );
        } else if (isPast) {
            return (
                <span className="past-status">
                    <span className="past-dot"></span>
                    Past Auctions
                </span>
            );
        } else if (isUpcoming) {
            return (
                <span className="upcoming-status">
                    <span className="upcoming-dot"></span>
                    Upcoming Auctions
                </span>
            );
        }
        return null;
    };

    return (
        <Container className="auction-card-container">
            <Box className="auction-card">
                <Box className="auction-card__top-banner">
                    <span className="badge-featured">★ Featured</span>
                    {getAuctionStatusHeading()}
                </Box>
                <Box className="auction-card__main-content">
                    <Box className="auction-card__single-image">
                        {item.images && item.images.length > 0 && (
                            <img 
                                src={item.images[0]} 
                                alt={item.title || "Auction item"} 
                                className="auction-card__img" 
                            />
                        )}
                    </Box>

                    <Box className="auction-card__details">
                        <AuctionTable
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <TableRow>
                                <TableLabel>Auction Title:</TableLabel>
                                <TableValue>{item.title}</TableValue>
                            </TableRow>
                            <TableRow>
                                <TableLabel>Venue:</TableLabel>
                                <TableValue>{item.venue}</TableValue>
                            </TableRow>
                            <TableRow>
                                <TableLabel>Time:</TableLabel>
                                <TableValue>{item.time}</TableValue>
                            </TableRow>
                            <TableRow>
                                <TableLabel>Closes:</TableLabel>
                                <TableValue>{item.closes}</TableValue>
                            </TableRow>
                        </AuctionTable>
                        
                        <br />

                        <div className="social-links" style={{ textAlign: "center" }}>
                            <SocialIcon 
                                href="https://www.facebook.com/ntirano.auctioneers" 
                                target="_blank"
                                whileHover={{ 
                                    scale: 1.2, 
                                    textShadow: '0 0 10px #4267B2, 0 0 20px #4267B2'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={facebookIcon} alt="facebook" />
                            </SocialIcon>
                        </div>
                        
                        {/* New View More button */}
                        <Box className="action-buttons">
                            <ViewMoreButton to={`/auction-details/${item._id}`}>
                                View More
                            </ViewMoreButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default AuctionCard;