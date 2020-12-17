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

const Input = ({ value, name, placeholder, type, onChange }) => {
  return (
    <InputWrapp
      type={type ? type : "text"}
      placeholder={placeholder}
      value={value ? value : ""}
      name={name}
      onChange={(e) => onChange(e.target.name, e.target.value)}
    ></InputWrapp>
  );
};

export default Input;
