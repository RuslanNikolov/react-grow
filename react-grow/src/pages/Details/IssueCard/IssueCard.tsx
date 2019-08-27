import React, { memo } from "react";
import * as S from "./IssueCard.styled";
import { IIssueCardMock } from "./IssueCardsMock";
import { Readonly } from '../../../utils/Types'

interface IProps {
  mock: IIssueCardMock;
}

const IssueCard = (props: Readonly<IProps>) => {
  const { mock } = props;
  return (
    <S.Card>
      <S.ProfilePicture src={mock.profilePicUrl}></S.ProfilePicture>

      <S.InfoWrapper>
        <S.Title>{mock.title}</S.Title>
        <S.SubTitle>{mock.subTitle}</S.SubTitle>
        <S.Description>{mock.description}</S.Description>
        <S.TagsWrapper>
          {mock.tags.map(tag => (
            <S.Tag key={tag.name} color={tag.color}>
              {tag.name}
            </S.Tag>
          ))}
        </S.TagsWrapper>
      </S.InfoWrapper>
    </S.Card>
  );
};

export default memo(IssueCard);
