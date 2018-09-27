import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";

const BlogCardBackground = styled(Link)`
  background-color: red;
  width: 30%;
`;

const BlogCard = () => (
  <StaticQuery
    query={graphql`
      query BlogCardQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title_test
                templateKey
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges
        .filter(
          blogpost => blogpost.node.frontmatter.templateKey === "blogpost"
        )
        .map(blogpost => (
          <BlogCardBackground to={blogpost.node.frontmatter.path}>
            <h3>{blogpost.node.frontmatter.title_test}</h3>
          </BlogCardBackground>
        ))
    }
  />
);

export default BlogCard;
