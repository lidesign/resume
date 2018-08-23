import React from "react";

import Wrapper from "./Wrapper";
import Image from "./Image";
import Bubble from "./Bubble";

const Entry = ({ date, title, logo, position, content }) => (
  <Wrapper animateIn="bounceInRight" duration={0.5}>
    <Image>
      <img src={logo} alt="Logo" />
    </Image>
    <Bubble>
      {title && (
        <h4>
          <b>{title}</b> &sdot; {position}
        </h4>
      )}
      {content && <p>{content}</p>}
      {date && <time>{date}</time>}
    </Bubble>
  </Wrapper>
);

export default Entry;
