import React, {useState} from 'react';
import Navbar from '../components/Navbar/index2';
import Sidebar from '../components/Sidebar';
import TypingTestSection from '../components/TypingTestSection';

const Project2Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const sourceCode = "https://github.com/yj6477/TypingTest";
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} sourcecode={sourceCode}/>
            <Navbar toggle={toggle} sourcecode={sourceCode}/>
            <TypingTestSection/>
        </>
    );
};

export default Project2Page