import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "animate.css/animate.min.css";

import "./global";
import theme from "./themes/light";
import Avatar from "./components/Avatar/index";
import Container from "./components/Container/index";
import Section from "./components/Section/index";
import Header from "./components/Header/index";
import Content from "./components/Content/index";
import Timeline from "./components/Timeline/index";
import Intro from "./sections/Intro";
import History from "./sections/History";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Intro />
        <History />
        <About />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
