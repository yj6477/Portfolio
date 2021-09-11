import React, {useState, useEffect} from 'react';
import {FaBars, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, SetScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 0) {
            SetScrollNav(true);
        }
        else{
            SetScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/portfolio" onClick={toggleHome}>
                        YoungJin Seo
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        {/* This is about section */}
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true}
                            exact='true'
                            offset={-80}
                            >Info</NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* This is project section */}
                            <NavLinks to="projects"
                            smooth={true} duration={500} spy={true}
                            exact='true'
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* this is contact section */}
                            <NavLinks to="contact"
                            smooth={true} duration={500} spy={true}
                            exact='true'
                            offset={-80}>Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks as="a" href="https://www.linkedin.com/in/youngjinseo127/" target="_blank"><FaLinkedinIn/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks as="a" href="https://github.com/yj6477" target="_blank"><FaGithub/></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar