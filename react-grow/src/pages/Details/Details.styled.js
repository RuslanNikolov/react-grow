import styled from 'styled-components'
import Button from '../../components/Button/Button'

export const Main = styled.main`
   position: relative;
   height: 804px;
`

export const BackButton = styled(Button)`
    position: absolute;
    top: 25px;
    left: 27px;
    background: transparent;
    text-transform:uppercase;
    color: #666;
`

export const LeftArrow = styled.img`
    width: 7.41px;
    margin-right: 7.59px;
`

export const IssueCardsList = styled.div`
    position: absolute;
    top: 65px;
`

export const HorizontalLine = styled.hr`
    position: absolute;
    width: 974px;
    text-align: center;
    bottom: 67px;
    margin:0 auto;
    right:0;
    left:0;
    border-color: #DDD;
    border-style: solid;
`