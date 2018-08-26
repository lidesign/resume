import React from "react";
import { ThemeProvider } from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import "animate.css/animate.min.css";

import "./global";
import theme from "./themes/light";
import Container from "./components/Container/index";
import Intro from "./sections/Intro";
import History from "./sections/History";
import About from "./sections/About";
import Contact from "./sections/Contact";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-124514795-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet>
        <title>Garet McKinley</title>
      </Helmet>
      <Intro />
      <History />
      <About />
      <Contact />
    </Container>
  </ThemeProvider>
);

export default App;
