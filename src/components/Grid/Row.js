import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
    flex-flow: row wrap;
  }
`;

export default Row;
