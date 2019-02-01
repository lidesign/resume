import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.theme.primary_color};
  font-weight: 800;
  text-decoration: none;

  &.glyph {
    position: relative;
    top: 5px;
    margin: 0px 4px;
    font-size: 26px;
  }
`;

export default Link;
