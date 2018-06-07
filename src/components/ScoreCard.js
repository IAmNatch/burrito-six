import React, { Component } from "react";
import styled from "styled-components";

const ScoreCardRankingWrapper = styled.div`
	display:block;
	box-shadow: 6px 6px 7px 1px rgba(1,1,1,0.25);
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

const ScoreCardListWrapper = styled.ol`
  align-items:flex-start;
`

const ScoreCardContentListItem = styled.li`
  font-size: 1.5vmax;
  display:list-item;
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
  margin-top:-2vmax;
  color: #FDD112;
`;

const ScoreCardBottomWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const ScoreCardShowMore = styled.p`
  height:60px;
  width: 60px;
  margin-left:-5%;
  background-color:grey;
  border-radius: 50%;
  margin-bottom:-30px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  color:white;
`

const ScoreCardMoreWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin-left:-5%;
  flex-direction:column;
  padding-left:10%;
  padding-right:10%;
`

const ScoreCardMoreSubtitle = styled.div`
  align-self:center;
  border-bottom: thin solid #333;
  
`

const ScoreCardMoreScoreWrapper = styled.div `
  display:flex;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
`

const ScoreCardMoreScore = styled.div `
  display:flex;
  width:100%;
  justify-content:center;

`

const ScoreCardMoreReview = styled.p `

`

class ScoreCard extends Component {
  state = {
    open: false
  }

  expandCard = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let {
      drip_score,
      rank,
      flavor_score,
      highlights,
      ingredient_score,
      overall_score,
      restaurant_name,
      review,
      style_score,
      sub,
      title } = this.props.data;

      return(
        <ScoreCardRankingWrapper>
          <ScoreCardUpperWrapper>
            <ScoreCardRank>{rank}</ScoreCardRank>
            <ScoreCardName>{restaurant_name}</ScoreCardName>
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



         { this.state.open ? 
          <ScoreCardMoreWrapper> 
            <ScoreCardMoreSubtitle>
              The Nitty Gritty
            </ScoreCardMoreSubtitle> 
            <ScoreCardMoreScoreWrapper>
              <ScoreCardMoreScore>Flavour</ScoreCardMoreScore>
              <ScoreCardMoreScore>Drippage</ScoreCardMoreScore>
              <ScoreCardMoreScore>Ingredients</ScoreCardMoreScore>
              <ScoreCardMoreScore>Style</ScoreCardMoreScore>
            </ScoreCardMoreScoreWrapper>
            <ScoreCardMoreReview>
                {review}
            </ScoreCardMoreReview>
          </ScoreCardMoreWrapper> : null }

         <ScoreCardBottomWrapper>
            <ScoreCardShowMore onClick= { this.expandCard }> { this.state.open? 'Less' : "More" } </ScoreCardShowMore>
          </ScoreCardBottomWrapper>

        </ScoreCardRankingWrapper>
      )
  }

}

export default ScoreCard;
