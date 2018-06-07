import React from 'react';
import styled from 'styled-components';
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
                <NavItem 
                    title="Burrito-Six"
                />
                <NavItem 
                    label="About"
                />
            </NavWrapper>
            <NavWrapper style={{fontStyle: 'italic'}}>
                <NavItem 
                    date="Last updated June 2018"
                />
            </NavWrapper>
        </NavWrapper>
    );
}