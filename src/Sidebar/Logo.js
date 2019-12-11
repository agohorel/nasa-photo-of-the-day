import React from "react";
import styled from "styled-components";
import logo from "../assets/nasa.png";

export const Logo = () => {
  return (
    <>
      <NasaLogo src={logo} />
      <SubText>Astronomy Photo Of The Day</SubText>
    </>
  );
};

const NasaLogo = styled.img`
  margin-top: 25px;
  width: 67%;
`;

const SubText = styled.h4`
  max-width: 50%;
  margin: 0 auto;
  color: white;
`;
