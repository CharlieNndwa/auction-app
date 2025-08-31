import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../../assets/ntiranoo.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Box, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../UserContext";
import AuthModal from "../pages/Home/AuthModal";

// Import icons from your Font Awesome package
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faPhone,
  faEnvelope,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.scss";
import MobileMenu from "./MobileMenu"; // Import the new mobile menu component

// Updated styled component for the top strip
const TopStrip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000000;
`;

// New styled component for the inner content container to handle consistent padding
const TopStripContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 8px 20px;
  box-sizing: border-box;
`;

// New styled component for the left-side contact info container
const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// New styled component for each contact item (phone and email)
const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #ffd700;
  font-size: 14px;

  & svg {
    margin-right: 8px;
  }
`;

// Container for the right-side buttons
const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
`;

const TopStripButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
  }

  & svg {
    margin-right: 5px;
  }
`;

const WelcomeText = styled.span`
  color: #ffd700;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  color: #ffd700;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
  }

  & svg {
    margin-right: 5px;
  }
`;

// Use transient prop for isScrolled
const HeaderStyle = styled.div`
  width: 100%;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 1px 3px 0 rgba(127,202,236,.8)" : "none"};
  background: #000000;
  position: ${({ $isScrolled }) => ($isScrolled ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: #ffd700;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

// Use transient prop for isHovered
const BussinesServiceList = styled.ul`
  display: ${({ $isHovered }) => ($isHovered ? "block" : "none")};
  position: absolute;
  list-style-type: none;
  padding: 10px;
  margin: 20px 10px;
  color: #f8f8f8;
  z-index: 999;
  min-width: 265px;
  background-color: #000000;

  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${({ $isHovered }) => ($isHovered ? "1" : "0")};
  visibility: ${({ $isHovered }) => ($isHovered ? "visible" : "hidden")};

  & li {
    margin-bottom: 1px;
    padding: 10px;
    background-color: #1a1a1a;
  }

  & a {
    text-decoration: none;
    color: #ffd700;
    padding: 10px;
  }
`;

const UnorderedList = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 830px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffd700;
  padding: 15px 22px;
  position: relative;

  &:visited {
    color: #ffd700;
  }
  &:active {
    font-weight: bold;
  }
  &:hover {
    color: #fff;
  }
`;

const RulesBadgeLink = styled(StyledLink)`
  &::after {
    content: "*UPDATED";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translate(-50%, 0) rotate(-10deg);
    background-color: #ff0000;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    white-space: nowrap;
  }
`;

const MenuButton = styled(IconButton)`
  color: #ffd700 !important;

  @media (min-width: 831px) {
    display: none;
  }
`;

const List = styled.li`
  list-style-type: none;
`;

const LogoSize = styled.div`
  & img {
    width: 120px;
    height: 90px;
    object-fit: contain;
  }
`;

const Header = () => {
  const { user, logout, handleAuthSuccess } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalInitialView, setModalInitialView] = useState("login");

  const [isHoveredBusiness, setIsHoveredBusiness] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const businessTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  const location = useLocation();

  const openAuthModal = (view) => {
    setModalInitialView(view);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (menu) => {
    if (menu === "business") {
      clearTimeout(businessTimeoutRef.current);
      setIsHoveredBusiness(true);
    } else if (menu === "services") {
      clearTimeout(servicesTimeoutRef.current);
      setIsHoveredServices(true);
    }
  };

  const handleMouseLeave = (menu) => {
    const delay = 300;
    if (menu === "business") {
      businessTimeoutRef.current = setTimeout(() => {
        setIsHoveredBusiness(false);
      }, delay);
    } else if (menu === "services") {
      servicesTimeoutRef.current = setTimeout(() => {
        setIsHoveredServices(false);
      }, delay);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mobileStaticMenu = isMobile ? false : isScrolled;

  return (
    <>
      <TopStrip>
        <TopStripContent>
          {isMobile ? (
            // Mobile: Always display Contact Info, and login/register
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              gap: '10px'
            }}>
              <ContactInfoContainer style={{ display: "flex" }}>
                <ContactInfoItem>
                  <FontAwesomeIcon icon={faPhone} />
                  015 001 1117 /
                   079 297 9852
                </ContactInfoItem>
                <ContactInfoItem>
                  <FontAwesomeIcon icon={faEnvelope} />
                  pontsho@ntirano.co.za
                </ContactInfoItem>
              </ContactInfoContainer>
              <RightButtonsContainer>
                {user ? (
                  <>
                    <WelcomeText>Welcome back!</WelcomeText>
                    <LogoutButton onClick={logout}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      Logout
                    </LogoutButton>
                  </>
                ) : (
                  <>
                    <TopStripButton to="/login">
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                    </TopStripButton>
                    <TopStripButton to="/register">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Create Account
                    </TopStripButton>
                  </>
                )}
              </RightButtonsContainer>
            </Box>
          ) : (
            // Desktop: Display contact info on left, and login/register on right
            <>
              <ContactInfoContainer>
                <ContactInfoItem>
                  <FontAwesomeIcon icon={faPhone} />
                  079 297 9852
                </ContactInfoItem>
                <ContactInfoItem>
                  <FontAwesomeIcon icon={faEnvelope} />
                  pontsho@ntirano.co.za
                </ContactInfoItem>
              </ContactInfoContainer>
              <RightButtonsContainer>
                {user ? (
                  <>
                    <WelcomeText>Welcome back!</WelcomeText>
                    <LogoutButton onClick={logout}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      Logout
                    </LogoutButton>
                  </>
                ) : (
                  <>
                    <TopStripButton to="/login">
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                    </TopStripButton>
                    <TopStripButton to="/register">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Create Account
                    </TopStripButton>
                  </>
                )}
              </RightButtonsContainer>
            </>
          )}
        </TopStripContent>
      </TopStrip>
      <HeaderStyle $isScrolled={mobileStaticMenu}>
        <Container xs="md">
          <SpaceBetween>
            <Link to="/">
              <LogoSize to="/" className="logo">
                <img src={logo} alt="" />
              </LogoSize>
            </Link>
            <Box>
              {isMobile ? (
                <MenuButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </MenuButton>
              ) : (
                <UnorderedList>
                  <List>
                    <StyledLink to="/">Home</StyledLink>
                  </List>
                  <List>
                    <StyledLink to="/about">About</StyledLink>
                  </List>
                  <List>
                    <RulesBadgeLink to="/rules-of-auction">
                      Rules of Auction
                    </RulesBadgeLink>
                  </List>
                  <List
                    onMouseEnter={() => handleMouseEnter("business")}
                    onMouseLeave={() => handleMouseLeave("business")}
                  >
                    <StyledLink to="#">Live Auctions</StyledLink>
                    <BussinesServiceList $isHovered={isHoveredBusiness}>
                      <List>
                        <Link to="/upcoming-auctions">Upcoming Auctions</Link>
                      </List>
                      <List>
                        <Link to="/previous-auctions">Previous Auctions</Link>
                      </List>
                    </BussinesServiceList>
                  </List>
                  <List>
                    <StyledLink to="/bidding-process">How to Bid</StyledLink>
                  </List>
                  <List>
                    <StyledLink to="/services">Services</StyledLink>
                  </List>
                  <List>
                    <StyledLink to="/projects">Projects</StyledLink>
                  </List>
                  <List>
                    <StyledLink to="/contact">Contact</StyledLink>
                  </List>
                </UnorderedList>
              )}
            </Box>
          </SpaceBetween>
        </Container>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </HeaderStyle>
    </>
  );
};

export default Header;