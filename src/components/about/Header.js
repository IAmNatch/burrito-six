import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, HeaderTitle } from './HeaderStyles';

const HeaderItem = (props) => {
    return (
        <HeaderItemStyled>{props.title}</HeaderItemStyled>
    )
}

export const Header = (props) => {
    return (
        <HeaderWrapper>
            <HeaderItem title="Hello" />
        </HeaderWrapper>
    )
}