<<<<<<< HEAD
import React from 'react';
//import styled from 'styled-components';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
	body {
		font-family: Roboto, sans-serif;
	}
`
=======
import React from "react";
import styled from "styled-components";
>>>>>>> 734adbbcf3dfff5edfc2bc96a05f53ad4edfa87e

const PageWrapperStyled = styled.div`
	grid-template-rows: [nav]10vh [jumbo]30vh [content] auto;
	display: grid;

	width: 100vw;
	min-height: 100vh;
`;

export const PageWrapper = props => {
	return <PageWrapperStyled>{props.children}</PageWrapperStyled>;
};
