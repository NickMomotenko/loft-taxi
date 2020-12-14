import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  color: #000000;
  font-size: 25px;

  background: #fdbf5a;
  border-radius: 70px;
  padding: 16px;
  width: 100%;
`;

const Button = ({ title }) => {
  return <ButtonWrapp>{title}</ButtonWrapp>;
};

export default Button;
