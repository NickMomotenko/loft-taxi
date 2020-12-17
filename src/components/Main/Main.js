import React from "react";

import styled from "styled-components";

import Header from "../Header/Header";

import Map from "../../pages/Map/Map";
import Profile from "../../pages/Profile/Profile";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainBlockContent = styled.div`
  flex: 1;
  position: relative;
`;

const Main = ({ page, setPage }) => {
  return (
    <MainBlock>
      <Header setPage={setPage} />
      <MainBlockContent>
        {page == "map" && <Map />}
        {page == "profile" && <Profile />}
      </MainBlockContent>
    </MainBlock>
  );
};

export default Main;
