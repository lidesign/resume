import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #00adef;
  background: -moz-linear-gradient(-45deg, #00adef 0%, #0076e5 100%);
  background: -webkit-linear-gradient(-45deg, #00adef 0%, #0076e5 100%);
  background: linear-gradient(135deg, #00adef 0%, #0076e5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00adef', endColorstr='#0076e5',GradientType=1 );
  position: relative;
  height: 700px;
  width: 100%;
  margin: 0px auto;
  padding: 0px auto;
`;

const Starfield = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
      <div id="container-inside">
        <div id="circle-small" />
        <div id="circle-medium" />
        <div id="circle-large" />
        <div id="circle-xlarge" />
        <div id="circle-xxlarge" />
      </div>
    </Wrapper>
  );
};

export default Starfield;
