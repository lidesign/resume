import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import List from "./List";

const PostList = ({ posts }) => (
  <List
    items={posts.map(({ node }) => (
      <>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <span> &middot; {node.frontmatter.date}</span>
      </>
    ))}
  />
);

export default PostList;
