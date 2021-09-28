import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

function Sidebar2({isOpen, toggle, sourcecode}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink as="a" href={sourcecode} target="_blank" onClick={toggle}>
                        Source Code <FaGithub/>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar2