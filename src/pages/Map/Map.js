import React from "react";

import styled from "styled-components";

import mapBg from "../../assets/map.png";

const MapWrapp = styled.div``;

const MapBg = styled.img.attrs((props) => ({
  src: props.bg,
}))`
  height: 100%;
  width: 100%;
`;

const Map = () => {
  return (
    <MapWrapp>
      <MapBg bg={mapBg} />
    </MapWrapp>
  );
};

export default Map;
