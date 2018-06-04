import React from "react";
import styled from "styled-components";

const ScoreCardName = styled.p`
  font-size: 2vmax;
  width: 45%;
  position: absolute;
  margin-top: -1.5vmax;
  margin-left: 5vmax;
  font-weight: 700;
  border-bottom: 2px solid #333;
  overflow: visible;
`;

const ScoreCardRank = styled.h2`
  font-size: 7vmax;
  position: absolute;
  margin-top: -7.5vmax;
  font-weight: 700;
`;

const ScoreCardSubheader = styled.p`
  font-size: 1.5vmax;
  font-weight: 200;
  margin-left: 5vmax;
  margin-top: 1.75vmax;
`;

const ScoreCardRankingWrapper = styled.div`
  margin-bottom: 2vmax;
  margin: auto;
  width: 100%;
  padding: 5%;
  box-shadow: 0 0 3px 3px rgba(1, 1, 1, 0.4);
  background-color: white;
`;

const ScoreCardContentContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const ScoreCardContentListItem = styled.li`
  font-size: 1.5vmax;
`;

const ScoreCardAlignRight = styled.div`
  text-align: right;
  position: absolute;
  right: 25%;
  margin-top: -5vmax;
`;

const ScoreCardContentScore = styled.span`
  font-size: 5vmax;
  font-weight: 700;
`;

export default ({
  title,
  score,
  resteraunt_name,
  overall_score,
  drip_score,
  ingredient_score,
  flavor_score,
  style_score,
  highlights,
  rank,
  sub,
}) => (
  <ScoreCardRankingWrapper>
    <ScoreCardRank>{rank}</ScoreCardRank>
    <ScoreCardName>{resteraunt_name}</ScoreCardName>
    <ScoreCardSubheader>{sub}</ScoreCardSubheader>
    <ScoreCardContentContainer>
      <ol>
        <ScoreCardContentListItem>{highlights[0]}</ScoreCardContentListItem>
        <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
        <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
      </ol>

      <ScoreCardAlignRight>
        <p>
          <ScoreCardContentScore>{overall_score}</ScoreCardContentScore>/5
        </p>
      </ScoreCardAlignRight>
    </ScoreCardContentContainer>
  </ScoreCardRankingWrapper>
);
