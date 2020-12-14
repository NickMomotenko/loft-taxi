import React from "react";

import styled from "styled-components";

const FormLabelWrapp = styled.label`
  display: block;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormLabel = ({ children }) => {
  return <FormLabelWrapp>{children}</FormLabelWrapp>;
};

export default FormLabel;
