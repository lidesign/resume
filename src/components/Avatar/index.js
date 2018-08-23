import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;

  @media only screen and (max-width: 850px) {
    width: initial;
    height: 100%;
  }
`;

export default Avatar;
