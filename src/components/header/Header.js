import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, HeaderItemStyled } from '../primitives/HeaderPrimitives.js';

const HeaderItem = (props) => {
    return (
        <HeaderItemStyled>{props.title}</HeaderItemStyled>
    );
}

export const Header = (props) => {
    return (
        <HeaderWrapper>
            <HeaderItem title={props.title} />
        </HeaderWrapper>
    );
}