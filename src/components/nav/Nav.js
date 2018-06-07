import React from 'react';
import Link from 'gatsby-link';
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
                <Link to="/">
                    <NavItem 
                        title="Burrito-Six"
                    />
                </Link>
                <Link to="/about">
                    <NavItem 
                        label="About"
                    />
                </Link>
            </NavWrapper>
            <NavWrapper style={{fontStyle: 'italic'}}>
                <NavItem 
                    date="Last updated June 2018"
                />
            </NavWrapper>
        </NavWrapper>
    );
}