import React from "react";

import styled from "styled-components";

import CarSwitcherItem from "./CarSwitcherItem";

const CarSwitcherWrapp = styled.div`
  display: flex;
`;

const CarSwitcher = ({ cars, ...rest }) => {
  return (
    <CarSwitcherWrapp>
      {cars.map((item) => (
        <CarSwitcherItem key={item.id} item={item} {...rest} />
      ))}
    </CarSwitcherWrapp>
  );
};

export default CarSwitcher;
