import React from 'react';
import {FaBars, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';



const Navbar2 = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/portfolio">
                    YoungJin seo
                </NavLogo>
            </NavbarContainer>    
        </Nav>         
        </>
    )
}

export default Navbar2
