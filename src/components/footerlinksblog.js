import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import * as Type from "../style/typography";
import { StaticQuery, graphql } from "gatsby";

const FooterLinksTextBlog = styled(Link)`
  text-decoration: none;
  ${Type.SMALLBODY};
  transition: all 0.4s ease-in;
  color: ${Colors.BLACK};
  :visited,
  :active {
    color: ${Colors.BLACK};
    text-underline: none;
  }
  &:hover {
    color: ${Colors.PRIMARY};
    text-underline: none;
  }
`;

const FooterListItemsBlog = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const FooterLinksBlog = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 6) {
          edges {
            node {
              frontmatter {
                title
                path
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
          footerlinksblog =>
            footerlinksblog.node.frontmatter.templateKey === "blogpost"
        )
        .map(footerlinksblog => (
          <FooterListItemsBlog>
            <FooterLinksTextBlog to={footerlinksblog.node.frontmatter.path}>
              {footerlinksblog.node.frontmatter.title}
            </FooterLinksTextBlog>
          </FooterListItemsBlog>
        ))
    }
  />
);

export default FooterLinksBlog;
