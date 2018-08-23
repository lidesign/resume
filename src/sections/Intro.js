import React from "react";

import Grid from "../components/Grid";
import Spacer from "../components/Spacer";
import Link from "../components/Link";
import Skill from "../components/Skill";
import Avatar from "../components/Avatar/index";
import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Content from "../components/Content/index";

const Intro = () => {
  return (
    <Section>
      <Header>
        <Avatar src="/avatar.jpg" />
      </Header>
      <Content>
        <div>
          <h2>Hello, I'm Garet McKinley</h2>
          <h3>
            I'm a <b>Front-end Developer</b> currently located in New Orleans,
            LA who is passionate about finding creative solutions to difficult
            problems.
          </h3>
          <p>
            I especially <Skill>❤</Skill> working with: <Skill>React</Skill>,{" "}
            <Skill>Redux</Skill>, and <Skill>styled-components</Skill>.
          </p>
        </div>

        <Footer className="animated fadeInUp">
          <Grid.Row>
            <Grid.Column>
              <h4>Phone</h4>
              <p>
                <Link href="tel:+17029004777">702.900.4777</Link>
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4>Email</h4>
              <p>
                <Link href="mailto:hi@garet.io">hi@garet.io</Link>
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4>Availability</h4>
              <p>
                Seeking Full-Time<br />or Contract work.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4>GitHub</h4>
              <p>
                <Link href="https://github.com/gareteliot" target="_blank">
                  @gareteliot
                </Link>{" "}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Footer>
      </Content>
    </Section>
  );
};

export default Intro;
