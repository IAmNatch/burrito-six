import React from 'react'
import styled from "styled-components";
// Primitives
import {Title} from './primitives/Text';
const HomeSplashWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height:80%;
    background-color:white;
`


export default () => (
    <HomeSplashWrapper>
        <Title> Burri.To </Title>
    </HomeSplashWrapper>
)
