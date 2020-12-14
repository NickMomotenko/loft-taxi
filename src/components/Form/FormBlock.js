import React from "react";

import styled from "styled-components";

const FormBlockWrapp = styled.form`
  width: 580px;
  padding: 56px 112px;
  background-color: #fff;
  border-radius: 20px;
`;

const FormBlockTitle = styled.div`
  font-size: 30px;
  color: #000000;
  font-weight: 700;
  text-align: center;
`;

const FormBlock = ({ title, children }) => {
  return (
    <FormBlockWrapp>
      <FormBlockTitle>{title}</FormBlockTitle>
      {children}
    </FormBlockWrapp>
  );
};

export default FormBlock;
