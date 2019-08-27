import React, { forwardRef } from "react";
import styled from "styled-components";
import { Readonly } from '../../utils/Types'

const StyledInput = styled.input`
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 200px;
  height: 28px;
`;

interface IProps {
  [key: string]: any;
}

/**
 * We use a forwardRef because input is a functional component
 */
const Input = forwardRef((props: Readonly<IProps>, ref?: any) => {
  return <StyledInput {...props} ref={ref} type='text' />;
});

export default Input;
