import React from 'react'
import styled from "styled-components";
import ScoreCard from "./ScoreCard.js"

const HomeBodyWrapper = styled.div`
    padding-left:20%;
    padding-right:20%;
    background-color:orange;
    padding-top:5%;
    padding-bottom:7.5%;
`

export default ( { title, score } ) => (
    <HomeBodyWrapper>
        <ScoreCard 
            title={title}
            score={score}
        
        />
    </HomeBodyWrapper>
)