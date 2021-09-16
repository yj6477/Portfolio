import React, {useState} from 'react';
import Navbar from '../components/Navbar/index2';
import PrjInfoSection from '../components/PrjInfoSection';
import Sidebar from '../components/Sidebar';

const Project1Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <PrjInfoSection/>
        </>
    );
};

export default Project1Page
