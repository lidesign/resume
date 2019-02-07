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
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 200px;
  padding: ${props => props.theme.panel_padding};
  background: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.panel_radius};

  @media only screen and (max-width: 850px) {
    background: ${props => props.theme.panel_background_fullscreen};
    width: 100%;
    height: 100%;
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
    z-index: 1;
    border-radius: 3px;
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
    z-index: 1;
    border-radius: 3px;
    background: ${props => props.theme.colors.black};
    -webkit-transition: background-color 0.3s linear;
    transition: background-color 0.3s linear;
  }

  p {
    position: relative;
    z-index: 3;
    b {
      color: ${props => props.theme.colors.purple_light};
    }
  }
`;

export default Wrapper;
