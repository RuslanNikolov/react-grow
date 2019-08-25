import styled from 'styled-components'
import Button from '../Button/Button'
import Input from '../Input/Input'

export const Header = styled.header`
    position: relative;
    width: 100%;
    height: 100px;
    background: #FFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 0px 0px;
`

export const Logo = styled.img`
    position: absolute;
    width: 53px;
    height: 53px;
    left: 26px;
    top: 24px;
    bottom: 23px;
`

export const TitleWrapper = styled.div`
    position: absolute;
    display: inline-block;
    height: fit-content;
    left: 91px;
    top: 35px;
    bottom: 35px;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
`

export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    margin: 0;
`
export const SearchInputWrapper = styled.div`
    position: absolute;
    right: 101px;
    top: 38px;
`
export const SearchIcon = styled.img`
    position: absolute;
    left: 6.75px;
    top: 5.75px;
    cursor: pointer;
`

export const SearchInput = styled(Input)`
    padding-left: 29px;
`
export const SearchButton = styled(Button)`
    position: absolute;
    top: 38px;
    right: 25px;
    color: #FFFFFF;
    padding: 7px 15px
`