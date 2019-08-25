import React from "react";
import styled from "styled-components";

const SCButton = styled.button`
  width: 67px;
  height: 28px;
  border-radius: 5px;
  background: #2e7dfb;
  font-size: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  cursor: pointer;
`;

interface IProps {
  children: string;
  [key: string]: any;
}

const Button = ({ children, ...props }: IProps) => {
  return <SCButton {...props}>{children}</SCButton>;
};

export default Button;
