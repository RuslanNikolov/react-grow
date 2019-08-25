import React, { useState, ChangeEvent, useRef } from "react";
import * as SC from "./Header.styled";
import { Hyperlink } from "../../App.styled";
import Ellipse from "./Ellipse.svg";
import SearchIcon from "./SearchIcon.svg";

const Header: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchInputRef = useRef(null);

  const onSearchInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(target.value);

  const focusSearchInput = () => (searchInputRef.current as any).focus();

  return (
    <SC.Header>
      <SC.Logo src={Ellipse} alt='logo' />
      <SC.TitleWrapper>
        <SC.Title>Github Repo Explorer</SC.Title>
        <SC.SubTitle>
          learning project, created by <Hyperlink>John Doe</Hyperlink>
        </SC.SubTitle>
      </SC.TitleWrapper>

      <SC.SearchInputWrapper>
        <SC.SearchIcon src={SearchIcon} onClick={focusSearchInput} />
        <SC.SearchInput
          ref={searchInputRef}
          placeholder='Search for a github repo'
          value={searchInputValue}
          onChange={onSearchInputChange}
        />
      </SC.SearchInputWrapper>
      <SC.SearchButton>Search</SC.SearchButton>
    </SC.Header>
  );
};

export default Header;
