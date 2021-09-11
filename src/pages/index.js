import React, {useState} from 'react';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
            <ProjectSection/>
            <ContactSection/>
        </>
    );
};

export default Home;
