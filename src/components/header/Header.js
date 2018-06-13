import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from '../primitives/HeaderPrimitives.js';
import {Title} from '../primitives/Text';
// const HeaderItem = (props) => {
//     return (
//         <HeaderItemStyled>{props.title}</HeaderItemStyled>
//     );
// }

export const Header = (props) => {
    return (
        <HeaderWrapper>
            <Title>{props.title}</Title>
        </HeaderWrapper>
    );
}
