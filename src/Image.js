import React from "react";
import styled from "styled-components";

import { Loader } from "./Loader";
import breakpoints from "./breakpoints";
import measurements from "./measurements";

export const Image = ({ image: { url, title } }) => {
  return (
    <ImageContainer>
      {url ? <MainImage src={url} alt={title}></MainImage> : <Loader />}

      {/* <MainImage
        src={
          "https://apod.nasa.gov/apod/image/1912/N63A_HubbleChandraSchmidt_960.jpg"
        }
        alt={title}
      ></MainImage> */}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  margin-left: ${measurements.sidebarWidth};
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.cutoff}) {
    width: 100%;
    height: 100vh;
    margin-left: 0;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
