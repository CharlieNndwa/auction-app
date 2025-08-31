import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styled from 'styled-components';

// Styled Components
const LiveUpdatesContainer = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 300px;
  overflow-y: scroll;
  position: relative;
  
  .updates-heading {
    font-size: 1.5rem;
    color: #0a0044c3;
    font-weight: bold;
    margin-bottom: 15px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;
  }

  .update-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    color: #333;

    &:last-child {
      border-bottom: none;
    }
  }

  .bid-update {
    font-weight: bold;
    color: #0a0044c3;
  }
  
  .announcement-update {
    font-style: italic;
    color: #777;
  }
`;

const LiveUpdates = ({ updates }) => {
  return (
    <LiveUpdatesContainer>
      <h3 className="updates-heading">Live Updates</h3>
      {updates.map((update, index) => (
        <div key={index} className={`update-item ${update.type}-update`}>
          {update.message}
        </div>
      ))}
    </LiveUpdatesContainer>
  );
};

LiveUpdates.propTypes = {
  updates: PropTypes.array.isRequired,
};

export default LiveUpdates;