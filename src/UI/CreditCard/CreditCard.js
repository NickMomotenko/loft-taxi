import React, { useState } from "react";

import styled from "styled-components";

import logoIcon from "../../assets/credit-card/logo.png";
import simIcon from "../../assets/credit-card/sim.png";
import masterCardIcon from "../../assets/credit-card/master-card.png";

const CreditCardWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 18px 16px 16px 28px;

  min-height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CreditCardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreditCardIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
`;

const CreditCardDate = styled.div`
  font-size: 12px;
  color: #000000;
`;

const CreditCardNumber = styled(CreditCardDate)`
  font-size: 21px;
`;

const CreditCard = ({ date, number }) => {
  return (
    <CreditCardWrapp>
      <CreditCardRow>
        <CreditCardIcon url={logoIcon} />
        <CreditCardDate>{`${
          date.month < 10 ? `0${date.month}` : date.month
        }/${date.year}`}</CreditCardDate>
      </CreditCardRow>
      <CreditCardRow>
        <CreditCardNumber>{number}</CreditCardNumber>
      </CreditCardRow>
      <CreditCardRow>
        <CreditCardIcon url={simIcon} />
        <CreditCardIcon url={masterCardIcon} />
      </CreditCardRow>
    </CreditCardWrapp>
  );
};

export default CreditCard;
