import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarStyle';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/products'>
                    Class101
                 </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to='/products'>
                        Products
                      </NavLink>
                    <NavLink to='/cart'>
                        Cart
                      </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;