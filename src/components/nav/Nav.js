import React from 'react';
import NavLink from 'gatsby-link';
import { NavWrapper, NavItemStyled } from '../primitives/NavPrimitives.js';



const NavItem = (props) => {
    return (
        <NavItemStyled>
            {props.title}
            {props.label}
            {props.date}
        </NavItemStyled>
    );
}

export const Nav = (props) => {
    return (
        <NavWrapper>
            <NavWrapper>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <NavItem
                        title="Burrito Six"
                    />
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: 'none' }}>
                    <NavItem
                        label="About"
                    />
                </NavLink>
            </NavWrapper>
            <NavWrapper style={{fontStyle: 'italic'}}>
                <NavItem
                    date={props.date}
                />
            </NavWrapper>
        </NavWrapper>
    );
}
