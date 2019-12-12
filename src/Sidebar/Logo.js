import React from "react";
import styled from "styled-components";
import logo from "../assets/nasa.png";

import breakpoints from "../breakpoints";

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

  @media (max-width: ${breakpoints.cutoff}) {
    width: 25%;
    min-width: 150px;
  }
`;

const SubText = styled.h4`
  max-width: 50%;
  margin: 0 auto;
  color: white;
`;
