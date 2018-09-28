import React from "react";
import styled from "styled-components";
import * as Type from "../style/typography";
import { Link, StaticQuery, graphql } from "gatsby";
import * as Colors from "../style/colors";
import Img from "gatsby-image";
import * as BreakPoints from "../style/breakpoints";

const BlogCardBackground = styled(Link)`
  background-color: ${Colors.WHITE};
  display: flex;

  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  ${BreakPoints.SMALL} {
    margin-left: 2rem;
    margin-right: 2rem;
    flex-direction: row;
    margin-bottom: 2rem;
  }
  ${BreakPoints.MEDIUM} {
    height: 18rem;
    width: 30%;
    flex-direction: column;
  }
  ${BreakPoints.LARGE} {
    height: 25rem;
    width: 30%;
  }
  ${BreakPoints.XLARGE} {
    height: 27rem;
    width: 30%;
  }
  ${BreakPoints.XXLARGE} {
    height: 30rem;
    width: 30%;
  }
`;

const BlogHeader = styled.text`
  margin-left: 1rem;
  ${Type.BODY};
  color: ${Colors.BLACK};
`;

const BlogCardImageContainer = styled.div`
  ${BreakPoints.SMALL} {
    width: 100px;
  }
  ${BreakPoints.MEDIUM} {
    width: 100%;
  }
  ${BreakPoints.LARGE} {
    width: 100%;
  }
  ${BreakPoints.XLARGE} {
    width: 100%;
  }
  ${BreakPoints.XXLARGE} {
    width: 100%;
  }
`;

const BlogTextContainer = styled.div`
  padding: 1rem;
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
                title
                templateKey
                small_image {
                  childImageSharp {
                    fluid(maxHeight: 150) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
            <BlogCardImageContainer>
              <Img
                fluid={
                  blogpost.node.frontmatter.small_image.childImageSharp.fluid
                }
              />
            </BlogCardImageContainer>
            <BlogTextContainer>
              <BlogHeader>{blogpost.node.frontmatter.title}</BlogHeader>
            </BlogTextContainer>
          </BlogCardBackground>
        ))
    }
  />
);

export default BlogCard;
