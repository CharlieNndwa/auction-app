import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import BussinesComponent from './Components/pages/Bussines/BussinesComponent';
import ServicesComponent from './Components/pages/Services/ServicesComponent';
import data from "./Components/pages/Services/ServiceData";
import projectData from "./Components/pages/Projects/ProjectData";
import AppLoader from './Components/AppLoader';
import ProjectComponent from './Components/pages/Projects/ProjectComponent';
import PreviousAuctions from "./pages/PreviousAuctions";
import UpcomingAuctions from "./pages/UpcomingAuctions";
import LiveAuction from "./pages/LiveAuction";
import ItemDetails from "./pages/ItemDetails";
import RulesOfAuction from "./pages/RulesOfAuction";
import HowToBid from "./pages/HowToBid";
import Services from "./pages/ServicesPage";
import AuthSuccess from './pages/AuthSuccess';
// NEW IMPORTS FOR LOGIN AND REGISTER
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import VerifyEmailPage from './pages/VerifyEmailPage';
// NEW IMPORT FOR EVENT DETAILS PAGE
import EventDetails from "./Components/pages/Home/EventDetails";
import ProjectDetailsPage from './Components/pages/ProjectDetailsPage';

// Import your image files here
import image1 from './assets/exca.jpg';
import image2 from './assets/ad.jpg';
import image3 from './assets/biden.jpg';
import image4 from './assets/bkk.jpg';
import image5 from './assets/mch.jpg';
import image6 from './assets/hino.jpg';
import image7 from './assets/ok.jpg';
import image8 from './assets/heri.jpg';
import image9 from './assets/tumb.jpg';
import image10 from './assets/v.jpg';
import image11 from './assets/ppii.jpg';
import image12 from './assets/otf.jpg';
import image13 from './assets/u.jpg';
import image14 from './assets/sidecut.jpg';

const LoaderWrapper = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 2000);

        return () => clearTimeout(timer);
    }, [location]);

    return loading ? <AppLoader /> : children;
};

