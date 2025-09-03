

import { motion } from 'framer-motion';
import './ServicesPage.scss'; // SCSS for general styles
import { HeroContainer } from './ServicesPage.styled';



const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const ServicesPage = () => {
    

    return (
        <div className="services-page">
            {/* Hero Section */}
            <HeroContainer>
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeIn}>Our Auction Services</motion.h1>
                    {/* The descriptive paragraph has been removed */}
                    
                 
                </motion.div>
            </HeroContainer>

           

         
        </div>
    );
};

export default ServicesPage;