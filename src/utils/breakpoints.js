import { css } from "styled-components";

const breakpoint = (size, styles) => css`
  @media only screen and (max-width: ${size}px) {
    ${styles}
  }
`;

export default {
  xs: styles => breakpoint(500, styles),
  sm: styles => breakpoint(768, styles),
  md: styles => breakpoint(900, styles),
  lg: styles => breakpoint(1100, styles),
  xl: styles => breakpoint(1300, styles),
};
