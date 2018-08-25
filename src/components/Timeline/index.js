import React from "react";

import Wrapper from "./Wrapper";
import Entry from "./Entry";

const Timeline = ({ entries = [], ...props }) => (
  <Wrapper {...props}>
    {entries.map((entry, index) => (
      <Entry key={index} {...entry} />
    ))}
  </Wrapper>
);

export default Timeline;
