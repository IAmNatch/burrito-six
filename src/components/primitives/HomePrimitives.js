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
    color: ${props=>props.color};
    display: ${props => props.centerV ? "flex":""}
    align-items: ${props => props.centerV ? "center":""}
`

export const Separator = styled.div`
    height:1px;
    border-bottom:thin solid #333;
    margin: ${props => props.margin}
`

export const OrderedListItem = styled.li`
    font-size: 1.25vmax;
    display:list-item;
    line-height: 1.5;
`
export const MainBigText = styled.p`
    font-size: 4.5vmax;
    color: ${props => props.color};
    font-weight: 700;
    margin:${props => props.margin}
`

export const MainText = styled.p`
    font-size: 1vmax;
    color: #333;
    font-weight:400;
`