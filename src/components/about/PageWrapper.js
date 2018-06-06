import React from "react";
import styled from "styled-components";

const PageWrapperStyle = styled.div`

  grid-template-rows: [jumbo]30vh [content]60vw;
  display: grid;
  height: 100vh;
  background: #00AF96;
  
`

export const PageWrapper = (props) => {
  return <PageWrapperStyle>{props.children}</PageWrapperStyle>;
};