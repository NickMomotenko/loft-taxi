import React from "react";

import styled from "styled-components";

import Header from "../Header/Header";
import Map from "../Map/Map";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainBlockContent = styled.div`
  flex: 1;
`;

const Main = () => {
  return (
    <MainBlock>
      <Header />
      <MainBlockContent>
        <Map />
      </MainBlockContent>
    </MainBlock>
  );
};

export default Main;
