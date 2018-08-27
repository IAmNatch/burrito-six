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
            <img style={{width: "20em"}} src={"./img/logo.svg"}/>
            {/*<Title>{props.title}</Title>*/}
        </HeaderWrapper>
    );
}
