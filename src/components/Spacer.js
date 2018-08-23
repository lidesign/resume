import styled from "styled-components";
import PropTypes from "prop-types";

const Spacer = styled.section`
  visibility: hidden;
  ${props => props.top && "margin-top: auto;"}
  ${props => props.bottom && "margin-bottom: auto;"}
  ${props => props.left && "margin-left: auto;"}
  ${props => props.right && "margin-right: auto;"}
`;

Spacer.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Spacer;
