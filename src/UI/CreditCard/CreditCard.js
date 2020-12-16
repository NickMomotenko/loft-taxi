import React, { useState } from "react";

import styled from "styled-components";

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

const CreditCardIcon = styled.im``;

const CreditCardDate = styled.div`
  font-size: 12px;
  color: #000000;
`;

const CreditCardNumber = styled(CreditCardDate)`
  font-size: 21px;
`;

const CreditCard = () => {
  const [card, setCard] = useState({
    date: {
      year: 2020,
      month: 5,
    },
    number: 5545230034324521,
  });

  return (
    <CreditCardWrapp>
      <CreditCardRow>
        <CreditCardIcon url="" />
        <CreditCardDate>{`${card.date.month}/${card.date.year}`}</CreditCardDate>
      </CreditCardRow>
      <CreditCardRow>
        <CreditCardNumber>{card.number}</CreditCardNumber>
      </CreditCardRow>
      <CreditCardRow></CreditCardRow>
    </CreditCardWrapp>
  );
};

export default CreditCard;
