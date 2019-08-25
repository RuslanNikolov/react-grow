import styled from 'styled-components'
import Button from '../../../components/Button/Button'

export const Card = styled.article`
    position: relative;
    margin: 0 23px 15px 27px;
    box-sizing: border-box;
    width: 974px;
    height: 151.94px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

export const ProfilePicture = styled.img`
    position: absolute;
    top: 19.86px;
    left: 21px;
    width: 48px;
    height: 47.67px;
    border-radius: 5px;
`

export const InfoWrapper = styled.aside`
    position: absolute;
    top: 19.86px;
    left: 83px;
    width: 661px;
`

export const Title = styled.h2`
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    margin: 0 0 2px 0;
`

export const SubTitle = styled.h4`
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    font-weight: initial;
    margin: 0;
`

export const Description = styled.p`
    height: 28px
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin: 15px 0;
`

export const TagsWrapper = styled.div`
    
`

export const Tag = styled(Button)`
    color: ${p => p.color};
    margin-right: 5px;
    background: #FFFFFF;
    border: 1px solid ${p => p.color};
    border-radius: 5px;
    font-size: 11px;
    line-height: 13px;
`