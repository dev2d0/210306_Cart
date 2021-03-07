import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarStyle';

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/products' onClick={toggle}>Products</SidebarLink>
                    <SidebarLink to='/cart' onClick={toggle}>Cart</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar














