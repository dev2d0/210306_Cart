import React from 'react';
import { Badge } from 'antd';
import { useSelector } from "react-redux";
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
    const cart = useSelector(store => store.cartReducer);
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
                        <Badge count={cart.length}>
                            <ShoppingCartOutlined style={{ fontSize: '26px', color: '#FFFFFF' }} />
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