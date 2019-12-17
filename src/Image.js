import React from "react";
import styled from "styled-components";

import { Loader } from "./Loader";
import breakpoints from "./breakpoints";
import measurements from "./measurements";

export const Image = ({ image: { hdurl, url, title, media_type } }) => {
  if (url) {
    if (media_type === "image") {
      return (
        <ImageContainer>
          <MainImage src={hdurl} alt={title}></MainImage>
        </ImageContainer>
      );
    } else {
      return (
        <ImageContainer>
          <MainVideo src={url}></MainVideo>
        </ImageContainer>
      );
    }
  } else {
    return (
      <ImageContainer>
        <Loader></Loader>
      </ImageContainer>
    );
  }
};

const ImageContainer = styled.div`
  width: calc(100% - ${measurements.sidebarWidth});
  height: 100vh;
  margin-left: ${measurements.sidebarWidth};
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.cutoff}) {
    width: 100%;
    height: calc(100vh - ${measurements.navHeight});
    margin-left: 0;
    display: block;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainVideo = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;

  @media (max-width: ${breakpoints.cutoff}) {
    min-height: 500px;
  }
`;
