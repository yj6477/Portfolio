import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                    <SidebarLink as="a" href="https://www.linkedin.com/in/youngjinseo127/" target="_blank" onClick={toggle}>
                        <FaLinkedinIn/>
                    </SidebarLink>
                    <SidebarLink as="a" href="https://github.com/yj6477" target="_blank" onClick={toggle}>
                        <FaGithub/>
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
