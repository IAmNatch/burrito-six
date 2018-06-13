import React from 'react'
import styled from "styled-components";
// Primitives
import {Title} from './primitives/Text';
const HomeSplashWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%
    height:100%;
    background: url('https://images.unsplash.com/photo-1525836756247-b5606e6f3338?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b156685b35a45e89fd7f45af9efb1a41&auto=format&fit=crop&w=2100&q=80');
    background-position: 50% 60%;
`

const HomeSplashOverlay = styled.div`
    height:30%;
    width:100%;
    background-color:white;
    opacity:0.85;
    position:absolute;
    z-index:0;

`


export default () => (
    <HomeSplashWrapper>
        <Title> Burri.To </Title>
    </HomeSplashWrapper>
)
