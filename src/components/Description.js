import React from 'react';
import styled from 'styled-components';
import Content, { HTMLContent } from "./Content";
import { BioWrapper, ContentWrapper } from './about/content/ContentPrimitives.js';

const ContentItem = (props) => {
    return (
        <BioWrapper><HTMLContent content={props.content}/></BioWrapper>
    );
}

export const Description = (props) => {
    return (
        <ContentWrapper>
            <ContentItem content={props.content} />
        </ContentWrapper>
    );
}
