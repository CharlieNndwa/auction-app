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
`

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

/** ——— Component ——— */
const RulesOfAuction = () => {
  return (
    <Page>
      <Card className="rules-card">
        <Header className="rules-header">
            <img src={logo} alt="Ntirano Auctioneers logo" />
          <h1>Rules of Auction</h1>
          
        </Header>

        <P>
          Welcome to <strong>Ntirano Auctioneers</strong>. These Rules of Auction
          govern all live, online and hybrid auctions conducted by us. By
          registering and/or bidding, every participant confirms that they
          have read, understood and agree to be bound by these rules.
        </P>

        <SectionTitle>1) Registration & FICA</SectionTitle>
        <P>
          All bidders must register prior to bidding and submit valid
          identification, proof of address and any documents required under FICA/POPIA.
          Company bidders must provide company registration docs and a
          letter of authority.
        </P>

        <SectionTitle>2) Deposits</SectionTitle>
        <P>
          A refundable registration deposit may be required and will be specified per
          auction. Deposits are returned once all obligations are met or when an
          application is unsuccessful, less any charges due.
        </P>

        <SectionTitle>3) Bidding Procedure</SectionTitle>
        <P>
          Bids are irrevocable once made. The highest accepted bid at the fall of
          the hammer (or system close for online) constitutes a binding sale,
          subject to any stated reserve or seller confirmation.
        </P>

        <SectionTitle>4) Reserve, Seller & Vendor Bids</SectionTitle>
        <P>
          Lots may be sold with or without reserve. The Auctioneer may accept
          seller/vendor bids where disclosed. The Auctioneer may withdraw, split,
          or group lots and may refuse any bid at their sole discretion.
        </P>

        <SectionTitle>5) “Voetstoots” (As-Is)</SectionTitle>
        <P>
          All assets are sold “voetstoots”, without warranty or guarantee unless
          expressly stated. Descriptions, photos and guides are provided in good
          faith but are not warranties. Buyers must rely on their own inspection.
        </P>

        <SectionTitle>6) Inspection & Due Diligence</SectionTitle>
        <P>
          Viewing times will be advertised. It is the bidder’s responsibility to
          inspect lots and satisfy themselves as to condition, fitness, quantity
          and compliance prior to bidding.
        </P>

        <SectionTitle>7) Buyer’s Commission & VAT</SectionTitle>
        <P>
          Buyer’s commission (if applicable) and VAT will be charged at the rates
          stated in the auction notice/lot catalogue. The total amount payable is
          the hammer price plus buyer’s commission and applicable taxes.
        </P>

        <SectionTitle>8) Invoices & Payment</SectionTitle>
        <P>
          Successful bidders must settle invoices in full within the specified
          period (typically 24–72 hours) by cleared EFT or other accepted method.
          Cash handling fees and bank charges are for the buyer’s account.
        </P>

        <SectionTitle>9) Risk, Title & Collection</SectionTitle>
        <P>
          Risk passes to the buyer at the fall of the hammer/system close. Title
          passes only upon full and cleared payment. Collection is by appointment
          within the stated removal window; bring proof of payment and ID.
        </P>

        <SectionTitle>10) Storage, Handling & Default</SectionTitle>
        <P>
          Late collections may attract storage/handling fees. If a buyer fails to
          pay or collect, Ntirano Auctioneers may cancel the sale, forfeit
          deposits, and/or re-auction the goods. Any shortfall and costs will be
          for the buyer’s account.
        </P>

        <SectionTitle>11) Vehicles & Licencing</SectionTitle>
        <P>
          Vehicles are sold as-is. Where NaTIS papers are available, details will
          be disclosed. Roadworthy, COR, keys, spare wheels or service histories
          are not guaranteed unless specifically stated.
        </P>

        <SectionTitle>12) Real Property & Special Conditions</SectionTitle>
        <P>
          Property sales may be subject to seller confirmation, suspensive
          conditions, occupancy status and compliance certificates. Refer to the
          property-specific conditions of sale supplied before the auction.
        </P>

        <SectionTitle>13) Online & Telephone Bidding</SectionTitle>
        <P>
          Remote bidders must ensure reliable connectivity and pre-approval.
          Ntirano Auctioneers accepts no liability for interruptions, timeouts or
          technical failures.
        </P>

        <SectionTitle>14) Safety & Access</SectionTitle>
        <P>
          Auction sites are working environments. Entry is at one’s own risk.
          PPE may be required. Children and pets are not permitted in hazardous
          areas.
        </P>

        <SectionTitle>15) Indemnity</SectionTitle>
        <P>
          Ntirano Auctioneers, its representatives and the seller will not be
          liable for any loss, damage, injury or consequential damages sustained
          on the premises or arising from participation in the auction.
        </P>

        <SectionTitle>16) POPIA & Privacy</SectionTitle>
        <P>
          By registering, bidders consent to the processing of personal
          information for FICA/POPIA compliance, bidder verification and auction
          administration. Data is handled in accordance with applicable laws.
        </P>

        <SectionTitle>17) Disputes</SectionTitle>
        <P>
          In the event of a dispute, the Auctioneer’s decision is final. The
          Auctioneer may reopen bidding or withdraw a lot to resolve any dispute.
        </P>

        <SectionTitle>18) Jurisdiction</SectionTitle>
        <P>
          These rules are governed by the laws of the Republic of South Africa.
          The parties consent to the jurisdiction of the appropriate South
          African courts.
        </P>

        <P>
          By bidding with Ntirano Auctioneers you acknowledge these Rules of
          Auction and agree to be bound by them. Thank you for your participation.
        </P>
      </Card>
    </Page>
  );
};

export default RulesOfAuction;
