import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid ${props => props.theme.content_separator};
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  margin-top: 30px;
  padding-top: 30px;

  @media only screen and (max-width: 850px) {
    position: initial;
  }

  @media only screen and (max-height: 750px) {
    position: initial;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default Wrapper;
