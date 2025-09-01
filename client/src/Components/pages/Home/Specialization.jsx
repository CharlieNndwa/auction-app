
import React from 'react';
import { Box, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons';

import "./BiddingProcedure.scss";

const BiddingProcedure = () => {
    return (
        <Box className="bidding-procedure-section">
            <Container>
                <h2 className="bidding-procedure-heading">Bidding Procedure:</h2>
                <Box className="bidding-procedure-cards">
                    <Box className="bidding-procedure-card">
                        <FontAwesomeIcon icon={faGavel} className="card-icon" />
                        <h3 className="card-title">Register & Verify</h3>
                        <p className="card-description">
                            Before bidding, you must register and get verified. This process ensures the security and integrity of all auctions. Once verified, you will be able to place bids.
                        </p>
                    </Box>
                    <Box className="bidding-procedure-card">
                        <FontAwesomeIcon icon={faClock} className="card-icon" />
                        <h3 className="card-title">Place Your Bid</h3>
                        <p className="card-description">
                            You can bid in timed online auctions or real-time webcasts. In timed auctions, you have until the closing time to place your bid. The highest bid at the end of the auction wins the item.
                        </p>
                    </Box>
                    <Box className="bidding-procedure-card">
                        <FontAwesomeIcon icon={faHandshake} className="card-icon" />
                        <h3 className="card-title">Payment & Collection</h3>
                        <p className="card-description">
                            If your bid is successful, you will receive an invoice. After payment is confirmed, you will receive instructions to collect or receive your item, completing the transaction.
                        </p>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BiddingProcedure;