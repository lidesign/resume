import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 600;
  font-size: 17px;

  li {
    margin-bottom: 10px;

    a {
      color: ${props => props.theme.colors.secondary};
    }

    span {
      color: ${props => props.theme.colors.white};
      opacity: 0.75;
    }
  }
`;

const List = ({ items }) => (
  <Wrapper>
    {items.map(child => (
      <li>{child}</li>
    ))}
  </Wrapper>
);

export default List;
