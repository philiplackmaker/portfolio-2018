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
import * as BreakPoints from "../style/breakpoints";
import Img from "gatsby-image";
import * as Spacing from "../style/spacing";
import Fade from "react-reveal/Fade";
import * as Colors from "../style/colors";

const Container = styled.div`
  ${Base.GRID};
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    height: ${Spacing.XXLARGE};
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    padding-top: ${Spacing.XSMALL};
    height: ${Spacing.XXXLARGE};
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
    padding-top: ${Spacing.SMALL};
    height: ${Spacing.XXLARGE};
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
    padding-top: ${Spacing.SMALL};
    height: ${Spacing.XXLARGE};
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
    padding-top: ${Spacing.SMALL};
    height: ${Spacing.XXLARGE};
  }
`;

const BlogPostContent = styled.div`
  margin-top: ${Spacing.LARGE};
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
  }
`;
const Content = styled.div`
  grid-column: 1 / span 12;
`;
const HeroImage = styled.div``;

const BlogHeaderText = styled.text`
  ${Type.SUBHEADER};
  padding-bottom: ${Spacing.XSMALL};
`;

const BlogHeaderLabel = styled.text`
  ${Type.SMALLHEADER};
  line-height: 0px;
  color: ${Colors.MEDIUM_GREY};
  padding-bottom: ${Spacing.SMALL};
  ${BreakPoints.SMALL} {
    margin-bottom: ${Spacing.XSMALL};
  }
  ${BreakPoints.MEDIUM} {
    margin-bottom: ${Spacing.XSMALL};
  }
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
        <BlogHeader>
          <BlogHeaderLabel>Blog</BlogHeaderLabel>
          <BlogHeaderText>{blogpost.frontmatter.title}</BlogHeaderText>
        </BlogHeader>
      </Container>
      <HeroImage>
        <Fade duration={2000}>
          <Img fluid={blogpost.frontmatter.cover_image.childImageSharp.fluid} />
        </Fade>
      </HeroImage>
      <Container>
        <BlogPostContent>
          <Content dangerouslySetInnerHTML={{ __html: blogpost.html }} />
        </BlogPostContent>
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
        cover_image {
          childImageSharp {
            fluid(
              maxHeight: 2000
              duotone: { highlight: "#4644FD", shadow: "#222172", opacity: 25 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
