import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: ${props =>
    props.alt && props.theme.content.alt.background
      ? props.theme.content.alt.background
      : props.theme.content.background};
  color: ${props => props.theme.content.color};

  display: flex;
  flex: 1 0;
  align-items: center;
  padding: ${props => (props.fluid ? 0 : props.theme.content.padding)};

  > div {
    position: relative;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media only screen and (max-width: 850px) {
    > div {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  h2 {
    font-size: 24px;
    color: ${props => props.theme.primary};
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 30px;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h3 {
    color: #515151;
    font-size: 28px;
    line-height: 1.5;
    margin-top: 10px;

    b {
      color: ${props => props.theme.primary};
      font-weight: 400;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #939393;
    margin-bottom: 1.375rem;
    line-height: 1.5;
  }
`;

export default Wrapper;
