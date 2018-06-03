import React from 'react'
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
    width:45%;
    position:absolute;
    margin-top:-1.5vmax;
    margin-left: 5vmax;
    font-weight:700;
    border-bottom:2px solid #333;
    overflow: visible;
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
    margin-top:1.75vmax;
`

const ScoreCardRankingWrapper = styled.div`
    margin-bottom: 2vmax;
    margin:auto;
    width:100%;
    padding:5%;
    box-shadow: 0 0 3px 3px rgba(1,1,1,0.4);
`

const ScoreCardContentContainer = styled.div`
    padding-left: 5%;
    padding-right:5%;
`

const ScoreCardContentListItem = styled.li`
    font-size:1.5vmax;
`

const ScoreCardAlignRight = styled.div`
    text-align:right;
    position: absolute;
    right:25%;
    margin-top:-5vmax;
`

const ScoreCardContentScore = styled.span`
    font-size: 5vmax;
    font-weight: 700;
`

export default () => (
    <ScoreCardRankingWrapper>
        <ScoreCardRank>1</ScoreCardRank>
        <ScoreCardName>Wilbur Mexicana</ScoreCardName>
        <ScoreCardSubheader>A place for friends, great vibes</ScoreCardSubheader>
        <ScoreCardContentContainer>
            <ol>
            <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
            <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
            <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
            </ol>

            <ScoreCardAlignRight>
                <p><ScoreCardContentScore>5</ScoreCardContentScore>/5</p>
            </ScoreCardAlignRight>

        </ScoreCardContentContainer>
   
    </ScoreCardRankingWrapper>
);

