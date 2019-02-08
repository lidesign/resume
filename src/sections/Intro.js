import React from "react";

import Grid from "../components/Grid";
import Link from "../components/Link";
import Skill from "../components/Skill";
import Avatar from "../components/Avatar/index";
import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Content from "../components/Content/index";
import Status from "../components/Status";

// Images
import ProfilePicture from "../images/face-500.jpg";
import GitHub from "../icons/github";
import Twitter from "../icons/twitter";
import CodePen from "../icons/codepen";

const Intro = () => {
  return (
    <Section slant="bottom" layer={3}>
      <Header>
        <Avatar
          src={ProfilePicture}
          alt="Garet staring off into the distance"
        />
      </Header>
      <Content>
        <div>
          <h2>Hello, I'm Garet McKinley</h2>
          <h3>
            I'm a nomadic <b>Front-end Developer</b> who is passionate about
            making the web faster and more accessible.
          </h3>
          <p>
            I really <Skill className="glyph">❤</Skill> working with:{" "}
            <Skill>React</Skill>, <Skill>Redux</Skill>, and{" "}
            <Skill>styled-components</Skill>.
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
              <h4>
                Available <Status available size={12} />
              </h4>
              <p>
                For full-time <br />
                or freelance work.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4>Social</h4>
              <p>
                <Link href="https://github.com/garetmckinley" target="_blank">
                  <GitHub />
                </Link>
                <Link href="https://twitter.com/garetmckinley" target="_blank">
                  <Twitter />
                </Link>
                <Link href="https://codepen.io/garetmckinley" target="_blank">
                  <CodePen />
                </Link>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Footer>
      </Content>
    </Section>
  );
};

export default Intro;