function App() {
    const architectureContent = "Our priority is to design the best facilities and buildings for living, working and leisure. We develop projects from concept design to final details, based on the client's requirements and taking into account the construction criteria and conditions, with the sole aim of ensuring the continuity of the concept design and the building with high quality. Good design, based on on-site perception, is the key to adequate and high-quality design. In this field of activity, our professional team of experienced architects, structural engineers, civil engineers and detailed planners plan above-ground structures that are equipped to a high technical standard. We provide comprehensive support for such projects in all phases. With Swiss standards for health, education, sports, administrative, hotel and industrial buildings."
    const energyContent = "Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports, and lowering our costs on a household and economy-wide level. While renewable energy technologies also help accomplish these objectives, improving energy efficiency is the cheapest – and often the most immediate – way to reduce the use of fossil fuels. There are enormous opportunities for efficiency improvements in every sector of the economy, whether it is buildings, transportation, industry, or energy generation.Buildings are an important field for energy efficiency improvements around the world because of their role as a major energy consumer. However, the question of energy use in buildings is not straightforward as the indoor conditions that can be achieved with energy use vary a lot. The measures that keep buildings comfortable, lighting, heating, cooling and ventilation, all consume energy. Typically the level of energy efficiency in a building is measured by dividing energy consumed with the floor area of the building which is referred to as specific energy consumption (SEC) or energy use intensity (EUI)."
    const waterContent = "Infrastructure is the fundamental facilities and systems serving a country, city, or other area, including the services and facilities necessary for its economy to function. Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and broadband speeds). In general, it has also been defined as “the physical components of interrelated systems providing commodities and services essential to enable, sustain, or enhance societal conditions”.There are two general types of ways to view infrastructure, hard or soft. Hard infrastructure refers to the physical networks necessary for the functioning of a modern industry. This includes roads, bridges, railways, etc. Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural standards of a country. This includes educational programs, official statistics, parks and recreational facilities, law enforcement agencies, and emergency services.Infrastructure is the term for the basic physical systems of a business or nation—transportation, communication, sewage, water, and electric systems are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country’s economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, or through public-private partnerships. In economic terms infrastructure often involves the production of public goods or production processes that support natural monopolies."


    // Dummy auctions data for the EventDetails page
    const auctionsData = [
        {
            _id: "auction1",
            title: "2018 Epiroc Simba M4 C-ITH Drill Rig",
            venue: "Boksburg, South Africa",
            time: "10:00 AM",
            closes: "2025-08-29T21:00:00+02:00",
            description: "A very brief description of this drill rig.",
            images: [image1, image2], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/1"
        },
        {
            _id: "auction2",
            title: "SALE OF: Heavy Duty Excavator - CAT 330D",
            venue: "Jet Park, Gauteng",
            time: "2:00 PM",
            closes: "2025-08-30T15:00:00+02:00",
            description: "A description of this heavy duty excavator.",
            images: [image3, image4], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/2"
        },
        {
            _id: "auction3",
            title: "AUCTION: 2015 Scania R440 Horse & Trailer",
            venue: "Midrand, South Africa",
            time: "1:00 PM",
            closes: "2025-08-29T21:55:00+02:00",
            description: "A description of the 2015 Scania R440 Horse & Trailer.",
            images: [image5, image6], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/3"
        },
        {
            _id: "auction4",
            title: "SALE: Mining Equipment Lot",
            venue: "Pretoria, South Africa",
            time: "10:00 AM",
            closes: "2025-11-05T10:00:00+02:00",
            description: "A description of the mining equipment lot.",
            images: [image7, image8], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/4"
        },
        {
            _id: "auction5",
            title: "LIQUIDATION ONLINE AUCTION: Office Furniture & Electronics",
            venue: "Benoni, South Africa",
            time: "2:00 PM",
            closes: "2025-09-01T14:00:00+02:00",
            description: "A description of the liquidation auction for office furniture and electronics.",
            images: [image9, image10], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/5"
        },
        {
            _id: "auction6",
            title: "REPOSSESSED: Vehicles & Salvage Stock Auction",
            venue: "Durban, KwaZulu-Natal",
            time: "11:00 AM",
            closes: "2025-09-15T11:00:00+02:00",
            description: "A description of the vehicles and salvage stock auction.",
            images: [image11, image12], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/6"
        },
        {
            _id: "auction7",
            title: "MULTI-VENDOR AUCTION: General Household Appliances",
            venue: "Centurion, Gauteng",
            time: "3:00 PM",
            closes: "2025-10-10T15:00:00+02:00",
            description: "A description of the multi-vendor auction.",
            images: [image13, image14], // <-- Updated to use imported images
            bidLink: "https://example.com/bid/7"
        }
    ];

    return (
        <>
            <LoaderWrapper>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/our-services" element={<HowToBid />} />
                    <Route path="/rules-of-auction" element={<RulesOfAuction />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects/spot-tec" element={
                        <ProjectComponent
                            title={projectData.data[0].title}
                            secondtitle={projectData.data[0].secondTitle}
                            images={projectData.data[0].images}
                            specData={projectData.data[0].specData}
                            arrowLeft={projectData.data[0].arrowLeft}
                            arrowRight={projectData.data[0].arrowRight}
                            paths={projectData.data[0].paths}
                        />
                    } />

                    <Route path="/projects/edma-gmbh" element={
                        <ProjectComponent
                            title={projectData.data[1].title}
                            secondtitle={projectData.data[1].secondTitle}
                            images={projectData.data[1].images}
                            specData={projectData.data[1].specData}
                            arrowLeft={projectData.data[1].arrowLeft}
                            arrowRight={projectData.data[1].arrowRight}
                            paths={projectData.data[1].paths}
                        />
                    } />
                    <Route path='/live-auctions' element={<LiveAuction />} />
                    <Route path="/previous-auctions" element={<PreviousAuctions />} />
                    <Route path="/projects/:projectName" element={<ProjectDetailsPage />} />
                    <Route path="/projects/wohndesign" element={
                        <ProjectComponent
                            title={projectData.data[2].title}
                            secondtitle={projectData.data[2].secondTitle}
                            images={projectData.data[2].images}
                            specData={projectData.data[2].specData}
                            arrowLeft={projectData.data[2].arrowLeft}
                            arrowRight={projectData.data[2].arrowRight}
                            paths={projectData.data[2].paths}
                        />
                    } />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path="/auction-items" element={<ItemDetails />} />
                    <Route path="/upcoming-auctions" element={<UpcomingAuctions />} />
                    <Route path="/architecture" element={<BussinesComponent title="Architecture" content={architectureContent} />} />

                    <Route path="/3-3-energy-effiency-renewable-energy"
                        element={<BussinesComponent title="Energy Efficiency and Renewable Energy" content={energyContent} />} />
                    <Route path="/3-4-water-infrastructure" element={<BussinesComponent title="Water & Infrastructure"
                        content={waterContent} />} />

                    <Route path="/consulting-and-studies" element={<ServicesComponent title={data.serviceData[0].title}
                        content={data.serviceData[0].content} image={data.serviceData[0].image}
                        singleImg={data.serviceData[0].singleImg} />} />

                    <Route path="/analysis-and-conceptual-design" element={<ServicesComponent title={data.serviceData[1].title}
                        content={data.serviceData[1].content} image={data.serviceData[1].image}
                        singleImg={data.serviceData[1].singleImg} />} />

                    <Route path="/project-supervision" element={<ServicesComponent title={data.serviceData[2].title}
                        content={data.serviceData[2].content} image={data.serviceData[2].image}
                        singleImg={data.serviceData[2].singleImg} />} />

                    <Route path="/project-managment" element={<ServicesComponent title={data.serviceData[3].title}
                        content={data.serviceData[3].content} image={data.serviceData[3].image}
                        singleImg={data.serviceData[3].singleImg} />} />

                    <Route path="/construction" element={<ServicesComponent title={data.serviceData[4].title} content={data.serviceData[4].content}
                        image={data.serviceData[4].image} singleImg={data.serviceData[4].singleImg} />} />
                    <Route path="/auth-success" element={<AuthSuccess />} />

                    {/* NEW ROUTES */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify/:token" element={<VerifyEmailPage />} />

                    {/* NEW ROUTE FOR EVENT DETAILS */}
                    <Route path="/auction-details/:id" element={<EventDetails auctions={auctionsData} />} />
                </Routes>
                <Footer />
            </LoaderWrapper>
        </>
    );
}

export default App;