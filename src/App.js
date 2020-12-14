import React from "react";

import styled from "styled-components";

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      {/* <Login /> */}
      <Main />
    </AppWrapper>
  );
};

export default App;
