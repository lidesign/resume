import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import history from "../data/history";
import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Content from "../components/Content/index";
import Map from "../components/Map/index";
import Button from "../components/Button";
import Panel from "../components/Panel";

const History = () => {
  return (
    <Section>
      <Content fluid>
        <Map>
          <Panel>
            <p>
              <b>Are you interested in working with me?</b> I'm currently
              available for both full-time and contract work. Location is not an
              issue as I'm able to work remote or relocate for the right
              opportunity.
            </p>
            <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
              <Button href="mailto:hi@garet.io">Get in Touch</Button>
            </ScrollAnimation>
          </Panel>
        </Map>
      </Content>
    </Section>
  );
};

export default History;
