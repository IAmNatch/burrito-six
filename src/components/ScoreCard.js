import React from "react";
import styled from "styled-components";

const ScoreCardRankingWrapper = styled.div`
	display:block;
	box-shadow: 0 0 3px 3px rgba(1, 1, 1, 0.4);
	background-color: white;
  margin-bottom: 10%;
  padding-left:5%;
`;

const ScoreCardUpperWrapper = styled.div`
  display:flex;
`

const ScoreCardLowerWrapper = styled.div`
  display:flex;
`

const ScoreCardRank = styled.h2`
	font-size: 7vmax;
  justify-content: flex-start;
  margin-top:-5vmax;
  font-weight: 700;
`;

const ScoreCardName = styled.p`
	font-size: 3.5vmax;
  width: 50%;
  justify-content: flex-start;
	font-weight: 700;
  border-bottom: 2px solid #333;
  padding-bottom:0;
  margin-left:4vmin;
`;

const ScoreCardSubheader = styled.p`
  margin-top: 1vmax;
  display: flex;
  justify-content:flex-start;
	font-size: 1.5vmax;
  font-weight: 200;
`;

const ScoreCardMiddleWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`

const ScoreCardContentContainer = styled.div`
  width:100%;
	padding-left: 5%;
  padding-right: 5%;
`;

const ScoreCardListWrapper = styled.div`
  align-items:flex-start;
`

const ScoreCardContentListItem = styled.li`
  font-size: 1.5vmax;
  display:block;
`;

const ScoreCardAlignRight = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:-3vmax;
`;

const ScoreCardContentScore = styled.span`
  display:inline-block;
	font-size: 5vmax;
	font-weight: 700;
`;

const ScoreCardShowMore = styled.div`
  height:100px;
  width: 100px;
  background-color:grey;
  border-radius: 50%;
`

export default props => {
	const {
		drip_score,
		rank,
		flavor_score,
		highlights,
		ingredient_score,
		overall_score,
		resteraunt_name,
		review,
		style_score,
		sub,
		title,
	} = props.data;
	return (
		<ScoreCardRankingWrapper>
      <ScoreCardUpperWrapper>
        <ScoreCardRank>{rank}</ScoreCardRank>
        <ScoreCardName>{resteraunt_name}</ScoreCardName>
      </ScoreCardUpperWrapper>
      
			<ScoreCardSubheader>{sub}</ScoreCardSubheader>

      <ScoreCardMiddleWrapper>
        <ScoreCardContentContainer>
          <ScoreCardListWrapper>
            <ScoreCardContentListItem>
              {highlights[0].highlight_data}
            </ScoreCardContentListItem>
            <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
            <ScoreCardContentListItem>Crispy</ScoreCardContentListItem>
          </ScoreCardListWrapper>
          <ScoreCardAlignRight>
            <p>
              <ScoreCardContentScore>{overall_score}</ScoreCardContentScore>/5
            </p>
          </ScoreCardAlignRight>
        </ScoreCardContentContainer>
      </ScoreCardMiddleWrapper>
      <ScoreCardShowMore />
		</ScoreCardRankingWrapper>

	);
};
