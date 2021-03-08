import React from 'react';
import { Badge } from 'antd';
import {
    ShoppingCartOutlined
} from '@ant-design/icons';
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
                    <NavLink to='/cart'>
                        <Badge>
                            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#FFFFFF' }} />
                        </Badge>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/report'>Report</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;