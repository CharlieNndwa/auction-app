import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import local images directly
import image4 from "../assets/bkk.jpg";
import image5 from "../assets/mch.jpg";
import image6 from "../assets/hino.jpg";
import image7 from "../assets/ok.jpg";
import image8 from "../assets/heri.jpg";
import image9 from "../assets/tumb.jpg";
import image10 from "../assets/v.jpg";
import image11 from "../assets/ppii.jpg";
import image12 from "../assets/otf.jpg";
import image13 from "../assets/u.jpg";
import image14 from "../assets/sidecut.jpg";
import image15 from "../assets/b.jpg";
import image16 from "../assets/by.jpg";
import image17 from "../assets/n.jpg";
import image18 from "../assets/fn.jpg";
import image19 from "../assets/ggg.jpg";
import image20 from "../assets/jj.jpg";
import excavator1 from "../assets/rsd.jpg";
import drillRig1 from "../assets/yap.jpg";

import './ServicesPage.scss'; // SCSS for general styles
import { HeroContainer } from './ServicesPage.styled';

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

// Styled component for the button with the requested styles
const ActionButton = styled(motion.button)`
    background-color: #FFD700; /* Yellow background */
    color: white; /* White text */
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px; /* Rounded borders */
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 10px;

    &:hover {
        background-color: #e6b800; /* Darker yellow on hover */
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
    }

    @media (max-width: 600px) {
        width: 80%; /* Make buttons full-width on mobile */
        margin: 10px 0; /* Add vertical spacing between buttons */
    }
`;

const ButtonContainer = styled(motion.div)`
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column; /* Stack buttons vertically on small screens */
        align-items: center; /* Center buttons horizontally */
    }
`;

const HeroSection = () => {
    return (
        <div className="hero-section">
            <HeroContainer>
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeIn}>Ntirano Auctioneers</motion.h1>
                    <ButtonContainer variants={fadeIn}>
                        <ActionButton as={Link} to="/about">About Us</ActionButton>
                        <ActionButton as={Link} to="/our-services">Services</ActionButton>
                    </ButtonContainer>
                </motion.div>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;