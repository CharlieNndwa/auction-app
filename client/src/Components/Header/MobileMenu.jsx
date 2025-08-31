import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const MobileUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #5c5c5c;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const BussServMobMenu = styled.ul`
    display: flex;
    flex-direction: column;
    background: #5c5c5c;
    margin-left: 20px;
    padding: 0;
    list-style: none;
`;

const SecondList = styled.li`
    width: 100%;
    padding: 10px 25px 10px 15px;
    border-bottom: 1px solid #7a7a7a;
    
    &:hover {
        background-color: #7a7a7a;
    }

    & a {
        text-decoration: none;
        text-transform: uppercase;
        color: #FFD700;
        font-size: 13px;
        position: relative;
        width: 100%;
        display: block;
    }
`;

const OpenList = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: #FFD700;
    font-size: 13px;
    position: relative;
`;

const Column = styled.div`
    flex-direction: column;
    width: 100%;
`;

const MobileMenu = () => {
    const [isClickedBussines, setIsClickedBussines] = useState(false);
    const [isClickedService, setIsClickedService] = useState(false);
    const [isClickedAuctions, setIsClickedAuctions] = useState(false);

    // This function closes all dropdowns
    const handleLinkClick = () => {
        setIsClickedBussines(false);
        setIsClickedService(false);
        setIsClickedAuctions(false);
    };

    return (
        <Box>
            <Container>
                <MobileUl id="menu">
                    <Column>
                        <SecondList><Link to="/" onClick={handleLinkClick}>Home</Link></SecondList>
                        <SecondList><Link to="/about" onClick={handleLinkClick}>About</Link></SecondList>
                        <SecondList><Link to="/rules-of-auction" onClick={handleLinkClick}>Rules of Auction</Link></SecondList>
                        
                        {/* New Live Auctions Dropdown */}
                        <SecondList onClick={() => setIsClickedAuctions(!isClickedAuctions)}>
                            <OpenList>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    Live Auctions {isClickedAuctions ? <EventBusyIcon /> : <FontAwesomeIcon icon={faSquareCaretDown} style={{ fontSize: "20px", marginRight: "4px" }} />}
                                </Box>
                                {isClickedAuctions && (
                                    <Box>
                                        <BussServMobMenu>
                                            <SecondList><Link to="/upcoming-auctions" onClick={handleLinkClick}>Upcoming Auctions</Link></SecondList>
                                            <SecondList><Link to="/previous-auctions" onClick={handleLinkClick}>Previous Auctions</Link></SecondList>
                                        </BussServMobMenu>
                                    </Box>
                                )}
                            </OpenList>
                        </SecondList>

                        <SecondList><Link to="/bidding-process" onClick={handleLinkClick}>How to Bid</Link></SecondList>
                        
                       
                        
                        
                        <SecondList><Link to="/services" onClick={handleLinkClick}>Services</Link></SecondList>
                        <SecondList><Link to="/projects" onClick={handleLinkClick}>Projects</Link></SecondList>
                        <SecondList><Link to="/contact" onClick={handleLinkClick}>Contact</Link></SecondList>
                    </Column>
                </MobileUl>
            </Container>
        </Box>
    );
};

export default MobileMenu;