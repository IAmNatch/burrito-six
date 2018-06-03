import React from 'react'
import styled from "styled-components";

const HomeSplashWrapper = styled.div`
    height:80%;
    background-color:white;
    padding-top:12.5%;
    padding-bottom:12.5%;
    padding-left:7.5%;
    padding-right:7.5%;
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