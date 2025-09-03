import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import valuesImage from '../../assets/v.jpg'

// Styled Components for custom styling
const PhilosophySection = styled(Box)`
  background-color: #f5f5f5;
  padding: 60px 0;
  text-align: center;
`;

const SectionHeader = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 12px;
  height: 100%; // Ensures all cards have the same height

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Philosophy = () => {
  const philosophyItems = [
    {
      title: "Our Mission",
      description: "To simplify the auctioning of movable and immovable assets in the most professional way possible in order to win the confidence of clients and buyers and to realize the best value in the most efficient manner.",
      image: 'https://media.citizen.co.za/wp-content/uploads/2024/06/Auction-Warehouse.jpg',
    },
    {
      title: "Our Vision",
      description: "To become a single professional service for all your needs – To be the preferred auctioneer in Limpopo and beyond.",
      image: "https://www.chorleyauctions.uk/wp-content/uploads/2025/04/view-3d-gavel-lawyer-s-day.webp",
    },
    {
      title: "Our Values",
      // Use an array for the values to display them as a list
      values: ["Integrity", "Ethics", "Client focus", "Efficiency"],
      image: valuesImage,
    },
  ];

  return (
    <PhilosophySection>
      <Container maxWidth="lg">
        <SectionHeader variant="h2">Our Philosophy</SectionHeader>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {philosophyItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <StyledCard>
                    <StyledCardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                        {item.title}
                      </Typography>
                      {/* Conditionally render based on whether it's a description or a list of values */}
                      {item.description ? (
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      ) : (
                        <List dense>
                          {item.values.map((value, idx) => (
                            <ListItem key={idx} disablePadding>
                              <ListItemText primary={`• ${value}`} />
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </PhilosophySection>
  );
};

export default Philosophy;