import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Example image imports
import img1 from "../../assets/z.jpg";
import img2 from "../../assets/k.jpg";
import img3 from "../../assets/ll.jpg";
import img4 from "../../assets/ghg.jpg";

// Styled Components
const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1rem;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  .heading-with-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    position: relative;
    padding-bottom: 0.5rem;

    h1 {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1f2937;
      position: relative;

      /* Unique underline */
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 5px;
        border-radius: 6px;
        background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
        animation: underlineSlide 3s infinite alternate;
      }
    }

    .heading-icon {
      width: 38px;
      height: 38px;
      object-fit: contain;
    }
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    color: #4b5563;
    line-height: 1.6;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes underlineSlide {
    from {
      background-position: 0% 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #111827;
  }

  p {
    margin-bottom: 1rem;
    color: #374151;
    line-height: 1.7;
  }
`;

const GallerySection = styled.section`
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
      background: #111827;
      color: #fff;
      border: none;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      border-radius: 8px;
      transition: background 0.3s;

      &:hover {
        background: #374151;
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

const About = () => {
  const images = [img1, img2, img3, img4];

  const scrollLeft = () => {
    document
      .getElementById("imageRow")
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("imageRow")
      .scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AboutWrapper>
        <HeaderSection>
          <div className="heading-with-icon">
            <h1>About Ntirano Auctioneers</h1>
            <img
              src="https://png.pngtree.com/png-vector/20220729/ourmid/pngtree-auction-icon-png-image_6090642.png"
              alt="Auction Icon"
              className="heading-icon"
            />
          </div>
          <p>
            Ntirano Auctioneers is a trusted leader in the auction industry,
            delivering seamless, transparent, and professional services for
            buyers and sellers across South Africa. With years of combined
            expertise, our mission is to ensure that every transaction is
            conducted with integrity, efficiency, and unmatched service
            excellence.
          </p>
        </HeaderSection>

        <ContentSection>
          <h2>Who We Are</h2>
          <p>
            At Ntirano, we are more than just auctioneers — we are facilitators
            of opportunity. Our dedicated team of professionals is committed to
            connecting individuals and businesses with the assets they need
            while helping sellers achieve the best possible value for their
            goods. We specialize in property, vehicles, and commercial assets,
            always upholding the highest industry standards.
          </p>

          <p>
            Our core values — honesty, transparency, and innovation — are at the
            heart of everything we do. Whether you are a seasoned investor or a
            first-time bidder, Ntirano Auctioneers is here to guide you through
            every step of the process.
          </p>
        </ContentSection>

        <GallerySection>
          <div className="gallery-header">
            <h2>Our Work in Action</h2>
            <div className="scroll-buttons">
              <button onClick={scrollLeft}>◀</button>
              <button onClick={scrollRight}>▶</button>
            </div>
          </div>
          <div className="image-row" id="imageRow">
            {images.map((src, idx) => (
              <img key={idx} src={src} alt={`Ntirano auction ${idx + 1}`} />
            ))}
          </div>
        </GallerySection>
      </AboutWrapper>
    </motion.div>
  );
};

export default About;
