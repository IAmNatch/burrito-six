import React from 'react';
//import styled from 'styled-components';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
	body {
		font-family: Roboto, sans-serif;
	}
`

const PageWrapperStyled = styled.div`
    grid-template-rows: [nav]10vh [jumbo]30vh [content]60vw;
    display: grid;

    width: 100vw;
    min-height: 100vh;
`

export const PageWrapper = (props) => {
    return (
        <PageWrapperStyled>
        {props.children}
        </PageWrapperStyled>
    );
}
