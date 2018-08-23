import React from "react";
import { SocialIcon } from "react-social-icons";

import Wrapper from "./Wrapper";

const Social = ({ ...props }) => (
  <Wrapper>
    <SocialIcon url="https://twitter.com/gareteliot" />
    <SocialIcon url="https://github.com/gareteliot" />
    <SocialIcon url="https://instagram.com/gareteliot" />
    <SocialIcon url="https://open.spotify.com/artist/4lBg0RoUTDf0xeGFNx8DMl?si=_8mk3WEwSZKAtOmlzcC9Pw" />
  </Wrapper>
);

export default Social;
