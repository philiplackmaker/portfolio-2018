import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";

const Container = styled.div`
  ${Base.GRID};
`;

export default function Template({ data }) {
  const { markdownRemark: blogpost } = data;
  return (
    <div>
      <Navigation />
      <Container>
        <h1>{blogpost.frontmatter.title_test}</h1>
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
        title_test
        templateKey
      }
    }
  }
`;
