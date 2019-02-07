import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

const Button = styled.a`
  display: block;
  color: ${props => props.theme.colors.purple_light};
  padding: 20px 20px;
  margin: 18px 0;
  border-radius: 4px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  flex-grow: 0;
  transition: transform 0.1s ease-out;
  position: relative;
  z-index: 3;

  &:hover {
    transform: scale(1.1);

    &::before {
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -0;
    top: -0;
    left: -0;
    right: -0;
    height: auto;
    width: auto;
    z-index: -1;
    border-radius: 3px;
    background: inherit;
    transition: background-color 0.3s linear;
    background: linear-gradient(
      90deg,
      #0ebeff,
      #ffdd40,
      #ae63e4,
      #47cf73,
      #0ebeff,
      #ffdd40,
      #ae63e4,
      #47cf73,
      #0ebeff
    );
    background-size: 200% 200%;
    animation-fill-mode: forwards;
    animation: ${scroll} 5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    top: 5px;
    left: 5px;
    right: 5px;
    height: auto;
    width: auto;
    z-index: -1;
    border-radius: 3px;
    background: ${props => props.theme.colors.black};
    -webkit-transition: background-color 0.3s linear;
    transition: background-color 0.3s linear;
  }
`;

export default Button;
