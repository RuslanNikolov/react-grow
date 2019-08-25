import React from "react";
import * as S from "./Details.styled";
import LeftArrow from "./assets/LeftArrow.svg";
import IssueCard from "./IssueCard/IssueCard";
import IssueCardsMock from "./IssueCardsMock";

const Details = () => {
  return (
    <S.Main>
      <S.BackButton>
        <S.LeftArrow src={LeftArrow} alt='left arrow' />
        go back
      </S.BackButton>

      <S.IssueCardsList>
        {IssueCardsMock.map((mock, idx) => (
          <IssueCard key={idx} mock={mock} />
        ))}
      </S.IssueCardsList>
    </S.Main>
  );
};

export default Details;
