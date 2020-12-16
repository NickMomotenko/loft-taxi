import React, { useState } from "react";

import styled from "styled-components";

import mapBg from "../../assets/map.png";

import Logo from "../Logo/Logo";

import FormBlock from "../Form/FormBlock";
import FormLabel from "../Form/FormLabel";
import FormSubtitle from "../Form/FormSubtitle";
import FormBottomBlock from "../Form/FormBottomBlock";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const LoginWrapp = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
`;

const LoginCol = styled.div`
  width: ${(props) => props.size && `${props.size}px`};
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  background-image: url(${(props) => props.bgImage && props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    flex: 1;
  }
`;

const LoginSubButton = styled.a`
  font-size: 16px;
  color: #828282;
  margin: 13px 0 46px;
  display: inline-block;
`;

const Login = () => {
  const data = {
    login: {
      email: "",
      password: "",
    },
    registration: {
      email: "",
      password: "",
      fullname: "",
    },
  };

  const [page, setPage] = useState("login");

  const changeCurrentPage = (e, name) => {
    e.preventDefault();
    setPage(name);
  };

  return (
    <LoginWrapp>
      <LoginCol bg="#1C1A19" size="485">
        <Logo />
      </LoginCol>
      <LoginCol bgImage={mapBg}>
        <FormBlock title={page == "login" ? "Войти" : "Регистрация"}>
          {Object.keys(
            page === "login"
              ? data.login
              : page === "registration"
              ? data.registration
              : null
          ).map((label) => (
            <FormLabel key={label}>
              <FormSubtitle
                title={
                  label == "email"
                    ? "Email"
                    : label == "password"
                    ? "Пароль"
                    : label == "fullname"
                    ? "Как вас зовут?"
                    : ""
                }
              />
              <Input
                type={label == "password" && "password"}
                placeholder={
                  label == "email"
                    ? "mail.mail.com"
                    : label == "password"
                    ? "**********"
                    : label == "fullname"
                    ? "Петр Александрович"
                    : ""
                }
              />
            </FormLabel>
          ))}

          {page == "login" && (
            <LoginSubButton href="#">Забыли пароль?</LoginSubButton>
          )}

          <Button title={page == "login" ? "Войти" : "Зарегистрироваться"} />

          <FormBottomBlock
            text={
              page == "login" ? "Новый пользователь?" : "Уже зарегестрированны?"
            }
            label={page == "login" ? "Регистрация" : "Войти"}
            onClick={(e) =>
              changeCurrentPage(e, page == "login" ? "registration" : "login")
            }
          />
        </FormBlock>
      </LoginCol>
    </LoginWrapp>
  );
};

export default Login;
