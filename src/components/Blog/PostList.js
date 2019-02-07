import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  .meta {
    opacity: 0.5;
    time {
      display: inline-block;
      opacity: 1;
    }
  }

  article {
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const PostList = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => (
      <div key={node.id}>
        <div className="meta">
          <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>{" "}
          &middot; {node.timeToRead} minute read
        </div>
        <Link to={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
        </Link>

        <article>
          <Link to={node.fields.slug}>{node.excerpt}</Link>
        </article>
      </div>
    ))}
  </Wrapper>
);

export default PostList;
