import React from "react";
import styled from "styled-components";

const S = {
  Button: styled.button`
    width: 67px;
    height: 28px;
    border-radius: 5px;
    background: #2e7dfb;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    border: none;
    cursor: pointer;
  `
};

interface IProps {
  children: string;
  [key: string]: any;
}

const Button = ({ children, ...props }: IProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
