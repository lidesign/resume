import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);

  img {
    display: block;
    background: #fff;
    width: 100%;
    position: relative;
    border-radius: 50%;
`;

export default Image;
