import React from "react";

import styled from "styled-components";

const SubTitleWrapp = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #7b7b7b;
  text-align: center;
`;

const SubTitle = ({ label }) => {
  return <SubTitleWrapp>{label}</SubTitleWrapp>;
};

export default SubTitle;
