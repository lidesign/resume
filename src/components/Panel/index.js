import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 200px;
  padding: ${props => props.theme.panel_padding};
  background: ${props => props.theme.panel_background};
  border-radius: ${props => props.theme.panel_radius};

  @media only screen and (max-width: 850px) {
    background: ${props => props.theme.panel_background_fullscreen};
    width: 100%;
    height: 100%;
  }

  p {
    b {
      color: ${props => props.theme.primary_color};
    }
  }
`;

export default Wrapper;
