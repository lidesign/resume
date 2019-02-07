import React from "react";
import styled from "styled-components";

import breakpoints from "../../utils/breakpoints";

const patterns = [
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/connectwork.png",
    blend: "screen",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/just-waves.png",
    blend: "multiply",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/folk-pattern-black.png",
    blend: "screen",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/dark-triangles.png",
    blend: "screen",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/diagonal-squares.png",
    blend: "screen",
  },
  {
    url: "https://www.toptal.com/designers/subtlepatterns/patterns/mosaic.png",
    blend: "screen",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/footer_lodyas.png",
    blend: "color-dodge",
  },
  {
    url:
      "https://www.toptal.com/designers/subtlepatterns/patterns/what-the-hex-dark.png",
    blend: "screen",
  },
];

const randomPattern = () => {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return `url("${pattern.url}");
  background-blend-mode: ${pattern.blend}`;
};

const Wrapper = styled.header`
  position: relative;
  min-height: 100vh;
  color: white;
  box-sizing: border-box;
  background: linear-gradient(
    150deg,
    ${props => props.theme.colors.primary} 15%,
    #0ebeff 100%
  ), ${randomPattern};
  

  h1, h2, h3, h4, h5, h6 {
    font-family: "Rubik", sans-serif;
    line-height: 1;
    margin: 0 65px;
  }

  h1 {
    display: flex;
    align-items: center;
    height: 500px;
    box-sizing: border-box;
    font-size: 100px;
    font-weight: 700;    

    ${breakpoints.lg(`
      font-size: 8vw;
    `)}

    ${breakpoints.sm(`
      font-size: 60px;
    `)}

    ${breakpoints.xs(`
      font-size: 35px;
      height: 250px;
    `)}
  }

  h3 {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 15px;
    font-size: 18px;
  }
`;

const Hero = ({ children, ...props }) => (
  <Wrapper {...props}>
    <div>{children}</div>
    <div className="pattern" />
  </Wrapper>
);

export default Hero;
