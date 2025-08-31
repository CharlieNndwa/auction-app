import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import styled from 'styled-components';

// Styled Components
const BiddingPanelContainer = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  
  .bid-heading {
    font-size: 1.5rem;
    color: #0a0044c3;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .bid-info {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  .current-bid {
    font-size: 2.2rem;
    font-weight: bold;
    color: #FFD700;
  }

  .next-bid {
    font-size: 1.2rem;
    color: #555;
  }

  .bid-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
`;

const PlaceBidButton = styled(Button)`
  && {
    background-color: #FFD700;
    color: #000;
    font-weight: bold;
    &:hover {
      background-color: #e6c200;
    }
  }
`;

const QuickBidButton = styled(Button)`
  && {
    background-color: #0a0044c3;
    color: #fff;
    &:hover {
      background-color: darken(#0a0044c3, 10%);
    }
  }
`;

const BiddingPanel = ({ currentLot }) => {
  const [bidAmount, setBidAmount] = useState(currentLot.nextBid);

  const formatCurrency = (amount) => {
    return `R${amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' }).replace('ZAR', '').trim()}`;
  };

  const handlePlaceBid = () => {
    console.log(`Placing bid of ${formatCurrency(bidAmount)}`);
    // Logic to send bid to back-end via WebSocket
  };

  const handleQuickBid = () => {
    setBidAmount(currentLot.nextBid);
    console.log(`Placing quick bid of ${formatCurrency(currentLot.nextBid)}`);
    // Logic to send quick bid to back-end via WebSocket
  };

  return (
    <BiddingPanelContainer>
      <h3 className="bid-heading">Live Bidding</h3>
      <Box className="bid-info">
        <p>Current Bid:</p>
        <span className="current-bid">{formatCurrency(currentLot.currentBid)}</span>
      </Box>
      <Box className="bid-info">
        <p>Highest Bidder: {currentLot.highestBidder}</p>
        <p className="next-bid">Next Bid: {formatCurrency(currentLot.nextBid)}</p>
      </Box>

      <Box className="bid-form">
        <TextField
          label="Your Bid"
          variant="outlined"
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <QuickBidButton onClick={handleQuickBid} variant="contained" fullWidth>
          Quick Bid ({formatCurrency(currentLot.nextBid)})
        </QuickBidButton>
        <PlaceBidButton onClick={handlePlaceBid} variant="contained" fullWidth>
          Place Bid
        </PlaceBidButton>
      </Box>
    </BiddingPanelContainer>
  );
};

BiddingPanel.propTypes = {
  currentLot: PropTypes.object.isRequired,
};

export default BiddingPanel;