import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled Components
const LotDisplayContainer = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  .lot-title {
    font-size: 2rem;
    color: #0a0044c3;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  .lot-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 40px;
    .lot-title {
      font-size: 2.5rem;
    }
  }
`;

const ImageGallery = styled(Box)`
  .slick-list {
    margin: 0 -5px;
  }

  .slick-slide > div {
    padding: 0 5px;
  }

  .lot-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  // Custom Slick navigation arrows
  .slick-prev:before, .slick-next:before {
    color: #0a0044c3;
    font-size: 30px;
  }

  .slick-dots li button:before {
    color: #0a0044c3;
  }
`;

const LotDisplay = ({ lot }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <LotDisplayContainer>
      <h2 className="lot-title">{lot.title}</h2>
      <p className="lot-description">{lot.description}</p>
      <ImageGallery>
        <Slider {...sliderSettings}>
          {lot.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`${lot.title} - ${index + 1}`} className="lot-image" />
            </div>
          ))}
        </Slider>
      </ImageGallery>
    </LotDisplayContainer>
  );
};

LotDisplay.propTypes = {
  lot: PropTypes.object.isRequired,
};

export default LotDisplay;