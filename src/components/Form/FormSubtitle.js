import React from "react";

import styled from "styled-components";

const FormSubtitleWrapp = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const FormSubtitle = ({ title }) => {
  return <FormSubtitleWrapp>{title}</FormSubtitleWrapp>;
};

export default FormSubtitle;
