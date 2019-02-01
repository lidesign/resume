import styled, { keyframes } from "styled-components";

const pulse = keyframes`
from {
  transform: scale(0.5);
  opacity: 1;
}

to {
  transform: scale(1.5);
  opacity: 0;
}`;

const green = "#72ff7d";
const red = "#ff4242";

const Status = styled.a`
  position: relative;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  margin: 0 ${props => props.border}px;
  background: ${props => (props.available ? green : red)};

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: ${props => -(props.border / 2)}px;
    top: ${props => -(props.border / 2)}px;
    width: ${props => props.size + props.border}px;
    height: ${props => props.size + props.border}px;
    background: ${props => (props.available ? green : red)};
    border-radius: 50%;
    animation: ${pulse} 1.5s infinite ease-in;
  }
`;

Status.defaultProps = {
  available: false,
  size: 15,
  border: 10,
};

export default Status;
