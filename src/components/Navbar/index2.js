import React from 'react';
import {FaBars, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';



const Navbar2 = () => {
    return (
        <>
            <NavbarContainer>
                <NavLogo exact path="/portfolio">
                    YoungJin seo
                </NavLogo>
            </NavbarContainer>
            
        </>
    )
}

export default Navbar2
