import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Avatar from "../Avatar";
import RainbowBorder from "../RainbowBorder";
import ProfilePicture from "../../images/face-500.jpg";

const Wrapper = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 65px;

  > img {
    max-height: 100%;
  }
`;

const Author = ({ items }) => (
  <Wrapper>
    <img src={ProfilePicture} alt="Garet McKinley's Signature" />
  </Wrapper>
);

export default Author;
