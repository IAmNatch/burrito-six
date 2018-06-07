import styled from 'styled-components';

export const MainHeader = styled.h1`
    font-size: 7vmax;
    font-weight: 700;
`

export const MainSubheader = styled.h2`
    font-size: 2.5vmax;
    font-weight: 700;
`

export const Subtitle = styled.p`
    font-size: 1.25vmax;
    font-weight:200;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    color: ${props=>props.color}
`

export const Separator = styled.div`
    height:1px;
    border-bottom:thin solid #333;
    margin: ${props => props.margin}
`

