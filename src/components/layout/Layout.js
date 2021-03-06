import React from 'react';
import styled from 'styled-components';

const PageWrapperStyled = styled.div`
    grid-template-rows: [nav]10vh [jumbo]30vh [content]60vw;
    display: grid;
`

export const PageWrapper = (props) => {
    return (
        <PageWrapperStyled>
        {props.children}
        </PageWrapperStyled>
    );
}