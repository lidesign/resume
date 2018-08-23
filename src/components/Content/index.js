import React from "react";

import Wrapper from "./Wrapper";

const Content = ({ children, ...props }) => (
  <Wrapper {...props}>
    <div>{children}</div>
  </Wrapper>
);

export default Content;
