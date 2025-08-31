import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, CircularProgress, Typography } from '@mui/material';
import styled from 'styled-components';
import ImageGallery from './ImageGallery';
import ItemInfo from './ItemInfo';
import './ItemDetails.scss';

// Styled Components
const ItemDetailsPage = styled(Box)`
  padding: 20px 0;
  background-color: #f0f0f0;

  @media (min-width: 1024px) {
    padding: 40px 0;
  }
`;

const ItemContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const GallerySection = styled(Box)`
  flex: 3;
`;

const InfoSection = styled(Box)`
  flex: 2;
`;

// Sample data (replace with an API call)
const sampleItem = {
  id: 'item123',
  title: 'Vintage Rolex Daytona "Paul Newman"',
  images: [
    'https://images.unsplash.com/photo-1628173429986-e417088b6883?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1599643478518-a7840b931698?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1599643478518-a7840b931698?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1599643478518-a7840b931698?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  videos: [
    // Video URLs here
  ],
  description: `A highly sought-after reference 6263, this watch features a rare "Paul Newman" dial with distinctive Art Deco-style font. The watch is in exceptional condition, with a perfectly preserved dial and a crisp stainless steel case.
  
  **Condition Report:** Excellent. The case shows minimal signs of wear. The dial is flawless with no scratches or fading. The movement has been recently serviced and is in perfect working order.
  
  **Provenance:** Acquired from a private collection in Switzerland.`,
  specifications: [
    { label: 'Brand', value: 'Rolex' },
    { label: 'Model', value: 'Daytona Ref. 6263' },
    { label: 'Year', value: 'c. 1970' },
    { label: 'Material', value: 'Stainless Steel' },
    { label: 'Movement', value: 'Manual-winding' },
  ],
  estimatedPrice: 'R5,000,000 - R7,000,000',
  auctionDetails: {
    date: 'August 30, 2025',
    time: '14:00 SAST',
    location: 'Sandton, Johannesburg',
  },
};

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch data here
    // e.g., axios.get(`/api/auction/items/${id}`).then(res => setItem(res.data));
    setTimeout(() => {
      setItem(sampleItem);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!item) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5">Item not found.</Typography>
      </Box>
    );
  }

  return (
    <ItemDetailsPage>
      <Container>
        <ItemContent>
          <GallerySection>
            <ImageGallery images={item.images} videos={item.videos} />
          </GallerySection>
          <InfoSection>
            <ItemInfo item={item} />
          </InfoSection>
        </ItemContent>
      </Container>
    </ItemDetailsPage>
  );
};

export default ItemDetails;