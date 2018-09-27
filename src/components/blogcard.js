import React from "react";
import styled from "styled-components";
import * as Type from "../style/typography";
import { Link, StaticQuery, graphql } from "gatsby";
import * as Colors from "../style/colors";

const BlogCardBackground = styled(Link)`
  background-color: ${Colors.LIGHT_GREY};
  padding: 1rem;
  width: 25%;
  height: 15rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const BlogHeader = styled.text`
  ${Type.LARGEBODY};
  color: ${Colors.BLACK};
`;

const BlogCard = () => (
  <StaticQuery
    query={graphql`
      query BlogCardQuery {
        allMarkdownRemark(limit: 10) {
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
            <BlogHeader>{blogpost.node.frontmatter.title_test}</BlogHeader>
          </BlogCardBackground>
        ))
    }
  />
);

export default BlogCard;
