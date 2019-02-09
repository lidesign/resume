import styled from "styled-components";
import { lighten } from "polished";

const Wrapper = styled.div`
  position: relative;
  margin-left: 60px;
  background: ${props => props.theme.timeline_background};
  border-radius: 0.25em;
  padding: 1em 2em;

  h3,
  h4 {
    font-size: 19px;
    color: ${props => props.theme.timeline_color};

    b {
      font-weight: 600;
    }
  }

  p {
    font-size: 15px;
    margin: 1em 0;
    line-height: 1.6;
    color: ${props => props.theme.timeline_color};
  }

  time {
    float: left;
    padding: 0.8em 0;
    opacity: 0.7;
    display: inline-block;
    color: ${props => props.theme.timeline_color};
  }

  &::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid ${props => props.theme.timeline_background};
  }

  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default Wrapper;
