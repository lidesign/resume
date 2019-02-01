import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;

  position: relative;
  padding: 8em 0;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: ${props => props.theme.timeline_background};
  }
`;

export default Wrapper;
