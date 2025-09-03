import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGavel,
  faHome,
  faCar,
  faCity,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

/* ----------------- Styled Components ---------------- */
const PageContainer = styled(motion.div)`
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: 'Poppins', sans-serif;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: "";
      display: block;
      margin: 0.5rem auto;
      width: 120px;
      height: 5px;
      border-radius: 4px;
      background: linear-gradient(90deg, #b0b0b0, #707070);
    }
  }

  p {
    max-width: 700px;
    margin: auto;
    font-size: 1.1rem;
    color: #333333;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const StepsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  .step-card {
    background: #f0f0f0;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #dcdcdc;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .icon {
      font-size: 50px;
      color: #707070;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
    }

    p {
      color: #333333;
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
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 2rem;
  }
`;

const AccordionItem = styled(motion.div)`
  background: #f0f0f0;
  border-radius: 0.75rem;
  border: 1px solid #dcdcdc;
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
  background-color: #e0e0e0;
  border-bottom: 1px solid #d0d0d0;
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a1a;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dcdcdc;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 1.5rem 2rem;
  background: #f0f0f0;
  color: #333333;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const TipsSection = styled.section`
  text-align: center;
  margin: 3rem auto;
  max-width: 700px;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }

  ul {
    text-align: left;
    list-style: disc;
    padding-left: 1.5rem;
    color: #333333;
    line-height: 1.6;

    li {
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const DownloadSection = styled.section`
  padding: 3rem 2rem;
  background: #f0f0f0;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  text-align: center;
  max-width: 800px;
  margin: 4rem auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const DownloadTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const DownloadList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 0 auto;
  padding: 12px 24px;
  background: linear-gradient(90deg, #e53935, #b71c1c); /* Red gradient for the button */
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s; /* Added box-shadow to transition */

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #b71c1c, #8b0000); /* Darker red on hover */
    box-shadow: 0 0 20px rgba(229, 57, 53, 0.6); /* Red glow effect */
  }

  .icon {
    font-size: 20px;
    margin-right: 10px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    font-size: 0.9rem;
    padding: 10px 20px;
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
  const servicesData = [
    {
      icon: faGavel,
      title: "Full Auctioneering Services",
      description: "Our objective is to be of assistance to all our clients’ needs. We ensure that we see through each stage of the auction until its completion. Our team of auctioneers will always be available to ensure that auctions are carried out in the right manner, thus ensuring their success. We begin with in-depth research and scour the globe to find you the perfect pieces, all the while adhering to your budget and your objectives."
    },
    {
      icon: faHome,
      title: "Property Staging",
      description: "Whether you are deciding to sell your property or would like to transform your place of business and store, our property staging services is sure to attract any buyers and customers. We provide both occupied staging where we will use owner’s furnishing and accessories into the design, as well as vacant staging, which is a comprehensive staging service. All the while, keeping in mind the target demographic and the budget of our clients."
    },
    {
      icon: faCar,
      title: "Movable Assets",
      description: "We handle a wide range of movable assets, including vehicles, machinery, furniture, and livestock, ensuring a smooth and efficient auction process."
    },
    {
      icon: faCity,
      title: "Immovable Assets",
      description: "Our expertise extends to immovable assets, covering commercial, industrial, and residential properties, as well as vacant land. We provide comprehensive services from valuation to sale."
    }
  ];

  const conditionsOfSale = [
    {
      question: "The highest accepted bidder shall be the purchaser.",
      answer: "This means that the individual who makes the highest bid, which is accepted by the auctioneer, will be considered the official buyer of the item."
    },
    {
      question: "The Auctioneer has the right to regulate the bidding. He may furthermore withdraw any item at any time.",
      answer: "The auctioneer controls the pace and rules of the auction. They can also pull an item from the sale at any point before it is officially sold."
    },
    {
      question: "The Auctioneer does not hold himself responsible for any errors of description. A bid shall be taken as proof that the bidder has made himself/herself acquainted with the conditions for lots for which he/she bids.",
      answer: "All items are sold 'as is'. By placing a bid, you are confirming that you have read and understood the conditions and description of the item, and the auctioneer is not liable for any discrepancies."
    },
    {
      question: "All goods are sold as is.",
      answer: "This is a key principle of auctions. You are purchasing the item in its current state, with all its existing faults or defects, whether visible or not."
    },
    {
      question: "Lots once knocked down remain at the risk of the purchaser.",
      answer: "As soon as the auctioneer confirms your winning bid, the responsibility and risk for that item—including any loss, damage, or theft—immediately transfer to you."
    },
    {
      question: "No goods may be removed until paid for.",
      answer: "You must complete the full payment for your purchased items before you can remove them from the auction premises."
    },
    {
      question: "All sales are final.",
      answer: "Once a bid is accepted and the sale is complete, it cannot be reversed. There are no refunds, returns, or exchanges."
    },
    {
      question: "15% Buyer’s Commission.",
      answer: "A standard fee of 15% is added to the final winning bid price. This is a common practice in the auction industry."
    },
    {
      question: "Valid TV licence and identity document.",
      answer: "These documents are required for certain purchases, particularly for items like televisions, to comply with legal regulations."
    },
    {
      question: "Fica documents will be required.",
      answer: "Fica (Financial Intelligence Centre Act) documents, such as proof of residence and ID, are necessary to comply with anti-money laundering regulations, especially for high-value transactions."
    },
    {
      question: "No goods may be removed until the payment reflects in the account.",
      answer: "If you pay via EFT or bank transfer, the payment must clear and show up in the account before you are permitted to collect your items."
    },
    {
      question: "R5000 deposit is compulsory upon registration.",
      answer: "A refundable deposit of R5000 is required to register for the auction, which confirms your serious intent to bid."
    },
    {
      question: "R10 000 registration fee for bidding for vehicles.",
      answer: "This is a specific, higher registration fee required for auctions that include vehicles, to ensure serious buyers."
    },
    {
      question: "Should a bidder bid for an item and fail to pay for it, the deposit will be forfeited.",
      answer: "If you are the winning bidder but fail to complete the payment for the item, your registration deposit will not be returned to you."
    },
  ];

  const additionalServices = [
    {
      text: "Appraisal/valuation of assets",
    },
    {
      text: "Safeguarding of auction assets",
    },
    {
      text: "Change of ownership into the name of the buyer",
    },
    {
      text: "Advertising of auction through various media",
    },
  ];

  const downloadButtons = [
    {
      label: "(Computer hardware and systems list)",
      text: "Download File",
      link: "/path/to/computer-list.pdf",
    },
    {
      label: "(Office furniture and equipment list)",
      text: "Download File",
      link: "/path/to/office-list.pdf",
    },
    {
      label: "(Machinery and equipment)",
      text: "Download File",
      link: "/path/to/machinery-list.pdf",
    },
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
          Our Services
        </motion.h1>
        <p>
          Our core business services cover all aspects of the auction from liquidations, valuations, and storage. We pride ourselves on providing efficient, professional, and ethical service to our clients.
        </p>
      </HeroSection>

      {/* Services Section */}
      <StepsSection>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FontAwesomeIcon icon={service.icon} className="icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </StepsSection>

      {/* Accordion Conditions of Sale Section */}
      <FAQSection>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Conditions of Sale
        </motion.h2>
        <Accordion items={conditionsOfSale.map(item => ({ question: item.question, answer: item.answer }))} />
      </FAQSection>

      {/* Additional Services Section */}
      <TipsSection>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Additional Services
        </motion.h2>
        <ul>
          {additionalServices.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.text}
            </motion.li>
          ))}
        </ul>
      </TipsSection>
      
      {/* Download PDF Section */}
      <DownloadSection>
        <DownloadTitle>
          Download lists of some of the items on auction below:
        </DownloadTitle>
        <DownloadList>
          {downloadButtons.map((button, index) => (
            <div key={index}>
              <p style={{ color: '#333333', marginBottom: '0.5rem' }}>{button.label}</p>
              <DownloadButton href={button.link} download>
                <FontAwesomeIcon icon={faFilePdf} className="icon" />
                {button.text}
              </DownloadButton>
            </div>
          ))}
        </DownloadList>
      </DownloadSection>
    </PageContainer>
  );
};

export default HowToBid;