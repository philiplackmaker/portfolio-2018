import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";
import Img from "gatsby-image";
import ContactForm from "../components/contactform";
import * as Type from "../style/typography";
import Fade from "react-reveal/Fade";

const Container = styled.div`
  ${Base.GRID};
`;

const HeaderText = styled.text`
  ${Type.LARGEHEADER};
`;

const AboutText = styled.text`
  ${Type.BODY};
  grid-column: 6 / span 8;
`;

const HeaderTextContainer = styled.header`
  grid-column: 1 / span 12;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const ImageContainer = styled.div`
  grid-column: 1 / span 4;
`;
const ContactHeader = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
`;

export default function Template({ data }) {
  const { markdownRemark: about } = data;
  return (
    <div>
      <Navigation class="test" />
      <Container>
        <HeaderTextContainer>
          <HeaderText>{about.frontmatter.title}</HeaderText>
        </HeaderTextContainer>
        <ImageContainer>
          <Fade duration={2000}>
            <Img fluid={about.frontmatter.cover_image.childImageSharp.fluid} />
          </Fade>
        </ImageContainer>
        <AboutText dangerouslySetInnerHTML={{ __html: about.html }} />{" "}
        <ContactHeader>
          <h3>Say hello</h3>
        </ContactHeader>
        <ContactForm />
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
        title
        templateKey
        cover_image {
          childImageSharp {
            fluid(
              maxHeight: 1200
              duotone: { highlight: "#4644FD", shadow: "#222172", opacity: 55 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
