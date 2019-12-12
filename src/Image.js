import React from "react";
import styled from "styled-components";

import { Loader } from "./Loader";
import breakpoints from "./breakpoints";
import measurements from "./measurements";

export const Image = ({ image: { url, title } }) => {
  return (
    <ImageContainer>
      {/* {url ? <MainImage src={url} alt={title}></MainImage> : <Loader />} */}

      <MainImage
        src={
          "https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"
        }
        alt={title}
      ></MainImage>
    </ImageContainer>
  );
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
