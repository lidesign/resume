import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    position: relative;
    display: block;
    background: #fff;
    width: 100%;
    border-radius: 50%;
    position: relative;
    transform: scale(1.035);
  }

  &::after {
    content: "";
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.timeline_background};
    box-sizing: border-box;
  }
`;

export default Image;
