import React, { useState } from "react";

import styled from "styled-components";

import mapBg from "../../assets/map.png";

import car1 from "../../assets/car/1.png";
import car2 from "../../assets/car/2.png";
import car3 from "../../assets/car/3.png";

import Paper from "../../UI/Paper/Paper";
import CarSwitcher from "../../UI/CarSwitcher/CarSwitcher";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import SubTitle from "../../UI/Title/SubTitle";
import Select from "../../UI/Select/Select";

const MapWrapp = styled.div`
  position: relative;
`;

const MapBg = styled.img.attrs((props) => ({
  src: props.bg,
}))`
  height: 100%;
  width: 100%;
`;

const MapPaper = styled.div`
  position: absolute;
  top: 59px;
  left: 59px;
`;

const Map = () => {
  const cars = [
    { id: 1, title: "Стандарт", price: 150, icon: car1 },
    { id: 2, title: "Премиум", price: 250, icon: car2 },
    { id: 3, title: "Бизнес", price: 350, icon: car3 },
  ];

  const [activeCar, setActiveCar] = useState(cars[0]);

  const [isOrdered, setIsOrdered] = useState(false);

  const addressList = ["улица 1", "улица 2", "улица 3"];

  return (
    <MapWrapp>
      <MapBg bg={mapBg} />
      <MapPaper>
        <Paper>
          {isOrdered && <Title label="Заказ размещен" />}
          {isOrdered && (
            <SubTitle label="Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут." />
          )}
          {!isOrdered && (
            <>
              From
              <Select list={addressList} />
              To
              <Select list={addressList} />
              <CarSwitcher
                cars={cars}
                activeCar={activeCar}
                setActiveCar={setActiveCar}
              />
            </>
          )}
          <Button
            title={!isOrdered ? "Заказать" : "Сделать новый заказ"}
            onClick={
              isOrdered ? () => setIsOrdered(false) : () => setIsOrdered(true)
            }
          />
        </Paper>
      </MapPaper>
    </MapWrapp>
  );
};

export default Map;
