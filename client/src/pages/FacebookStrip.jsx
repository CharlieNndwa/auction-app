import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';

const FacebookStripContainer = styled(Box)`
    background-color: #f5f5f5; 
    padding: 20px 0; 
    text-align: center;
`;

const FacebookStripContent = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FacebookStripText = styled(Typography)`
    font-size: 1rem;
    color: #333;
    font-weight: 500;
    
    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

const FacebookIconWrapper = styled(Box)`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const FacebookStrip = () => {
    return (
        <FacebookStripContainer>
            <FacebookStripContent maxWidth="lg">
                <FacebookIconWrapper>
                    <FacebookStripText variant="body1">
                        Please visit our facebook page for more information
                    </FacebookStripText>
                    <FaFacebook size={24} color="#3b5998" />
                </FacebookIconWrapper>
            </FacebookStripContent>
        </FacebookStripContainer>
    );
};

export default FacebookStrip;