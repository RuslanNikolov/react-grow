import React, { memo } from "react";
import * as S from "./IssueCard.styled";
import ProfilePicture from "./Profile.svg";
import { IIssueCardMock } from "../IssueCardsMock";

interface IProps {
  mock: IIssueCardMock;
}

const IssueCard = ({ mock }: IProps) => {
  const getProfilePictureUrl = (): string => {
    return mock.ProfilePictureUrl ? `./assets${mock.ProfilePictureUrl}` : ProfilePicture;
  };

  return (
    <S.Card>
      <S.ProfilePicture src={getProfilePictureUrl()}></S.ProfilePicture>

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
