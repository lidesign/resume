import React from "react";

import Wrapper from "./Wrapper";
import Entry from "./Entry";

const Timeline = ({ entries = [], ...props }) => (
  <Wrapper {...props}>{entries.map(entry => <Entry {...entry} />)}</Wrapper>
);

export default Timeline;
