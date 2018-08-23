import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-around;
  width: 400px;
  min-height: 200px;

  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
    flex-flow: row wrap;
  }
`;

export default Wrapper;
