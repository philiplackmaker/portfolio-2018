import React from "react";
import styled from "styled-components";
import * as Type from "../style/typography";
import { Link, StaticQuery, graphql } from "gatsby";
import * as Colors from "../style/colors";
import Img from "gatsby-image";
import * as BreakPoints from "../style/breakpoints";
import * as Spacing from "../style/spacing";

const BlogCardBackground = styled(Link)`
  background-color: ${Colors.WHITE};
  display: flex;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  transition: transform 200ms ease-in-out;
  ${BreakPoints.SMALL} {
    margin-left: ${Spacing.MEDIUM};
    margin-right: ${Spacing.MEDIUM};
    flex-direction: row;
    margin-bottom: ${Spacing.MEDIUM};
    &:hover {
      transform: none;
    }
  }
  ${BreakPoints.MEDIUM} {
    height: 22rem;
    width: 40%;
    flex-direction: column;
    &:hover {
      transform: scale(1.1);
    }
  }
  ${BreakPoints.LARGE} {
    height: 25rem;
    width: 30%;
    &:hover {
      transform: scale(1.1);
    }
  }
  ${BreakPoints.XLARGE} {
    height: 27rem;
    width: 30%;
    &:hover {
      transform: scale(1.1);
    }
  }
  ${BreakPoints.XXLARGE} {
    height: 30rem;
    width: 30%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const BlogHeader = styled.text`
  margin-left: ${Spacing.SMALL};
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
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  ${BreakPoints.SMALL} {
    padding: ${Spacing.SMALL};
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    padding: ${Spacing.SMALL};
    height: 100%;
  }
`;

const BlogCardLink = styled(Link)`
  ${Type.SMALLBODY};
  :link,
  :visited,
  :active {
    color: ${Colors.PRIMARY};
    text-underline: none;
  }
  &:hover {
    color: ${Colors.BLACK};
    text-underline: none;
  }
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
                    fluid(
                      maxHeight: 1200
                      duotone: {
                        highlight: "#4644FD"
                        shadow: "#222172"
                        opacity: 25
                      }
                    ) {
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
              <BlogCardLink to={blogpost.node.frontmatter.path}>
                Read More
              </BlogCardLink>
            </BlogTextContainer>
          </BlogCardBackground>
        ))
    }
  />
);

export default BlogCard;
