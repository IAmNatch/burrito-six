import React from "react";
import styled from "styled-components";

const OL = styled.ol`
  margin: 0;
  padding: 0 15px;
`;

const LI = styled.li`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 100;

  font-size: 2.5vmax;

  @media only screen and (max-width: 600px) {
    font-size: 2.5vmax;
  }
`;

const ListWrapper = styled.div`
  grid-column: ${props => (props.column ? props.column : "none")};
  grid-row: ${props => (props.row ? props.row : "none")};
  z-index: ${props => (props.zindex ? props.zindex : "1")};
  font-size: 3vmax;
`;

export const OList = (
  props,
  {
    column,
    row,
    zindex,
    items = ["Great vibes", "Hundres of Hot Sauces", "I want to eat falafel"]
  }
) => {
  return (
    <ListWrapper {...props}>
      <OL>
        {items.map((item, index) => {
          return <LI key={index}>{` ${item}`}</LI>;
        })}
      </OL>
    </ListWrapper>
  );
};
