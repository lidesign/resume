import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/Hero";
import SEO from "../../components/seo";
import Post from "../../components/Blog/Post";
import Footer from "../../components/Blog/Footer";
import PostList from "../../components/Blog/PostList";
import Nav from "../../components/Blog/Nav";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Nav>
          <Link to="/">&lsaquo; garet.io</Link>
        </Nav>
        <h1>Garet's Words</h1>

        <Post>
          <PostList posts={data.allMarkdownRemark.edges} />
        </Post>
        <Footer />
      </Hero>
    </Layout>
  );
};

//data.allMarkdownRemark.edges

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
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
          excerpt(pruneLength: 800)
        }
      }
    }
  }
`;
