import React from "react";
import styled from "styled-components";
import {colors} from '../colors';
import {TransitionGroup} from 'react-transition-group';

import {ScoreCard, Card} from './cards';


import { sortBy } from "lodash";

const HomeBodyWrapper = styled.div`
	background-color: #fdd112;
	padding-top: 5%;
	padding-bottom: 7.5%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const HomeBodyTitle = styled.h1`
	margin: 0;
`
const HomeBodyTitleWrap = styled.div`
background: white;
    text-align: center;
    padding: 0.5em;
    font-size: 1em;
`


// START
import { Donut } from "./charts/";
import { OList } from "./primitives/Lists";
import { BigLetter } from "./primitives/Text";
// END

class ScoreCardUnique extends React.Component {
	state = {
		on: false,
	};

	toggle = on => {
		this.setState({ on: on });
	};

		// Unique Card
	CardU = Card.extend`
	  grid-column: 1/5;
	  grid-row: 2/8;

	  z-index: 1;
	`;
	// Wrap Chart Components
	ChartWrapper = styled.div`
	  display: flex;
	  justify-content: space-around;
	  width: 100%;
	  margin: 0 0 -2em;
	`;

  render() {
    let { on } = this.state;
		console.log(this.props.data)
			let {
			title,
			sub,
			rank,
			highlights,
			overall_score,
			drip_score,
			style_score,
			flavor_score,
			ingredient_score,
			review,
			restaurant_name} = this.props.data;
			const highlightsFormatted = highlights.map(item => item.highlight_data)
    return (
        <ScoreCard
          onToggle={status => {
            this.toggle(status);
          }}
        >
          {/* For Card Whiteness Only */}
          <this.CardU height={"auto"} />
          {/* Holds Top Components*/}
          <ScoreCard.Top>
            <BigLetter>{rank || 0}</BigLetter>
            <ScoreCard.Title>{restaurant_name || 'title'}</ScoreCard.Title>
          </ScoreCard.Top>
          {/* Below The Line*/}
          <ScoreCard.Subtitle>
            {sub || 'I should be a subtitle!'}
          </ScoreCard.Subtitle>
          <OList items={highlightsFormatted} zindex={2} column={"2/3"} row={"5/6"} />
          <ScoreCard.Score score={2.2} color={colors.yellow} />
          <TransitionGroup
            style={{ gridRow: "6/7", gridColumn: "2/4", zIndex: 2 }}
          >
            {on ? (
              <ScoreCard.Expander timeout={410}>
                <ScoreCard.Subheading>The Nitty Gritty</ScoreCard.Subheading>
                <this.ChartWrapper>
                  <Donut score={flavor_score} title={"Flavor"} color={colors.orange} />
                  <Donut score={ingredient_score} title={"Fresh"} color={colors.purple} />
                  <Donut score={drip_score} title={"Drip"} color={colors.green} />
                  <Donut score={style_score} title={"Style"} color={colors.red} />
                </this.ChartWrapper>
                <ScoreCard.EndText>
                  <strong>{review.replace(/ .*/,'')}</strong> {review.split(" ").splice(1).join(" ")}
                </ScoreCard.EndText>
              </ScoreCard.Expander>
            ) : null}
          </TransitionGroup>
          <ScoreCard.Button expanded={"Less"} closed={"More"} />
        </ScoreCard>
    );
  }
}

export default props => {
	let ScoreCardJSX = props.posts.map(({ node: element }, i) => {
		let frontmatter = element.frontmatter;
		return <ScoreCardUnique key={i} data={frontmatter} />;
	});
	let ScoreCardsSorted = sortBy(ScoreCardJSX, [
		function(item) {
			return item.props.data.rank;
		},
	]);

	return <HomeBodyWrapper>
					<HomeBodyTitleWrap>
						<HomeBodyTitle>The Rankings</HomeBodyTitle>
					</HomeBodyTitleWrap>
						{ScoreCardsSorted}
					</HomeBodyWrapper>;
};
