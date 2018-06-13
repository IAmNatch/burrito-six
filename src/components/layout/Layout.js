import React from "react";
import styled from "styled-components";

const PageWrapperStyled = styled.div`
	grid-template-rows: [nav]10vh [jumbo]30vh [content] auto;
	display: grid;

	width: 100vw;
	min-height: 100vh;
`;

export const PageWrapper = props => {
	return <PageWrapperStyled>{props.children}</PageWrapperStyled>;
};
