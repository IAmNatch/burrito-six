import React from 'react'
import styled from "styled-components";
import ScoreCard from "./ScoreCard.js"

const HomeBodyWrapper = styled.div`
    padding-left:20%;
    padding-right:20%;
`

export default () => (
    <HomeBodyWrapper>
        <ScoreCard />
    </HomeBodyWrapper>
)