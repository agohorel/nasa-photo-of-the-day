import React from "react";
import styled from "styled-components";

export const Image = ({ image: { url, title } }) => {
  return <MainImage src={url}></MainImage>;
};

const MainImage = styled.img`
  width: 100%;
  height: 100vw;
  background-color: #3c3c3c;
`;
