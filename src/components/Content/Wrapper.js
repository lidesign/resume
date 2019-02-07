import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  color: ${props =>
    props.odd ? props.theme.content_color_odd : props.theme.content_color};

  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.fluid ? 0 : props.theme.content_padding)};

  > div {
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    > div {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  h1 {
    font-size: 120px;
    font-weight: 700;
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
    border-bottom: 1px solid
      ${props =>
        props.odd
          ? props.theme.content_separator_odd
          : props.theme.content_separator};
    padding-bottom: 10px;
    margin-bottom: 30px;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h3 {
    color: ${props =>
      props.odd ? props.theme.content_color_odd : props.theme.content_color};
    font-size: 28px;
    line-height: 1.5;
    margin-top: 10px;

    b {
      color: ${props => props.theme.colors.secondary};
      font-weight: 400;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: ${props =>
      props.odd ? props.theme.content_color_odd : props.theme.content_color};
    margin-bottom: 1.375rem;
    line-height: 1.5;
  }
`;

export default Wrapper;
