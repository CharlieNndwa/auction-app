import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Box } from "@mui/material";

// Import the Facebook logo images
import facebookLogo from "../../../assets/Screenshot (530).png"; // Make sure this path is correct
import facebookIcon from "../../../assets/fb-removebg-preview.png"; // Same icon for the glowing effect

// Styled Components
const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 40px 0;
  font-family: "Arial", sans-serif;
`;

const BackButton = styled(motion.button)`
  background-color: #008000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006400;
  }
`;

const DetailsCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const InfoIcon = styled.div`
  color: #008000;
  font-size: 2rem;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    color: #555;
  }
`;

const GallerySection = styled(motion.section)`
  padding: 3rem 0;
  background-color: #f9f9f9;
  .gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .scroll-buttons button {
      margin-left: 0.5rem;
      background: #008000; /* Dark green */
      color: #fff;
      border: none;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      border-radius: 8px;
      transition: background 0.3s;

      &:hover {
        background: #006400; /* Darker green */
      }
    }
  }

  .image-row {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;

    img {
      flex-shrink: 0;
      width: 280px;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  /* Hide scrollbar */
  .image-row::-webkit-scrollbar {
    display: none;
  }
`;

const DescriptionSection = styled.div`
  background-color: #f8f8f8;
  padding: 25px;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #008000;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center; // Center the title
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

// New Styled Components for Facebook Timeline Card with Magic Glow
const MagicGlowCard = styled(motion.div)`
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #4267b2, #1877f2, #4c4cff, #4267b2);
    background-size: 400%;
    border-radius: 20px;
    opacity: 0.6;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.3s ease;
    animation: magic-glow 15s linear infinite;
  }

  @keyframes magic-glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const FacebookTimelineWrapper = styled.div`
  width: 100%;
  max-width: 400px; // Scaled down
  margin: 0 auto;
  text-align: center; // Center the content
`;

const FacebookImageTitle = styled.img`
  width: 250px; // Adjust size as needed
  margin-bottom: 20px;
  display: block; // Ensures centering with margin: auto
  margin-left: auto;
  margin-right: auto;
`;

const SocialIcon = styled(motion.a)`
  display: inline-block;
  cursor: pointer;

  img {
    width: 70px;
    height: auto;
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px #4267b2) drop-shadow(0 0 25px #4267b2);
  }
`;

const EventDetails = ({ auctions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const imageRowRef = useRef(null); // Add this line

  useEffect(() => {
    // In a real app, you would fetch data from your API here
    const foundItem = auctions.find((auction) => auction._id === id);
    setItem(foundItem);
  }, [id, auctions]);

  // Add these two functions
  const scrollLeft = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!item) {
    return <p>Loading auction details...</p>;
  }

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <BackButton onClick={() => navigate(-1)} whileHover={{ scale: 1.05 }}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Go Back
        </BackButton>

        <DetailsCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Title>{item.title}</Title>
          <MainImage src={item.images[0]} alt={item.title} />

          <InfoGrid>
            <InfoBox>
              <InfoIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </InfoIcon>
              <InfoText>
                <span>Venue</span>
                <p>{item.venue}</p>
              </InfoText>
            </InfoBox>
            <InfoBox>
              <InfoIcon>
                <FontAwesomeIcon icon={faClock} />
              </InfoIcon>
              <InfoText>
                <span>Time</span>
                <p>{item.time}</p>
              </InfoText>
            </InfoBox>
            <InfoBox>
              <InfoIcon>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InfoIcon>
              <InfoText>
                <span>Closes</span>
                <p>{item.closes}</p>
              </InfoText>
            </InfoBox>
          </InfoGrid>

          <DescriptionSection>
            <SectionTitle>Description</SectionTitle>
            <DescriptionText>{item.description}</DescriptionText>
          </DescriptionSection>
        </DetailsCard>

        {item.images.length > 0 && (
          <GallerySection>
            <div className="gallery-header">
              <h2>Image Gallery</h2>
              <div className="scroll-buttons">
                <button onClick={scrollLeft}>◀</button>
                <button onClick={scrollRight}>▶</button>
              </div>
            </div>
            <div className="image-row" ref={imageRowRef}>
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                />
              ))}
            </div>
          </GallerySection>
        )}

        {/* New Facebook Timeline Card */}
        <MagicGlowCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FacebookTimelineWrapper>
            <FacebookImageTitle
              src={facebookLogo}
              alt="NTIRANO Facebook Page"
            />

            <br />
            <SocialIcon
              href="https://www.facebook.com/ntirano.auctioneers"
              target="_blank"
              whileHover={{
                scale: 1.2,
                textShadow: "0 0 10px #4267B2, 0 0 20px #4267B2",
              }}
              transition={{ duration: 0.3 }}
            >
              <img src={facebookIcon} alt="facebook" />
            </SocialIcon>
          </FacebookTimelineWrapper>
        </MagicGlowCard>
      </Container>
    </PageContainer>
  );
};

export default EventDetails;
