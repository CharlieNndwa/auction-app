import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Added faPhoneAlt
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import locationIcon from '../assets/your-location-icon.png'; // Make sure this path is correct

// Styled Components for the Modal
const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled(motion.div)`
    background: #f0f0f0; /* Grey background */
    color: #000; /* Black text */
    padding: 2.5rem 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: #555; /* Dark grey close button */
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
        color: #000;
    }
`;

const ModalHeader = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #000; /* Black text */
`;

const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
`;

const ContactDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    color: #000; /* Black text */
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
`;

const ContactIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 50%;
    
    img {
        width: 20px;
        height: 20px;
        filter: invert(1);
    }
`;

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ModalContent
                initial={{ scale: 0.9, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -50 }}
            >
                <CloseButton onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                
                <ModalHeader>
                    Feel free to contact us.
                </ModalHeader>

                <ContactInfoContainer>
                    <ContactDetail>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        <p>pontsho@ntirano.co.za</p>
                    </ContactDetail>
                    <ContactDetail>
                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                        <p>+27 79 297 9852</p>
                    </ContactDetail>
                    
                </ContactInfoContainer>

                <IconWrapper>
                    <ContactIcon>
                        <img src={locationIcon} alt="Location Icon" />
                    </ContactIcon>
                    <ContactDetail>
                        <p>Limpopo, Polokwane</p>
                    </ContactDetail>
                </IconWrapper>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ContactModal;