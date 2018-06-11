import React from 'react';
import Content, { HTMLContent } from "../Content";
import { BioWrapper, ContentWrapper } from '../primitives/ContentPrimitives.js';

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