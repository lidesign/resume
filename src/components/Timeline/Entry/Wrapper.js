import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Wrapper = styled(ScrollAnimation)`
  position: relative;
  margin: 2em 0;

  &::after {
    clear: both;
    content: "";
    display: table;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  time {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 18px;
    font-weight: 300;

    b {
      font-weight: 400;
    }
  }

  p {
    color: #fff;
  }

  img {

  }
`;

export default Wrapper;
