import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarStyle';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/LandingPage'>
                    Class101
                 </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to='/LandingPage'>
                        Products
                      </NavLink>
                    <NavLink to='/Cart'>
                        Cart
                      </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;