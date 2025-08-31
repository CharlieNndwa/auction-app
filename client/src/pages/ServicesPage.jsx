import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBullhorn, faChartLine, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './ServicesPage.scss'; // SCSS for general styles
import { ServiceCard, HeroContainer, SectionHeading } from './ServicesPage.styled';

const servicesData = [
    {
        icon: faGavel,
        title: "Auction Management",
        description: "From start to finish, we manage the entire auction process. Our team handles item cataloging, marketing, live bidding, and post-sale logistics to ensure a seamless and successful event."
    },
    {
        icon: faBullhorn,
        title: "Targeted Marketing",
        description: "We reach the right buyers for your assets. Our strategic marketing campaigns utilize online platforms, industry networks, and targeted advertising to maximize visibility and competitive bidding."
    },
    {
        icon: faChartLine,
        title: "Professional Valuations",
        description: "Our accredited valuers provide accurate, market-based appraisals for your assets, whether it's for auction, liquidation, or insurance purposes. Get a true sense of your item's worth."
    },
    {
        icon: faBalanceScale,
        title: "Asset Liquidation",
        description: "Need to liquidate business or personal assets? We offer efficient and transparent liquidation services, providing a trusted platform to sell machinery, real estate, and more."
    }
];

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

const ServicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="services-page">
            {/* Hero Section */}
            <HeroContainer>
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeIn}>Our Auction Services</motion.h1>
                    {/* The descriptive paragraph has been removed */}
                    
                    <motion.button 
                        variants={fadeIn}
                        className="cta-button" 
                        onClick={openModal}>
                        Request a Free Consultation
                    </motion.button>
                </motion.div>
            </HeroContainer>

            {/* Services Section */}
            <div className="services-section">
                <motion.h2 variants={fadeIn} initial="hidden" animate="show" className="section-heading">
                    Comprehensive Solutions for Your Assets
                </motion.h2>
                <motion.div 
                    className="services-grid"
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} as={motion.div} variants={fadeIn}>
                            <FontAwesomeIcon icon={service.icon} size="3x" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </ServiceCard>
                    ))}
                </motion.div>
            </div>

            {/* Final Call to Action */}
            <div className="cta-section">
                <SectionHeading className="section-heading">
                    Ready to Start?
                </SectionHeading>
                <p>Contact us today to discuss how we can help you with your auction needs.</p>
                <button className="cta-button" onClick={openModal}>
                    Get in Touch
                </button>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ServicesPage;