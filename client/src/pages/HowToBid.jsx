import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./HowToBid.scss";
import register from "../assets/register.png";
import securepay from "../assets/secure-payment.png";
import inspect from "../assets/inspect-antiques-and-property.png";
import checked from "../assets/checked.png";
import bid from "../assets/auctions.png"


/* ----------------- Styled Components ---------------- */
const PageContainer = styled(motion.div)`
  padding: 2rem;
  font-family: "Inter", sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: "";
      display: block;
      margin: 0.5rem auto;
      width: 120px;
      height: 5px;
      border-radius: 4px;
      background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
    }
  }

  p {
    max-width: 700px;
    margin: auto;
    font-size: 1.1rem;
    color: #4b5563;
    line-height: 1.6;
  }
`;

const StepsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  .step-card {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-8px);
    }

    img {
      width: 70px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.75rem;
    }

    p {
      color: #4b5563;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }
`;

const FAQSection = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 2rem;
  }
`;

const AccordionItem = styled(motion.div)`
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  cursor: pointer;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 1.5rem 2rem;
  background: #fff;
  color: #4b5563;
  line-height: 1.6;
`;

const TipsSection = styled.section`
  text-align: center;
  margin: 3rem auto;
  max-width: 700px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  ul {
    text-align: left;
    list-style: disc;
    padding-left: 1.5rem;
    color: #4b5563;
    line-height: 1.6;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleItem(index)}>
            <span>{item.question}</span>
            <motion.span
              initial={false}
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.span>
          </AccordionHeader>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </motion.div>
        </AccordionItem>
      ))}
    </div>
  );
};

const HowToBid = () => {
  const faqItems = [
    {
      question: "Do I need to register to bid?",
      answer: "Yes, registration is required for all bidders. You can register online or at our offices. A refundable deposit may be required depending on the auction."
    },
    {
      question: "What forms of payment are accepted?",
      answer: "We accept EFT, bank-guaranteed cheques, and cash deposits. Please refer to the specific auction's terms and conditions for details on payment deadlines and accepted methods."
    },
    {
      question: "Can I bid online?",
      answer: "Yes, many of our auctions support online bidding. Once registered, you will receive instructions on how to access our online bidding platform."
    },
    {
      question: "Are the items sold as is?",
      answer: "All assets are sold 'voetstoots' (as is). We highly recommend attending the viewing days to inspect the items before placing a bid."
    },
    {
      question: "When do I need to pay for my purchases?",
      answer: "Payment is typically required within 24 to 48 hours after the auction closes. Specific deadlines will be announced by the auctioneer and stated in the terms and conditions."
    }
  ];

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <HeroSection>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          How to Bid with Ntirano Auctioneers
        </motion.h1>
        <p>
          Whether you are new to auctions or an experienced buyer, Ntirano
          Auctioneers ensures that the bidding process is simple, transparent,
          and rewarding. Follow our step-by-step guide to participate with
          confidence.
        </p>
      </HeroSection>

      {/* Steps Section */}
      <StepsSection>
        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={register} alt="Register" />
          <h3>1. Register</h3>
          <p>
            Create an account online or visit our offices to register for the
            auction. Provide valid identification and any required deposit.
          </p>
        </motion.div>

        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={checked} alt="Inspect" />
          <h3>2. Inspect Items</h3>
          <p>
            Attend viewing days to carefully inspect the assets on offer.
            Transparency is key—our team is available to answer questions.
          </p>
        </motion.div>

        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={bid} alt="Bid" />
          <h3>3. Place Your Bid</h3>
          <p>
            On auction day, raise your paddle or place your bid online. Our
            auctioneer ensures a fair and competitive process.
          </p>
        </motion.div>

        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img src={securepay} alt="Win" />
          <h3>4. Secure Your Purchase</h3>
          <p>
            Successful bidders are required to finalize payment within the
            stipulated time and arrange collection or delivery of assets.
          </p>
        </motion.div>
      </StepsSection>

      {/* Accordion FAQ Section */}
      <FAQSection>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion items={faqItems} />
      </FAQSection>

      {/* Tips Section */}
      <TipsSection>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Helpful Tips
        </motion.h2>
        <ul>
          <li>Arrive early to register and settle in comfortably.</li>
          <li>Set a budget and stick to it during bidding.</li>
          <li>Pay attention to auctioneer announcements.</li>
          <li>Ask questions before bidding to avoid surprises.</li>
          <li>Have payment arrangements ready for smooth processing.</li>
        </ul>
      </TipsSection>
    </PageContainer>
  );
};

export default HowToBid;