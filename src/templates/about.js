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
import * as BreakPoints from "../style/breakpoints";
import CAlogo from "../images/cambridge-audio.svg";
import Googlelogo from "../images/google-logo.svg";
import LRLogo from "../images/laterooms-logo.svg";
import CBLogo from "../images/commonwealth-logo.svg";
import MLogo from "../images/mozilla_logo.svg";
import ELogo from "../images/ebay_logo.svg";

const Container = styled.div`
  ${Base.GRID};
`;
const CambridgeAudiologo = styled.span`
  width: 300px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${CAlogo});
`;

const EbayLogo = styled.span`
  width: 300px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${ELogo});
`;

const MorzillaLogo = styled.span`
  width: 300px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${MLogo});
`;

const CommBanklogo = styled.span`
  width: 300px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${CBLogo});
`;

const Lateroomslogo = styled.span`
  width: 300px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${LRLogo});
`;

const GoogleLogo = styled.span`
  width: 250px;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Googlelogo});
`;
const HeaderText = styled.text`
  ${Type.LARGEHEADER};
`;

const AboutText = styled.text`
  ${Type.BODY};
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 6 / span 8;
  }
`;

const HeaderTextContainer = styled.header`
  grid-column: 1 / span 12;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ImageContainer = styled.div`
  ${BreakPoints.SMALL} {
    display: none;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 4;
    display: inline;
  }
`;
const ContactHeader = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
`;

const BrandsContainer = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
`;

const AboutThisSite = styled.div`
  padding-top: 4rem;
  grid-column: 1 / span 12;
  text-align: center;
`;

const BrandLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 160px;
  padding-bottom: 10rem;
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
        <BrandsContainer>
          <h3>Brands I've worked with</h3>
          <Fade duration={1000}>
            <BrandLogos>
              <CambridgeAudiologo /> <GoogleLogo /> <Lateroomslogo />{" "}
              <CommBanklogo /> <MorzillaLogo /> <EbayLogo />
            </BrandLogos>
          </Fade>
        </BrandsContainer>
        <ContactHeader>
          <h3>Say hello</h3>
        </ContactHeader>
        <ContactForm />
        <AboutThisSite>
          <AboutText>
            This site is built on{" "}
            <a href="https://www.gatsbyjs.org/" target="_blank">
              Gatsby.js{" "}
            </a>
            using react ⚛️ and styled components 💅. <br />
            Using the typeface 𝕬𝔹𝒞 Saliec and GT-Super.
          </AboutText>
        </AboutThisSite>
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
