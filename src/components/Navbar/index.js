import React from 'react';
import {FaBars, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        YoungJin Seo
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
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
        </div>
    )
}

export default Navbar