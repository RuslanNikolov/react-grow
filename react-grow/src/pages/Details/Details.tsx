import React from "react";
import * as S from "./Details.styled";
import LeftArrow from "./assets/LeftArrow.svg";
import IssueCard from "./IssueCard/IssueCard";
import IssueCardsMock from "./IssueCard/IssueCardsMock";
import Pagination from "./Pagination/Pagination";

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

      <S.HorizontalLine />
      <Pagination pageHighlighted={2} />
    </S.Main>
  );
};

export default Details;
