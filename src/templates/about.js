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
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${CAlogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;

const EbayLogo = styled.span`
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${ELogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;

const MorzillaLogo = styled.span`
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${MLogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;

const CommBanklogo = styled.span`
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${CBLogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;

const Lateroomslogo = styled.span`
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${LRLogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;

const GoogleLogo = styled.span`
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Googlelogo});
  ${BreakPoints.SMALL} {
    width: 120px;
    height: 40px;
  }
  ${BreakPoints.MEDIUM} {
    width: 300px;
    height: 50px;
  }
  ${BreakPoints.LARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XLARGE} {
    width: 300px;
    height: 60px;
  }
  ${BreakPoints.XXLARGE} {
    width: 350px;
    height: 150px;
  }
`;
const HeaderText = styled.text`
  ${Type.LARGEHEADER};
`;

const AboutText = styled.text`
  ${Type.BODY};
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 6 / span 8;
    padding: 0px;
  }
`;

const HeaderTextContainer = styled.header`
  grid-column: 1 / span 12;
  text-align: center;
  padding-top: 2rem;
`;

const ImageContainer = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 1 / span 6;
    height: 100px;
    z-index: -1;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 4;
    display: inline;
  }
`;
const ContactHeader = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
  margin-top: 3rem;
`;

const BrandsContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
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

const AboutThisSite = styled.div`
  text-align: center;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    padding-top: 4rem;
    margin-bottom: 4rem;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    padding-top: 4rem;
    margin-bottom: 0;
  }
`;

const BrandLogos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  ${BreakPoints.SMALL} {
    height: 200px;
    margin-top: 2rem;
  }
  ${BreakPoints.MEDIUM} {
    height: 300px;
    margin-top: 3rem;
  }
  ${BreakPoints.LARGE} {
    height: 300px;
    margin-top: 3rem;
  }
  ${BreakPoints.XLARGE} {
    height: 200px;
  }
  ${BreakPoints.XXLARGE} {
    height: 400px;
  }
`;

const SubHeader = styled.text`
  ${Type.SMALLHEADER};
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
          <SubHeader>Brands I've worked with</SubHeader>
          <Fade duration={1000}>
            <BrandLogos>
              <CambridgeAudiologo /> <GoogleLogo /> <Lateroomslogo />{" "}
              <CommBanklogo /> <MorzillaLogo /> <EbayLogo />
            </BrandLogos>
          </Fade>
        </BrandsContainer>
        <ContactHeader>
          <SubHeader>Say hello</SubHeader>
        </ContactHeader>
        <ContactForm />
        <AboutThisSite>
          <AboutText>
            This site is built on{" "}
            <a href="https://www.gatsbyjs.org/" target="_blank">
              Gatsby.js{" "}
            </a>
            using react ⚛️ and styled components 💅. <br />
            Using the typeface 𝕬𝔹𝒞{" "}
            <a
              href="https://www.linotype.com/5472397/sailec-family.html"
              target="_blank"
            >
              Saliec
            </a>{" "}
            &{" "}
            <a
              href="https://www.grillitype.com/typeface/gt-super"
              target="_blank"
            >
              GT-Super.
            </a>
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
              duotone: { highlight: "#4644FD", shadow: "#222172", opacity: 65 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
