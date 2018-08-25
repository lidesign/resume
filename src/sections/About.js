import React from "react";

import Section from "../components/Section/index";
import Header from "../components/Header/index";
import Content from "../components/Content/index";
import Skill from "../components/Skill";

const About = () => {
  return (
    <Section>
      <Header>
        <h2>About Me</h2>
      </Header>
      <Content>
        <div>
          <h2>Professional Skills</h2>
          <p>
            When it comes to front-end work, I'm comfortable working with{" "}
            <Skill>ES6</Skill>, <Skill>webpack</Skill>, <Skill>babel</Skill>,{" "}
            <Skill>React.js</Skill>, <Skill>react-router</Skill>,{" "}
            <Skill>redux</Skill>, <Skill>redux-saga</Skill>,{" "}
            <Skill>styled-components</Skill>, <Skill>emotion</Skill>,{" "}
            <Skill>Firebase</Skill>, <Skill>Auth0</Skill>, and{" "}
            <Skill>Stripe</Skill>.
          </p>
          <p>
            With non-front-end work, I have past experience working with{" "}
            <Skill>Node.js</Skill>, <Skill>express</Skill>,{" "}
            <Skill>electron</Skill>, <Skill>PostgreSQL</Skill>, and{" "}
            <Skill>Heroku</Skill>.
          </p>
          <p>
            I am also confident in my abilities to adapt and learn new
            frameworks, languages, and methodologies. I believe that one of the
            most valuable traits a developer can have is to never stop learning,
            so it has been my mantra throughout my career to do just that.
          </p>
        </div>

        <div>
          <h2>Outside of Work</h2>
          <p>
            I believe that who we are as individuals can be just as important as
            our professional abilities when joining a team. Outside of work, I
            enjoy <Skill>music production</Skill>, <Skill>guitar</Skill>,{" "}
            <Skill>bass</Skill>, <Skill>digital painting</Skill>,{" "}
            <Skill>gaming</Skill>, and <Skill>photography</Skill>.
          </p>
        </div>
      </Content>
    </Section>
  );
};

export default About;
