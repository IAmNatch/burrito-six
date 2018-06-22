import React from 'react'
import styled, { css } from "styled-components";
import { colors } from "../../colors.js";
import transition from "styled-transition-group";

// Set up score card;
export const ScoreCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 3vw 27vw 27vw 3vw;
  grid-template-rows: 3em 6em 1em 4em 10em auto 3em 3em;
  transform: scale(0.9);
    @media only screen and (max-width: 600px) {
      grid-template-columns: 9vw 36vw 36vw 9vw;
      grid-template-rows: 3em 3em 1em 1em 6em auto 1em 2em;
    }
    @media only screen and (min-width: 1100px) {
      transform: scale(0.8);
      margin-bottom: -7em
    }
`;

export const CardTop = styled.div`
  grid-column: 2/4
  grid-row: 2/3;
  z-index: 2;

  width: fit-content;
  padding-right: 1.5vmax;

  display: flex;


  border-bottom: 2px solid black;
`

export const Subtitle = styled.p`
    z-index: 2;
    grid-column: 2/4;
    grid-row: 3/5;
    font-size: 2vmax;

    margin: 1vw 0;

    font-family: 'Nunito Sans', sans-serif;
    color: grey;

    @media only screen and (max-width: 600px) {
      font-size: 2.5vmax;
    }

`

const ScoreWrapper = styled.div`
  grid-column: 3/4;
  grid-row: 5/6;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const ScoreNumber = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => (props.color ? props.color : colors.orange)};

  margin: 0;
  font-size: 8vmax;
  line-height: 0.9;
  font-weight: 700;
`

const Score = ({ score = 4.3, color }) => {
  return (
    <ScoreWrapper>
      <ScoreNumber color={color}>{score}</ScoreNumber>
      <p style={{ margin: "0 5px", fontWeight: "bold", fontSize: "2vmax"}}>/5</p>
    </ScoreWrapper>)
}

const ExpandButton = styled.button`
  background: black;

  color: white;
  grid-row: 7/9
  grid-column: 2/4;

  justify-self: center;
  align-self: flex-end;
  border-radius: 100px;
  text-align: center;
  z-index: 2;
  width: 7vw;
  height: 7vw;
  padding: 0;
  font-size: 2vw;
  cursor: pointer;
  border: 0;

  :focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    width: 15vw;
    height: 15vw;
    font-size: 4vw;
  }

`

const Expander = transition.div`
  overflow: hidden;
  transform-origin: top;
  margin: 4vmax 0 2vmax;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: height 0.4s ease-out, opacity 0.3s ease;
  &:enter {
      height: 0
      opacity: 0.01

  }
  &:enter-active {
      height: 45vmax;
      opacity: 1;
      transform: scaleY(1);

      @media only screen and (max-width: 600px) {
      height: 17em;
      }
  }
  &:exit {
    height: 45vmax;
    opacity: 1;
    align-self: flex-end;
    @media only screen and (max-width: 600px) {
      height: 17em;
    }
  }
  &:exit-active {
      height: 0
      opacity: 0.01
  }
`
const EndText = styled.p`
  font-size: 2.5vmax;
  max-width: '90%';
`

const Subheading = styled.h3`
  margin: 10px 0 3vmax;
  font-size: 2.5vmax;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 0.8;
  border-bottom: 2px solid lightgrey;
`

const ToggleButton = ({ on, expanded, closed, onToggle, ...props }) => {
  return <ExpandButton onClick={onToggle} >{on ? expanded : closed}</ExpandButton>;
};

const CardTitle = styled.h2`
  margin: 2vw 0vw 0vw;

  font-size: 4.5vmax;
`

export class ScoreCard extends React.Component {
  static Top = CardTop;
  static Subtitle = Subtitle;
  static Score = Score;
  static Button = ToggleButton;
  static Expander = Expander;
  static EndText = EndText;
  static Subheading = Subheading;
  static Title = CardTitle;
  static defaultProps = { onToggle: () => { } }

  state = {
    on: false
  };

  toggle = () => this.setState(({ on }) => ({
    on: !on,
  }), () => this.props.onToggle(this.state.on))

  render() {
    const {on} = this.state;

    const children = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(
          child,
          {
            on: this.state.on,
            onToggle: this.toggle,
          },
        ),
    );
    return (<ScoreCardWrapper>{children}</ScoreCardWrapper>)
  }
}
