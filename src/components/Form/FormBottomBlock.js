import React from "react";

import styled from "styled-components";

const FormBottomBlockWrapp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
`;

const FormBottomBlockText = styled.div`
  font-size: 16px;
  color: #828282;
`;

const FormBottomBlockButton = styled.a`
  font-size: 16px;
  color: #fdcb79;
  margin-left: 5px;
`;

const FormBottomBlock = ({ text, label ,onClick }) => {
  return (
    <FormBottomBlockWrapp>
      <FormBottomBlockText>{text}</FormBottomBlockText>
      <FormBottomBlockButton href="#" onClick={onClick}>{label}</FormBottomBlockButton>
    </FormBottomBlockWrapp>
  );
};

export default FormBottomBlock;
