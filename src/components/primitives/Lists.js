import React from "react";
import styled from "styled-components";

const OL = styled.ol`
  margin: 0;
  padding: 0 15px;
`;

const LI = styled.li`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 100;

  font-size: 2em;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const ListWrapper = styled.div`
  grid-column: ${props => (props.column ? props.column : "none")};
  grid-row: ${props => (props.row ? props.row : "none")};
  z-index: ${props => (props.zindex ? props.zindex : "1")};
  font-size: 1em;
  padding-top: 1em;

  display: flex;
  align-items: flex-end;
`;

export const OList = (
  props
) => {
  let {
    column,
    row,
    zindex,
    items
  } = props;
  console.table(items)
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
