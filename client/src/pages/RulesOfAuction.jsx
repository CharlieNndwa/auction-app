import React from "react";
import styled from "styled-components";
import "./RulesOfAuction.scss";
import logo from "../assets/ntiranoo.png";

/** ——— Styled Components ——— */
const Page = styled.main`
  background: linear-gradient(180deg, #f6f8fb 0%, #ffffff 100%);
  min-height: 100vh;
  padding: 2.5rem 1rem 4rem;
  display: flex;
  justify-content: center;
`;

const Card = styled.article`
  width: 100%;
  max-width: 980px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
  padding: 2.25rem 1.5rem;
  animation: fadeInUp 0.6s ease-out both;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between; /* logo left, heading right */
  align-items: center;
  border-bottom: 1px solid #eef0f4;
  padding-bottom: 1rem;
  margin-bottom: 1.75rem;

  h1 {
    font-size: 1.6rem;
    font-weight: 800;
    color: #1f2937;
    letter-spacing: -0.25px;
    margin: 0;
    text-align: right;
  }

  img {
    height: 56px;
    width: auto;
    display: block;
  }

  @media (max-width: 640px) {
    flex-direction: column; /* stack logo above heading on mobile */
    gap: 0.75rem;
    text-align: center;

    h1 {
      font-size: 1.35rem;
    }
    img {
      height: 48px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin: 1.75rem 0 0.75rem;
`;

const P = styled.p`
  margin: 0.5rem auto;
  line-height: 1.8;
  font-size: 1rem;
  color: #374151;
  max-width: 72ch;
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem auto;
  max-width: 72ch;
  text-align: left;
`;

const Li = styled.li`
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #374151;
`;

/** ——— Component ——— */
const RulesOfAuction = () => {
  return (
    <Page>
      <Card className="rules-card">
        <Header className="rules-header">
          <img src={logo} alt="Ntirano Auctioneers logo" />
          <h1>Conditions of Sale</h1>
        </Header>

        <Ul>
          <Li>The highest accepted bidder shall be the purchaser.</Li>
          <Li>The Auctioneer has the right to regulate the bidding. He may furthermore withdraw any item at any time.</Li>
          <Li>The Auctioneer does not hold himself responsible for any errors of description. A bid shall be taken as proof that the bidder has made himself/herself acquainted with the conditions for lots for which he/she bids.</Li>
          <Li>All goods are sold as is.</Li>
          <Li>Lots once knocked down remain at the risk of the purchaser.</Li>
          <Li>No goods may be removed until paid for.</Li>
          <Li>All sales are final.</Li>
          <Li>15% Buyer’s Commission.</Li>
          <Li>Valid TV licence and identity document.</Li>
          <Li>Fica documents will be required.</Li>
          <Li>No goods may be removed until the payment reflects in the account.</Li>
          <Li>R5000 deposit is compulsory upon registration.</Li>
          <Li>R10 000 registration fee for bidding for vehicles</Li>
          <Li>Should a bidder bid for an item and fail to pay for it, the deposit will be forfeited.</Li>
        </Ul>
      </Card>
    </Page>
  );
};

export default RulesOfAuction;