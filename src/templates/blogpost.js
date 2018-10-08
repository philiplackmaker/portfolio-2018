import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";
import Helmet from "react-helmet";
import * as Type from "../style/typography";

const Container = styled.div`
  ${Base.GRID};
`;

const BlogText = styled.div`
  grid-column: 1 / span 12;
`;

const BlogHeader = styled.text`
  padding-top: 2rem;
  ${Type.LARGEHEADER};
  text-align: center;
  grid-column: 1 / span 12;
`;
export default function Template({ data }) {
  const { markdownRemark: blogpost } = data;
  return (
    <div>
      <Helmet>
        <title>{blogpost.frontmatter.title}</title>
      </Helmet>{" "}
      <Navigation />
      <Container>
        <BlogHeader>{blogpost.frontmatter.title}</BlogHeader>
        <BlogText dangerouslySetInnerHTML={{ __html: blogpost.html }} />{" "}
      </Container>
      <FooterEverything />
    </div>
  );
}

export const blogQuery = graphql`
  query BlogByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
        templateKey
      }
    }
  }
`;
