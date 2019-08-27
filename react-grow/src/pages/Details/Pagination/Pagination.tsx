import React from "react";
import * as S from "./Pagination.styled";
import LeftArrow from "./assets/LeftArrow.svg";
import RightArrow from "./assets/RightArrow.svg";

const pages: number[] = [1, 2, 3, 4];

interface IProps {
  pageHighlighted: number;
}

const Pagination = (props: IProps) => {
  return (
    <S.Wrapper>
      <S.LeftArrow src={LeftArrow} alt='left arrow' />
      <S.NumbersBox>
        {pages.map(page => (
          <S.Number isHighlighted={page === props.pageHighlighted}>{page}</S.Number>
        ))}
      </S.NumbersBox>
      <S.RightArrow src={RightArrow} alt='right arrow' />
    </S.Wrapper>
  );
};

export default Pagination;
