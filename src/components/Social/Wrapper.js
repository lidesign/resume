import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  bottom: ${props => props.theme.header.padding};
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-around;

  @media only screen and (max-width: 950px) {
    flex-direction: column;

    a {
      margin-top: 10px;
    }
  }
`;

export default Wrapper;
