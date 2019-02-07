import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import Post from "../components/Blog/Post";
// import Author from "../components/Blog/Author";
import SEO from "../components/seo";
import Footer from "../components/Blog/Footer";
import Nav from "../components/Blog/Nav";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Hero>
        <Nav>
          <Link to="/blog">&lsaquo; Blog home</Link>
        </Nav>
        <h1>{post.frontmatter.title}</h1>

        <h3>
          <span>{post.frontmatter.date}</span>
        </h3>
        <Post>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <Author /> */}
        </Post>
        <Footer />
      </Hero>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
