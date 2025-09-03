// import { Box, Container, Grid } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import IRCON from "../../../assets/truck-icon.jpg";
// import ministria from "../../../assets/forklift.png";
// import Komuna from "../../../assets/vehicle-png-28802.png";
// import czechRepublic from "../../../assets/appliances.png";
// import topalWater from "../../../assets/electronics.png";

// import styled from 'styled-components';
// import "./Partners.scss"; // Link to the new SCSS file

// const images = [
//     {
//         id: 1,
//         image: IRCON
//     }, {
//         id: 2,
//         image: ministria
//     }, {
//         id: 3,
//         image: Komuna
//     }, {
//         id: 4,
//         image: czechRepublic
//     }, {
//         id: 5,
//         image: topalWater
//     }, 
// ];

// const StyledImageWrapper = styled.div`
//     position: relative;
//     width: 150px; // Fixed size for equal icons
//     height: 150px;
//     border-radius: 50%;
//     overflow: hidden;
//     margin: auto; // Center the container
//     cursor: pointer;
    
//     // This is the magic glow effect
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.2);
//     transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.05);
//         box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5);
//     }

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         filter: grayscale(100%);
//         transition: filter 0.3s ease-in-out;
//     }

//     &:hover img {
//         filter: grayscale(0%);
//     }
// `;

// const  = () => {
//     return (
//         <Box className="partners-section">
//             <Container>
//                 <Box className="category-heading-container">
//                     <h2>Our Categories</h2>
//                     <Box className="gradient-line"></Box>
//                 </Box>
//                 <Grid container spacing={4} className="partners-grid-container">
//                     {images.map((item) => (
//                         <Grid item xs={12} sm={6} md={3} lg={1.7} key={item.id} className="partners-grid-item">
//                             <StyledImageWrapper>
//                                 <Link to="/projects">
//                                     <img src={item.image} alt={item.image} />
//                                 </Link>
//                             </StyledImageWrapper>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default Partners;