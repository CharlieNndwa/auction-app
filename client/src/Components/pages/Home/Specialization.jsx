
import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import experienceImage from "../../../assets/exp.jpg";
import teamImage from "../../../assets/teams.jpg";
import membershipImage from "../../../assets/auc.jpg";


// Styled Components for custom styling
const SpecializationSection = styled(Box)`
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

const Specialization = () => {
  const specializations = [
    {
      title: "Experience",
      description: "Over the years, we have provided Auctioneer services to various clients such as big corporates, transport companies and law firms.",
      image: experienceImage,
    },
    {
      title: "Team",
      description: "We are experts in the field of Auctioneering. Our company believes in women empowerment and our staff is predominantly female.",
      image: teamImage,
    },
    {
      title: "Membership",
      description: "Member of the South African Institute of Auctioneers (SAIA) & Member of the Limpopo Chamber of Commerce and Industry (LCCI).",
      image: membershipImage,
    },
  ];

  return (
    <SpecializationSection>
      <Container maxWidth="lg">
        <SectionHeader variant="h2">Our Specializations</SectionHeader>
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
            {specializations.map((spec, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <StyledCard>
                    <StyledCardMedia
                      component="img"
                      image={spec.image}
                      alt={spec.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                        {spec.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {spec.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SpecializationSection>
  );
};

export default Specialization;