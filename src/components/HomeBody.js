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
	padding:2.5%;
	background:white;
	text-align:center;
	margin:0 15% 20px 15%;
	font-size: 2em;
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
			let {
			title,
			rank,
			overall_score,
			drip_score,
			style_score,
			flavor_score,
			ingredient_score,
			review,
			restaurant_name} = this.props.data;

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
            A wonderful place for good people.
          </ScoreCard.Subtitle>
          <OList zindex={2} column={"2/3"} row={"5/6"} />
          <ScoreCard.Score score={2.2} color={colors.yellow} />
          <TransitionGroup
            style={{ gridRow: "6/7", gridColumn: "2/4", zIndex: 2 }}
          >
            {on ? (
              <ScoreCard.Expander timeout={410}>
                <ScoreCard.Subheading>The Nitty Gritty</ScoreCard.Subheading>
                <this.ChartWrapper>
                  <Donut title={"Flavor"} color={colors.orange} />
                  <Donut title={"Fresh"} color={colors.purple} />
                  <Donut title={"Drip"} color={colors.green} />
                  <Donut title={"Style"} color={colors.red} />
                </this.ChartWrapper>
                <ScoreCard.EndText>
                  <strong>Lee</strong> smartly topgallant bowsprit Jack Ketch
                  bilged on her anchor gangplank swing the lead gangway. Lanyard
                  Admiral of the Black lad starboard belay six pounders lateen
                  sail tackle Privateer. Lass Corsair bucko lookout pinnace
                  lanyard shrouds Gold Road stern.
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
						<HomeBodyTitle>The Rankings</HomeBodyTitle>
						{ScoreCardsSorted}
					</HomeBodyWrapper>;
};
