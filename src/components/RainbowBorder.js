import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  box-sizing: border-box;
  border-radius: ${props => props.theme.panel_radius};
  padding: ${props => props.thickness}px;
  line-height: 0;

  > * {
    position: relative;
    z-index: 2;
    border-radius: ${props => props.radius}px;
    width: calc(${props => props.width} - ${props => props.thickness * 2}px);
    height: calc(${props => props.height} - ${props => props.thickness * 2}px);
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
    z-index: 0;
    border-radius: ${props => props.radius}px;
    background: inherit;
    transition: background-color 0.3s linear;
    background: linear-gradient(
      45deg,
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
    animation: ${scroll} ${props => props.speed}s linear infinite;
  }
`;

Wrapper.defaultProps = {
  radius: 5,
  speed: 5,
  thickness: 4,
  width: "100%",
  height: "100%",
};

export default Wrapper;
