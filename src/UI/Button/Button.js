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

const Button = ({ title, type ,onClick }) => {
  return <ButtonWrapp type={type ? type : "button"} onClick={onClick}>{title}</ButtonWrapp>;
};

export default Button;
