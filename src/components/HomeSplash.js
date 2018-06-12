import React from 'react'
import styled from "styled-components";

const HomeSplashWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height:80%;
    background-color:white;
`
const HomeSplashTitle = styled.h1`
    font-size:3.5vmax;
    font-weight:700;
    text-align:center;
`

export default () => (
    <HomeSplashWrapper>
        <HomeSplashTitle> Burri.To </HomeSplashTitle>
    </HomeSplashWrapper>
)
