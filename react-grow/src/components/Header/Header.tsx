import React, { useState, ChangeEvent, useRef } from "react";
import * as S from "./Header.styled";
import { Hyperlink } from "../../App.styled";
import Ellipse from "./Ellipse.svg";
import SearchIcon from "./SearchIcon.svg";

const Header: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchInputRef = useRef(null);

  const onSearchInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(target.value);
  };

  const focusSearchInput = (): void => (searchInputRef.current as any).focus();

  return (
    <S.Header>
      <S.Logo src={Ellipse} alt='logo' />
      <S.TitleWrapper>
        <S.Title>Github Repo Explorer</S.Title>
        <S.SubTitle>
          learning project, created by <Hyperlink>John Doe</Hyperlink>
        </S.SubTitle>
      </S.TitleWrapper>

      <S.SearchInputWrapper>
        <S.SearchIcon src={SearchIcon} onClick={focusSearchInput} />
        <S.SearchInput
          ref={searchInputRef}
          placeholder='Search for a github repo'
          value={searchInputValue}
          onChange={onSearchInputChange}
        />
      </S.SearchInputWrapper>
      <S.SearchButton>Search</S.SearchButton>
    </S.Header>
  );
};

export default Header;
