import React from 'react';
import styled from 'styled-components';

const PageWrapperStyled = styled.div`
    grid-template-rows: [jumbo]30vh [content]60vw;
    display: grid;
    height: 100vh;
`

export const PageWrapper = (props) => {
    return (
        <PageWrapperStyled>{props.children}</PageWrapperStyled>
    );
}