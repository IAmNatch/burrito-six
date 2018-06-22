import React from 'react'
import styled, { css } from "styled-components";
import { colors } from "../../colors.js";

export const Card = styled.div`
  box-shadow: ${props =>
    props.shadow ? "6px 6px 7px 1px rgba(1,1,1,0.25)" : "none"};
  background-color: white;

  height: ${props => (props.height ? props.height : "30vw")};
  width: ${props => (props.width ? props.width : "60vw")};

  @media only screen and (max-width: 600px) {
    height: ${props => (props.height ? props.height : "50vw")};
    width: ${props => (props.width ? props.width : "90vw")};
  }
`;
