import React, { useState } from "react";

import styled from "styled-components";

import Paper from "../../UI/Paper/Paper";
import Title from "../../UI/Title/Title";
import SubTitle from "../../UI/Title/SubTitle";
import Input from "../../UI/Input/Input";

import CreditCard from "../../UI/CreditCard/CreditCard";

import FormLabel from "../../components/Form/FormLabel";
import FormSubtitle from "../../components/Form/FormSubtitle";
import Button from "../../UI/Button/Button";

const ProfileWrapp = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 822px;
  width: 100%;
`;

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

const ProfileContentRow = styled.div`
  display: flex;

  ${FormLabel} {
    margin-right: 35px;
  }
`;

const ProfileContentButton = styled.div`
  max-width: 353px;
  margin: 0 auto;
`;

const Profile = () => {
  const [card, setCard] = useState({
    number: 5545230034324521,
    fullname: "Петров Петя",
    cvc: 323,
    date: "5/20",
  });

  const [submitForm, setSubmitForm] = useState(false);

  const handleCardChanger = (name, value) => {
    setCard({ ...card, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);
  };

  const test = (e) => {
    e.preventDefault();
    console.log(1);
  };

  return (
    <ProfileWrapp onSubmit={!submitForm ? handleSubmit : test}>
      <Paper>
        <Title label="Профиль" />
        <SubTitle
          label={
            !submitForm
              ? "Введите платежные данные"
              : "Платёжные данные обновлены. Теперь вы можете заказывать такси."
          }
        />
        {!submitForm ? (
          <ProfileContent>
            <ProfileContentCol>
              <FormLabel>
                <FormSubtitle title="Имя владельца" />
                <Input
                  placeholder="Loft"
                  name="fullname"
                  value={card.fullname}
                  onChange={handleCardChanger}
                />
              </FormLabel>
              <FormLabel>
                <FormSubtitle title="Номер карты" />
                <Input
                  placeholder="0000 0000 0000 0000"
                  name="number"
                  value={card.number}
                  onChange={handleCardChanger}
                />
              </FormLabel>
              <ProfileContentRow>
                <FormLabel>
                  <FormSubtitle title="MM/YY" />
                  <Input
                    type="text"
                    placeholder={card.date}
                    name="date"
                    value={card.date}
                    onChange={handleCardChanger}
                  />
                </FormLabel>
                <FormLabel>
                  <FormSubtitle title="CVC" />
                  <Input
                    placeholder="393"
                    value={card.cvc}
                    name="cvc"
                    onChange={handleCardChanger}
                  />
                </FormLabel>
              </ProfileContentRow>
            </ProfileContentCol>
            <ProfileContentCol>
              <CreditCard {...card} />
            </ProfileContentCol>
          </ProfileContent>
        ) : (
          <></>
        )}
        <ProfileContentButton>
          <Button
            type="submit"
            title={!submitForm ? "Сохранить" : "Перейти на карту"}
          />
        </ProfileContentButton>
      </Paper>
    </ProfileWrapp>
  );
};

export default Profile;
