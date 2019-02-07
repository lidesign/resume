import styled from "styled-components";

import breakpoints from "../../utils/breakpoints";

const Post = styled.div`
  background: white;
  color: black;
  padding: 50px 65px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  box-sizing: border-box;

  margin-right: 65px;

  ${breakpoints.sm(`
    border-radius: 0;
    margin-right: 0;
  `)}

  > div {
    width: 100%;
    max-width: 900px;

    *:first-child {
      margin-top: 0;
    }
  }

  pre,
  code {
    max-width: 100%;
  }

  time {
    display: block;
    margin-bottom: 10px;
    opacity: 0.5;
  }

  article {
    margin-bottom: 65px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Rubik", sans-serif;
    margin-left: 0;
    padding-bottom: 2px;
  }

  h2 {
    display: inline-block;
    margin: 45px 0 10px 0;
    color: hsla(0, 0%, 0%, 1);
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 35px;
    line-height: 1.1;

    background: linear-gradient(
      50deg,
      #0ebeff,
      ${props => props.theme.colors.primary}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  blockquote {
    padding-bottom: 0;
    padding-left: 1.75781rem;
    padding-right: 0;
    padding-top: 0;
    font-size: 1.1487rem;
    line-height: 1.5625rem;
    color: hsla(0, 0%, 0%, 0.59);
    border-left: 0.58594rem solid;
    border-color: ${props => props.theme.colors.primary};
  }

  pre,
  blockquote {
    margin: 45px 0 45px 0;
  }

  .twitter-tweet {
    margin: 50px 0 !important;
  }

  p {
    font-size: ${props => props.theme.post_body_font_size};
    margin-bottom: ${props => props.theme.global_margin};

    ${props =>
      breakpoints.xs(`
      font-size: ${props.theme.post_body_font_size_mobile};
      margin-bottom: ${props.theme.global_margin_mobile};
    `)}

    img {
      max-width: 100%;
    }
  }
`;

export default Post;
