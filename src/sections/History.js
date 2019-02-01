import React from "react";

import history from "../data/history";
import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Content from "../components/Content/index";
import Timeline from "../components/Timeline/index";

const History = () => {
  return (
    <Section odd>
      <Header odd>
        <h2>Career History</h2>
      </Header>
      <Content odd fluid>
        <Timeline entries={history} />
      </Content>
    </Section>
  );
};

export default History;
