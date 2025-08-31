import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./mobile-menu.scss";

const MobileMenu = ({ isOpen, onClose }) => {
    const [isAuctionsOpen, setIsAuctionsOpen] = useState(false);

    const handleToggleAuctions = () => {
        setIsAuctionsOpen(!isAuctionsOpen);
    };

    const handleLinkClick = () => {
        onClose(); // Close the main menu
        setIsAuctionsOpen(false); // Close the dropdown as well
    };

    return (
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
            <button className="close-btn" onClick={onClose} aria-label="Close Menu">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="mobile-ul">
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                <li><Link to="/rules-of-auction" onClick={handleLinkClick}>Rules of Auction</Link></li>
                <li className={`dropdown-container ${isAuctionsOpen ? 'open' : ''}`}>
                    <div className="dropdown-trigger" onClick={handleToggleAuctions}>
                        Live Auctions <FontAwesomeIcon icon={faSquareCaretDown} className="dropdown-icon" />
                    </div>
                    {isAuctionsOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/upcoming-auctions" onClick={handleLinkClick}>Upcoming Auctions</Link></li>
                            <li><Link to="/previous-auctions" onClick={handleLinkClick}>Previous Auctions</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/bidding-process" onClick={handleLinkClick}>How to Bid</Link></li>
                <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
                <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
        </div>
    );
};

export default MobileMenu;