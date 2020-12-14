import React from "react";

import styled from "styled-components";

const InputWrapp = styled.input`
  border-bottom: 2px solid #e4e4e4;
  padding-bottom: 10px;
  width: 100%;

  font-size: 18px;
  color: #828282;

  ::placeholder {
    font-size: 18px;
    color: #828282;
  }
`;

const Input = ({ placeholder, type }) => {
  return (
    <InputWrapp
      type={type ? type : "text"}
      placeholder={placeholder}
    ></InputWrapp>
  );
};

export default Input;
