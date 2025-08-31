import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Divider } from '@mui/material';
import styled from 'styled-components';

// Styled Components
const InfoContainer = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  .item-title {
    font-size: 2rem;
    color: #0a0044c3;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .est-price {
    font-size: 1.5rem;
    color: #FFD700;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .info-group {
    margin-bottom: 20px;
  }

  .info-heading {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0a0044c3;
    margin-bottom: 10px;
  }

  .buttons-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
  }
`;

const StyledButton = styled(Button)`
  && {
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 50px;
  }
`;

const WishlistButton = styled(StyledButton)`
  && {
    background-color: #0a0044c3;
    color: #fff;
    &:hover {
      background-color: darken(#0a0044c3, 10%);
    }
  }
`;

const RegisterButton = styled(StyledButton)`
  && {
    background-color: #FFD700;
    color: #000;
    &:hover {
      background-color: #e6c200;
    }
  }
`;

const ItemInfo = ({ item }) => {
  return (
    <InfoContainer>
      <Typography variant="h4" className="item-title">{item.title}</Typography>
      <Typography variant="h5" className="est-price">Est. {item.estimatedPrice}</Typography>
      
      <Divider sx={{ my: 2 }} />

      <Box className="info-group">
        <Typography variant="h6" className="info-heading">Description</Typography>
        <Typography variant="body1" whiteSpace="pre-wrap">{item.description}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      
      <Box className="info-group">
        <Typography variant="h6" className="info-heading">Specifications</Typography>
        {item.specifications.map((spec, index) => (
          <Typography key={index} variant="body2">
            <strong>{spec.label}:</strong> {spec.value}
          </Typography>
        ))}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box className="info-group">
        <Typography variant="h6" className="info-heading">Auction Details</Typography>
        <Typography variant="body2"><strong>Date:</strong> {item.auctionDetails.date}</Typography>
        <Typography variant="body2"><strong>Time:</strong> {item.auctionDetails.time}</Typography>
        <Typography variant="body2"><strong>Location:</strong> {item.auctionDetails.location}</Typography>
      </Box>

      <Box className="buttons-group">
        <WishlistButton variant="contained">Add to Wishlist</WishlistButton>
        <RegisterButton variant="contained">Register to Bid</RegisterButton>
      </Box>
    </InfoContainer>
  );
};

ItemInfo.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemInfo;