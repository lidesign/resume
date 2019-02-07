import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: relative;
    background: ${props => props.theme.colors.black};
    height: 100%;
    width: 100%;
  }
`;

const randRange = (min, max) => Math.random() * (max - min) + min;

const spawnStars = (width, height, maxSize, count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    console.log("what");
    stars.push(
      <circle
        fill="#fff"
        cx={randRange(0, width)}
        cy={randRange(0, height)}
        r={randRange(0.05, maxSize)}
        style={{
          animation: `twinkle ${randRange(1, 10)}s ease-in-out infinite`,
        }}
      />
    );
  }
  return stars;
};

const Starfield = ({ width, height, stars, maxSize = 0.75, ...props }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", zIndex: -1 }}
    preserveAspectRatio="none"
  >
    {spawnStars(width, height, maxSize, stars)}
  </svg>
);

const Map = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
      <Starfield width={800} height={800} stars={1000} />
    </Wrapper>
  );
};

export default Map;
