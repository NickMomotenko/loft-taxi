import React from "react";

import styled from "styled-components";

const CarSwitcherItemWrapp = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 13px;
  margin-right: 20px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border: 1px solid
    ${({ activeId, carId }) => (activeId === carId ? "red" : "transparent")};

  &:last-child {
    margin-right: 0;
  }
`;

const CarSwitcherItemIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  max-width: 100%;
`;

const CarSwitcherItemTitle = styled.div``;

const CarSwitcherItemPrice = styled.div``;

const CarSwitcherItemPriceText = styled.div``;

const CarSwitcherItemPriceValue = styled.div``;

const CarSwitcherItem = ({
  item: { id, title, price, icon },
  item,
  activeCar,
  setActiveCar,
}) => {
  return (
    <CarSwitcherItemWrapp
      activeId={activeCar.id}
      carId={id}
      onClick={() => setActiveCar(item)}
    >
      <CarSwitcherItemTitle>{title}</CarSwitcherItemTitle>
      <CarSwitcherItemPrice>
        <CarSwitcherItemPriceText>Стоимость</CarSwitcherItemPriceText>
        <CarSwitcherItemPriceValue>{`${price} р`}</CarSwitcherItemPriceValue>
      </CarSwitcherItemPrice>
      <CarSwitcherItemIcon url={icon} />
    </CarSwitcherItemWrapp>
  );
};

export default CarSwitcherItem;
