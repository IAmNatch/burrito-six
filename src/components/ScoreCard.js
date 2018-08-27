import React, { Component } from "react";
import styled from "styled-components";
// primitives:
import HomePrimitives, { MainHeader, MainSubheader, Separator, Subtitle, OrderedListItem, MainBigText, MainText } from './primitives/HomePrimitives'

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



const ScoreCardName = styled.div`
  width: 50%;
  justify-content: flex-start;
	font-weight: 700;
  padding-bottom:0;
  margin-left:4vmin;
`;

const ScoreCardSubheader = styled.div`
  margin-top:-3.5%;
  padding-left:2.5%;
  padding-right:2.5%;
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


const ScoreCardBottomWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const ScoreCardShowMore = styled.p`
  height:60px;
  width: 60px;
  margin-left:-5%;
  background-color: black;
  border-radius: 50%;
  margin-bottom:-30px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  color:white;
	user-select: none;
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
  padding-bottom:5px;
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
  align-items:center;
  flex-direction:column;
`
const ScoreCardMoreScoreRow = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
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

    let ScoreCardContentList = this.props.data.highlights.map((element, i)=> {
      return ( <OrderedListItem key={i}> {element.highlight_data} </OrderedListItem>)
    })

      return(
        <ScoreCardRankingWrapper>
          <ScoreCardUpperWrapper>
            <ScoreCardRank>
              <MainHeader>
                {rank}
              </MainHeader>
            </ScoreCardRank>
            <ScoreCardName>
              <MainSubheader >
                {restaurant_name}
              </MainSubheader>
              <Separator margin={'-5% 0 0 -5%'}/>
            </ScoreCardName>
          </ScoreCardUpperWrapper>

          <ScoreCardSubheader><Subtitle color={'#555'}>{sub}</Subtitle></ScoreCardSubheader>

          <ScoreCardMiddleWrapper>
            <ScoreCardContentContainer>
              <ScoreCardListWrapper>
                { ScoreCardContentList }
              </ScoreCardListWrapper>
              <ScoreCardAlignRight>
                  <ScoreCardContentScore><Subtitle centerV={true} color={'#666'}><MainBigText  margin={'3vmax 0.5vmax'} color={'#FDD112'}>{overall_score}</MainBigText>/5</Subtitle></ScoreCardContentScore>
              </ScoreCardAlignRight>
            </ScoreCardContentContainer>

          </ScoreCardMiddleWrapper>

         { this.state.open ?
          <ScoreCardMoreWrapper>
            <ScoreCardMoreSubtitle>
              <Subtitle centerV={true} color={'#666'}>
              The Nitty Gritty
              </Subtitle>
            </ScoreCardMoreSubtitle>
            <ScoreCardMoreScoreWrapper>
              <ScoreCardMoreScore><MainText>Flavour</MainText><ScoreCardMoreScoreRow><MainBigText color={'#F2994A'} margin={'0'}>{flavor_score}</MainBigText><Subtitle centerV={true}>/5</Subtitle></ScoreCardMoreScoreRow> </ScoreCardMoreScore>
              <ScoreCardMoreScore><MainText>Drippage</MainText><ScoreCardMoreScoreRow><MainBigText color={'#9B51E0'} margin={'0'}>{drip_score}</MainBigText><Subtitle centerV={true}>/5</Subtitle></ScoreCardMoreScoreRow> </ScoreCardMoreScore>
              <ScoreCardMoreScore><MainText>Ingredients</MainText><ScoreCardMoreScoreRow><MainBigText margin={'0'} color={'#27AE60'}>{ingredient_score}</MainBigText><Subtitle centerV={true}>/5</Subtitle></ScoreCardMoreScoreRow> </ScoreCardMoreScore>
              <ScoreCardMoreScore><MainText>Style</MainText><ScoreCardMoreScoreRow><MainBigText margin={'0'} color={'#EB5757'}>{style_score}</MainBigText><Subtitle centerV={true}>/5</Subtitle></ScoreCardMoreScoreRow> </ScoreCardMoreScore>
            </ScoreCardMoreScoreWrapper>
            <MainText>
                {review}
            </MainText>
          </ScoreCardMoreWrapper> : null }

         <ScoreCardBottomWrapper>
            <ScoreCardShowMore onClick= { this.expandCard }> { this.state.open? 'Less' : "More" } </ScoreCardShowMore>
          </ScoreCardBottomWrapper>

        </ScoreCardRankingWrapper>
      )
  }

}

export default ScoreCard;
