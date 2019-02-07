import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
// import { Helmet } from "react-helmet";
import "animate.css/animate.min.css";

import GlobalStyle from "../global";
import theme from "../themes/light";
import Container from "./Container/index";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Container>{children}</Container>
          </>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
