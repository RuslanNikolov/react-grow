import styled from 'styled-components'
import Button from '../../components/Button/Button'

export const Main = styled.main`
   position: relative;
`

export const BackButton = styled(Button)`
    position: absolute;
    top: 25px;
    left: 27px;
    background: transparent;
    text-transform:uppercase;
    color: #666;
    width: 85px;
    padding: 0;
`

export const LeftArrow = styled.img`
    width: 7.41px;
    margin-right: 7.59px;
`

export const IssueCardsList = styled.div`
    position: absolute;
    top: 65px;
`