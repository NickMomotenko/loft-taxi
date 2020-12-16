import React from "react";

import styled from "styled-components";

import Paper from "../../UI/Paper/Paper";
import Title from "../../UI/Title/Title";
import SubTitle from "../../UI/Title/SubTitle";

import CreditCard from "../../UI/CreditCard/CreditCard";

const ProfileWrapp = styled.div``;

const ProfileContent = styled.div`
  display: flex;
`;

const ProfileContentCol = styled.div`
  flex: 1;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }
`;

const Profile = () => {
  return (
    <ProfileWrapp>
      <Paper>
        <Title label="Профиль" />
        <SubTitle label="Введите платежные данные" />
        <ProfileContent>
          <ProfileContentCol></ProfileContentCol>
          <ProfileContentCol>
            <CreditCard />
          </ProfileContentCol>
        </ProfileContent>
      </Paper>
    </ProfileWrapp>
  );
};

export default Profile;
