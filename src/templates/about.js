import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";
import Img from "gatsby-image";

const Container = styled.div`
  ${Base.GRID};
`;

export default function Template({ data }) {
  const { markdownRemark: about } = data;
  return (
    <div>
      <Navigation class="test" />
      <Container>
        <h6>{about.frontmatter.title_test}</h6>
        <Img fluid={about.frontmatter.cover_image.childImageSharp.fluid} />
      </Container>
      <FooterEverything />
    </div>
  );
}

export const aboutQuery = graphql`
  query AboutByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title_test
        templateKey
        cover_image {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
