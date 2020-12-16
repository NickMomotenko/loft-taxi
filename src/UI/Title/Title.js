import React from "react";

import styled from "styled-components";

const TitleWrapp = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
  margin-bottom: 13px;
  text-align: center;
`;

const Title = ({ label }) => {
  return <TitleWrapp>{label}</TitleWrapp>;
};

export default Title;
