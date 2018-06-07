import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: white;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderItemStyled = styled.p`
    color: black;
    font-size: 2em;
    display: inline-block;
    font-weight: 700;
`

export const NavWrapper = styled.div`
    background: white;
    grid-row: 1/2
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
`

export const NavItemStyled = styled.p`
    color: black;
    font-size: 1em;
    padding: 10px;
`