import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled Components
const GalleryContainer = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const MainImageSlider = styled(Slider)`
  .slick-slide {
    padding: 10px;
    outline: none;
  }
  .main-image {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const ThumbnailSlider = styled(Slider)`
  margin-top: 15px;
  .slick-slide {
    padding: 0 5px;
    outline: none;
    cursor: pointer;
  }
  .thumbnail {
    width: 100%;
    height: auto;
    border-radius: 5px;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    &.slick-current {
      opacity: 1;
      border: 2px solid #0a0044c3;
    }
  }
`;

const ImageGallery = ({ images, videos }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = [];
  let slider2 = [];

  const mainSettings = {
    asNavFor: nav2,
    ref: slider => (slider1 = slider),
    arrows: true,
    infinite: true,
    fade: true,
  };

  const thumbnailSettings = {
    asNavFor: nav1,
    ref: slider => (slider2 = slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

  return (
    <GalleryContainer>
      <MainImageSlider {...mainSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Auction Item ${index + 1}`} className="main-image" />
          </div>
        ))}
      </MainImageSlider>
      <ThumbnailSlider {...thumbnailSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
          </div>
        ))}
      </ThumbnailSlider>
    </GalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
};

export default ImageGallery;