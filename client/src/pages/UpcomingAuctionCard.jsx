import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CountdownTimer from './CountdownTimer';

const UpcomingAuctionCard = ({ auction }) => {
  return (
    <Box className="upcoming-auction-card__item">
      <div className="upcoming-auction-card__image-wrapper">
        <img src={auction.image} alt={auction.title} className="upcoming-auction-card__image" />
      </div>
      <div className="upcoming-auction-card__content">
        <h3 className="upcoming-auction-card__title">{auction.title}</h3>
        <p className="upcoming-auction-card__details">{auction.description}</p>
        <div className="upcoming-auction-card__countdown">
          <CountdownTimer auctionDate={auction.auctionDate} />
        </div>
        <button className="upcoming-auction-card__btn">View Details</button>
      </div>
    </Box>
  );
};

UpcomingAuctionCard.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    auctionDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpcomingAuctionCard;