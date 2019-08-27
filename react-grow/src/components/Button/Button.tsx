import React from "react";
import styled from "styled-components";
import { Readonly } from '../../utils/Types'

const StyledButton = styled.button`
  padding: 3px 9px;
  border-radius: 5px;
  background: #2e7dfb;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  border: none;
  cursor: pointer;
`;

interface IProps {
  children: string;
  [key: string]: any;
}

const Button = ({ children, ...props }: Readonly<IProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
