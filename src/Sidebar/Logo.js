import React from "react";
import styled from "styled-components";
import logo from "../assets/nasa.png";

export const Logo = () => {
  return (
    <>
      <NasaLogo src={logo} />
      <p>ASTRONOMY PHOTO OF THE DAY</p>
    </>
  );
};

const NasaLogo = styled.img`
  width: 50%;
`;
