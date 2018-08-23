import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-left: 60px;
  background: ${props => props.theme.timeline.background};
  border-radius: 0.25em;
  padding: 1em 2em;
  box-shadow: 0 3px 0 ${props => props.theme.primary};

  h3, h4 {
    color: ${props => props.theme.timeline.color};
  }

  p {
    font-size: 15px;;
    margin: 1em 0;
    line-height: 1.6;
    color: ${props => props.theme.timeline.color};
  }
  
  time {
    float: left;
    padding: .8em 0;
    opacity: .7;
    display: inline-block;
    color: ${props => props.theme.timeline.color};
  }

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid ${props => props.theme.timeline.background};
  }

  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default Wrapper;
