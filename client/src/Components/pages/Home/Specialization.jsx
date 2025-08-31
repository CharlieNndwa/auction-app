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
                            Before you can place a bid, you must register on our platform and complete the verification process. This ensures all participants are legitimate and secures the integrity of the auction. Once verified, you will be granted access to bid on all live and upcoming auctions.
                        </p>
                    </Box>
                    <Box className="bidding-procedure-card">
                        <FontAwesomeIcon icon={faClock} className="card-icon" />
                        <h3 className="card-title">Place Your Bid</h3>
                        <p className="card-description">
                            Auctions are conducted either as a timed online process or as a live webcast. For timed auctions, you can place bids up until the closing time. For live webcasts, bids are taken in real-time. The highest bid at the close of the auction wins the lot.
                        </p>
                    </Box>
                    <Box className="bidding-procedure-card">
                        <FontAwesomeIcon icon={faHandshake} className="card-icon" />
                        <h3 className="card-title">Payment & Collection</h3>
                        <p className="card-description">
                            If your bid is successful, you will receive a notification and an invoice. Payment must be made within the specified timeframe. Upon confirmation of payment, you will receive instructions for the collection or delivery of your item, finalizing the transaction.
                        </p>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BiddingProcedure;