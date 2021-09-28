import React from 'react';
import {FaBars, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';




const Navbar2 = ({toggle, sourcecode}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/portfolio">
                    YoungJin seo
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks as="a" href={sourcecode} target="_blank">Source Code <FaGithub/></NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>    
        </Nav>         
        </>
    )
}

export default Navbar2
