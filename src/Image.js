import React from "react";
import styled from "styled-components";

export const Image = ({ image: { url, title } }) => {
  return <MainImage src={url} alt={title}></MainImage>;
};

const MainImage = styled.img`
  width: calc(100% - 20vw);
  height: 100vh;
  margin-left: 20vw;
  background-color: #3c3c3c;
`;
