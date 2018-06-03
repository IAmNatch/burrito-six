import React from 'react'
// Uncomment whenwe start passing props:
// import PropTypes from 'prop-types'
import styled from "styled-components";

const ScoreCard = ({ title }) => (
    <div className="scorecard-wrapper">
        <div className="scorecard-ranking">
            <h2 className="scorecard-ranking-number">{title}</h2>
            <p className="scorecard-ranking-name">Wilbur Mexicana</p>
            <p className="scorecard-ranking-subheader">A place for friends, great vibes</p>
        </div>
        <div className="scorecard-content-container">
            <div className="scorecard-content-left">
                <ol>
                    <li>Crispy</li>
                    <li>Crunchy</li>
                    <li>Cheetoes</li>
                </ol>
            </div>
            <div className="scorecard-content-right">
                <p><span className="scorecard-content-score">5</span>/5</p>
            </div>
        </div>
    </div>
)

const ScoreCardName = styled.p`
    font-size: 2vmax;
    width:42.5%;
    position:absolute;
    margin-top:-1.5vmax;
    margin-left: 5vmax;
    font-weight:700;
    border-bottom:2px solid #333;
`;

const ScoreCardRank = styled.h2`
    font-size: 7vmax;
    position:absolute;
    margin-top:-7.5vmax;
    font-weight:700;
`

const ScoreCardSubheader = styled.p`
    font-size: 1.5vmax;
    font-weight:200;
    margin-left: 5vmax;
    margin-top:1.5vmax;
`

const ScoreCardRankingWrapper = styled.div`
    display:inline-block; 
    margin-bottom: 2vmax;
`

export default () => (
    <ScoreCardRankingWrapper>
        <ScoreCardRank>1</ScoreCardRank>
        <ScoreCardName>Wilbur Mexicana</ScoreCardName>
        <ScoreCardSubheader>A place for friends, great vibes</ScoreCardSubheader>

    </ScoreCardRankingWrapper>
);

