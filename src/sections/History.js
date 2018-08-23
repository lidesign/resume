import React from "react";

import history from "../data/history";
import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Content from "../components/Content/index";
import Timeline from "../components/Timeline/index";

const History = () => {
  return (
    <Section>
      <Header alt>
        <h2>Career History</h2>
      </Header>
      <Content alt fluid>
        <Timeline entries={history} />
      </Content>
    </Section>
  );
};

export default History;
