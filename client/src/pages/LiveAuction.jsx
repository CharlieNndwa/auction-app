import React from 'react';
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import LotDisplay from './LotDisplay';
import BiddingPanel from './BiddingPanel';
import LiveUpdates from './LiveUpdates';
import './LiveAuction.scss';

// Styled Components for consistent styling
const LiveAuctionPage = styled(Box)`
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 40px 0;
  }
`;

const LotSection = styled(Box)`
  flex: 3;
`;

const RightPanel = styled(Box)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Sample live data (would be replaced by WebSocket updates)
const currentLot = {
  id: 1,
  title: 'Rare Diamond Necklace',
  description: 'A magnificent necklace with a 50-carat flawless diamond, set in platinum.',
  images: [
    'https://images.unsplash.com/photo-1599643478518-a7840b931698?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628173429986-e417088b6883?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  currentBid: 5500000,
  nextBid: 5600000,
  highestBidder: 'John D.',
};

// Sample live updates (would be replaced by WebSocket updates)
const liveUpdates = [
  { message: 'A new bid of R5,600,000 has been placed!', type: 'bid' },
  { message: 'Lot 1 is now open for bidding!', type: 'announcement' },
  { message: 'A new bid of R5,500,000 has been placed!', type: 'bid' },
  { message: 'Bidding is heating up for this magnificent piece!', type: 'announcement' },
];

const LiveAuction = () => {
  return (
    <LiveAuctionPage>
      <Container>
        <MainContent>
          <LotSection>
            <LotDisplay lot={currentLot} />
          </LotSection>
          <RightPanel>
            <BiddingPanel currentLot={currentLot} />
            <LiveUpdates updates={liveUpdates} />
          </RightPanel>
        </MainContent>
      </Container>
    </LiveAuctionPage>
  );
};

export default LiveAuction;