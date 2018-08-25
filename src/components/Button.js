import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  color: #fff;
  background: ${props => props.theme.primary_color};
  padding: 20px 20px;
  margin: 18px 0;
  border-radius: 4px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  flex-grow: 0;
`;

export default Link;
