import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 147px;
`

export const LeftArrow = styled.img`
`

export const NumbersBox = styled.div`
    width: 72px;
    display: flex;
    justify-content: space-between;
`

export const Number = styled.span`
   font-size: 12px; 
   padding: 0px 5px;
   background-color: ${p => p.isHighlighted ? '#FFF' : 'transparent'};
   border: 2px solid ${p => p.isHighlighted ? '#D6D8DA' : 'transparent'};
   cursor: pointer;
`

export const RightArrow = styled.img`
`
