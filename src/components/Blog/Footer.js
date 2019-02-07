import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Signature from "../../images/signature.svg";

const Wrapper = styled.footer`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 65px 0;

  img {
    width: 250px;
  }
`;

const List = ({ items }) => (
  <Wrapper>
    <Link to="/">
      <img src={Signature} alt="Garet McKinley's Signature" />
    </Link>
  </Wrapper>
);

export default List;
