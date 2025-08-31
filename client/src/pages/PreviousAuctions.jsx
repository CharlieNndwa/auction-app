import React from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import "./PreviousAuctions.scss";
import drillRig1 from "../assets/yap.jpg";
import drillRig2 from "../assets/ooop.jpg";
import excavator1 from "../assets/rsd.jpg";
import excavator2 from "../assets/fn.jpg";

const auctionCards = [
  {
    id: 1,
    image: drillRig1,
    title: "Office Equipment & Appliances Auction",
    date: "June 2024"
  },
  {
    id: 2,
    image: drillRig2,
    title: "Earth Moving Equipment Auction",
    date: "May 2024"
  },
  {
    id: 3,
    image: excavator2,
    title: "Vehicle Fleet Auction",
    date: "April 2024"
  },
  {
    id: 4,
    image: excavator1,
    title: "Mining Equipment Auction",
    date: "March 2024"
  },
];

const PreviousAuctions = () => {
  return (
    <Box className="prev-auctions__container">
      <Container>
        <h2 className="prev-auctions__heading">Previous Auctions</h2>
        <p className="prev-auctions__subheading">
          A look back at some of our most successful sales.
        </p>

        {/* Auction Cards Grid */}
        <Grid container spacing={4} className="auction-cards__grid">
          {auctionCards.map((auction) => (
            <Grid item xs={12} sm={6} md={4} key={auction.id}>
              <Card className="auction-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={auction.image}
                  alt={auction.title}
                />
                <CardContent>
                  <Typography variant="h6">{auction.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {auction.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Past Events Section (Video Embed) */}
      <Box className="past-events__section">
        <Container className="video-embed__container">
          <h3 className="past-events__heading">Featured Video</h3>
          {/* Facebook Video Iframe */}
          <div className="video-responsive">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1470730770710334%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default PreviousAuctions;