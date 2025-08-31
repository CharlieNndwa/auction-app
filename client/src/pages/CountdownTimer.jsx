import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ auctionDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const futureDate = new Date(auctionDate).getTime();
    const distance = futureDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [auctionDate]);

  if (timeRemaining.expired) {
    return <span className="countdown__expired">Auction has started!</span>;
  }

  return (
    <div className="countdown__timer">
      <div className="time-segment">
        <span className="time-value">{timeRemaining.days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeRemaining.hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeRemaining.minutes}</span>
        <span className="time-label">Mins</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeRemaining.seconds}</span>
        <span className="time-label">Secs</span>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  auctionDate: PropTypes.string.isRequired,
};

export default CountdownTimer;