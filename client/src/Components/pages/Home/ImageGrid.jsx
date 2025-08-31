import { Box, Container, Grid } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Import your new image files here
import image1 from '../../../assets/exca.jpg';
import image2 from '../../../assets/ad.jpg';
import image3 from '../../../assets/biden.jpg';
import image4 from '../../../assets/bkk.jpg';
import image5 from '../../../assets/mch.jpg';
import image6 from '../../../assets/hino.jpg';
import image7 from '../../../assets/ok.jpg';
import image8 from '../../../assets/heri.jpg';
import image9 from '../../../assets/tumb.jpg';
import image10 from '../../../assets/v.jpg';
import image11 from '../../../assets/ppii.jpg';
import image12 from '../../../assets/otf.jpg';
import image13 from '../../../assets/u.jpg';
import image14 from '../../../assets/sidecut.jpg';
import image15 from '../../../assets/b.jpg';
import image16 from '../../../assets/by.jpg';
import image17 from '../../../assets/n.jpg';
import image18 from '../../../assets/fn.jpg';
import image19 from '../../../assets/n.jpg';

// Define the data array with the new image imports
export const projectsData = [
    { id: 1, title: "Earth Moving Equipment", image: image1, link: "/projects/earth-moving-equipment" },
    { id: 2, title: "Vehicles", image: image18, link: "/projects/vehicles" },
    { id: 3, title: "Tipper Trucks", image: image17, link: "/projects/tipper-trucks" },
    { id: 4, title: "Watertanks", image: image4, link: "/projects/watertanks" },
    { id: 5, title: "Tractors", image: image5, link: "/projects/tractors" },
    { id: 6, title: "Truck", image: image6, link: "/projects/truck" },
    { id: 7, title: "Office Equipment and Furniture", image: image7, link: "/projects/office-equipment-and-furniture" },
    { id: 8, title: "Household Appliances", image: image8, link: "/projects/household-appliances" },
    { id: 9, title: "Computer Electronics Equipment", image: image9, link: "/projects/computer-electronics-equipment" },
    { id: 10, title: "Placeholder", image: image1, link: "/projects/placeholder" }, // Corrected empty object
];


const growBorder = keyframes`
    0% {
        width: 0;
        height: 0;
    }
    100% {
        width: 40%;
        height: 50%;
    }
`;

const ImageHover = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 100%; /* This creates the square aspect ratio */
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* This is key to fill the square without distorting */
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.2);
    }

    &:hover::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
        position: absolute;
    }

    .line {
        animation: none;
    }
    .line.active,
    .line.line-bottom {
        visibility: hidden;
        position: absolute;
        z-index: 2;
        width: 40%;
        height: 60%;
        margin: 10px;
    }

    &:hover .line.active,
    &:hover .line.line-bottom {
        opacity: 1;
        visibility: visible;
        animation: ${growBorder} 0.5s ease forwards;
    }

    .line.active {
        border-top: 1px solid white;
        border-left: 1px solid white;
        top: 20px;
        left: 20px;
    }

    .line-bottom {
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        bottom: 20px;
        right: 20px;
    }

    .info {
        display: none;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }

    &:hover .info {
        display: flex;
        flex-direction: column;
    }
`;

const ImageGrid = ({ projectsToDisplay }) => {
    return (
        <Box mb="100px">
            <Container>
                <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {projectsToDisplay
                        .filter(project => project.image && project.link) // Filter out any incomplete objects
                        .map((project) => (
                            <Grid item xs={12} lg={4} md={6} key={project.id}>
                                <Link to={project.link}>
                                    <ImageHover>
                                        <img src={project.image} alt={project.title} />
                                        <span className='line active'></span>
                                        <span className='line line-bottom'></span>
                                        <Box className='info'>
                                            <span style={{ fontSize: "30px" }} dangerouslySetInnerHTML={{ __html: project.title }}></span>
                                        </Box>
                                    </ImageHover>
                                </Link>
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImageGrid;