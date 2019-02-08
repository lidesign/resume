import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const slants = {
  bottom: () => `bottom: -100px;`,
  top: () => ``,
  both: ({ reversed }) => `
  &:first-of-type {
    top: -100px;
    transform: rotateZ(180deg) ${reversed && `rotateY(180deg)`};
  }
  bottom: -100px;`,
};

const Wrapper = styled.section`
  position: relative;
  min-height: 110%;
  max-width: 100%;
  display: flex;
  overflow: visible;
  background: ${props =>
    props.odd && props.theme.content_background_odd
      ? props.theme.content_background_odd
      : props.theme.content_background};
  ${props => props.background && `background: ${props.background};`}
  z-index: ${props => props.layer};

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }

  &:first-of-type {
    min-height: 100%;
  }

  svg.slant {
    position: absolute;
    z-index: 2;
    left: 0;
    height: 100px;
    width: 100%;

    ${props => slants[props.slant]}
    ${props => props.reversed && `transform: rotateY(180deg);`}

    polygon {
      fill: ${props => props.theme.content_background};
    }
  }
`;

const Section = ({ children, slant, odd, ...props }) => (
  <Wrapper odd={odd} slant={slant} {...props}>
    {children}
    {slant && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="slant"
      >
        <polygon points="100,0 0,100 0,0" />
      </svg>
    )}
    {slant === "both" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="slant"
      >
        <polygon points="100,0 0,100 0,0" />
      </svg>
    )}
  </Wrapper>
);

Section.propTypes = {
  slant: PropTypes.oneOf(["top", "bottom", "both"]),
  layer: PropTypes.number,
};

Section.defaultProps = {
  layer: 1,
};

export default Section;
