import styled from "styled-components";

const Section = styled.section`
  background: gray;
  min-height: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export default Section;
