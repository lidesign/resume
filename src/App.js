import React from "react";
import { ThemeProvider } from "styled-components";
import "animate.css/animate.min.css";

import "./global";
import theme from "./themes/light";
import Container from "./components/Container/index";
import Intro from "./sections/Intro";
import History from "./sections/History";
import About from "./sections/About";
import Contact from "./sections/Contact";

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Intro />
      <History />
      <About />
      <Contact />
    </Container>
  </ThemeProvider>
);

export default App;
