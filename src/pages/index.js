import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { graphql } from "gatsby";
import "animate.css/animate.min.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Layer from "../components/Layer";
import Intro from "../sections/Intro";
import History from "../sections/History";
import About from "../sections/About";
// import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

// if (process.env.NODE_ENV === "production") {
//   ReactGA.initialize("UA-124514795-1");
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

if (process.env.NODE_ENV === "development") {
  const a11y = require("react-a11y").default;
  a11y(React, ReactDOM, {
    rules: {
      "img-uses-alt": "warn",
      "img-redundant-alt": ["warn", ["image", "photo", "foto", "bild"]],
      "aria-role": "warn",
      "aria-unsupported-elements": "warn",
      "tabindex-no-positive": "warn",
      "click-events-have-key-events": "warn",
      "hidden-uses-tabindex": "warn",
      "interactive-supports-focus": "warn",
      "label-has-for": "warn",
      "label-uses-for": "warn",
      "mouse-events-have-key-events": "warn",
      "no-access-key": "warn",
      "no-hash-ref": "warn",
      "no-onchange": "warn",
      "onclick-uses-role": "warn",
      "tabindex-uses-button": "warn",
    },
  });
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <History />
    <About posts={data.allMarkdownRemark.edges} />
    {/* <Projects posts={data.allMarkdownRemark.edges} /> */}
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;

export default IndexPage;
