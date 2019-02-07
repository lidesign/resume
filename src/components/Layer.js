import PropTypes from "prop-types";
import styled from "styled-components";

const Layer = styled.div`
  position: ${props => props.position};
  z-index: ${props => props.index};
  background: transparent;
`;

Layer.propTypes = {
  position: PropTypes.oneOf(["absolute", "relative", "fixed"]),
  index: PropTypes.number,
};

Layer.defaultProps = {
  position: "relative",
  index: 1,
};

export default Layer;
