import styled from "styled-components";

const valign = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const Wrapper = styled.header`
  display: flex;
  justify-content: ${props => valign[props.valign]};
  align-items: center;
  box-sizing: border-box;
  position: relative;

  background: ${props =>
    props.odd && props.theme.header.odd.background
      ? props.theme.header.odd.background
      : props.theme.header.background};
  color: ${props => props.theme.header.color};
  text-align: right;

  width: 30%;
  padding: ${props => props.theme.header.padding};

  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 200px;
    padding: 35px;
    text-align: center;
  }

  h2 {
    font-size: 44px;
    line-height: 0.8;
    text-transform: uppercase;
    font-weight: 600;

    @media only screen and (max-width: 850px) {
      font-size: 30px;
    }
  }
`;

Wrapper.defaultProps = {
  valign: "middle",
};

export default Wrapper;
