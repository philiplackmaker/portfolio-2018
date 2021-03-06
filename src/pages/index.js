import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/navigation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Line from "../images/small_underline.svg";
import * as Type from "../style/typography";
import * as Colors from "../style/colors";
import * as Base from "../style/base";
import "./fonts.css";
import FooterEverything from "../components/footereverything.js";
import ReactTooltip from "react-tooltip";
import ProjectCardComponent from "../components/projectCard.js";
import BlogCard from "../components/blogcard.js";
import * as Spacing from "../style/spacing";
import Helmet from "react-helmet";
import * as BreakPoints from "../style/breakpoints";

const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  ${Base.GRID};
  ${BreakPoints.SMALL} {
    padding-top: ${Spacing.LARGE};
    padding-bottom: ${Spacing.SMALL};
  }
  ${BreakPoints.MEDIUM} {
    padding-top:${Spacing.LARGE};
  }
  }
  ${BreakPoints.LARGE} {t
    padding-top: ${Spacing.LARGE};
  }
  }
  ${BreakPoints.XLARGE} {
    padding-top: ${Spacing.LARGE};
  }
  ${BreakPoints.XXLARGE} {
    padding-top: ${Spacing.LARGE};
  }
  }
`;

const Header = styled.header`
  height: 75vh;
  background-color: ${Colors.PRIMARY};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const HeaderText = styled.text`
  ${Type.LARGEHEADER};
  z-index: 200;
  text-align: center;
  color: ${Colors.WHITE};
  display: block;

  ${BreakPoints.SMALL} {
    padding-left: ${Spacing.XSMALL};
    padding-right: ${Spacing.XSMALL};
  }
  ${BreakPoints.MEDIUM} {
    padding-left:  ${Spacing.MEDIUM}
    padding-right:  ${Spacing.MEDIUM};
  }
  ${BreakPoints.LARGE} {
    padding-left:  ${Spacing.MEDIUM};
    padding-right:  ${Spacing.MEDIUM};
  }
  ${BreakPoints.XLARGE} {
    padding-left:  ${Spacing.MEDIUM};
    padding-right:  ${Spacing.MEDIUM};
  }
  ${BreakPoints.XXLARGE} {
    padding-left:  ${Spacing.MEDIUM};
    padding-right:  ${Spacing.MEDIUM};
  }
`;

const HeaderContents = styled.div``;

const LargeLinks = styled.a`
  ${Type.LARGEHEADERLINKS};
  transition: all 0.4s ease-in;
  :link,
  :active,
  :visited {
    color: ${Colors.WHITE};
    text-underline: none;
  }
  &:hover {
    color: ${Colors.LIGHT_PRIMARY};
    text-underline: none;
  }
`;

const LargeInternalLinks = styled(Link)`
  ${Type.LARGEHEADERLINKS};
  transition: all 0.4s ease-in;
  :link,
  :active,
  :visited {
    color: ${Colors.WHITE};
    text-underline: none;
  }
  &:hover {
    color: ${Colors.LIGHT_PRIMARY};
    text-underline: none;
  }
`;
const UnderLine = styled.span`
  z-index: -1;
  background-image: url(${Line});
  background-repeat: no-repeat, repeat;
  background-position: bottom;
`;

const BlogCardGrid = styled.div`
  ${Base.GRID};
`;

const BlogCardContainer = styled.div`
  grid-column: 1 / span 12;
  justify-content: space-between;
  display: flex;
  paddin-bottom: 0rem;
  ${BreakPoints.SMALL} {
    flex-direction: column;
  }
  ${BreakPoints.MEDIUM} {
    flex-direction: row;
  }
  ${BreakPoints.LARGE} {
    flex-direction: row;
  }
  ${BreakPoints.XLARGE} {
    flex-direction: row;
  }
  ${BreakPoints.XXLARGE} {
    flex-direction: row;
  }
`;

const SubTitle = styled.text`
  ${Type.SMALLHEADER};
  width: 100%;
  grid-column: 1 / span 12;
  text-align: center;
  padding-bottom: ${Spacing.SMALL};
`;

const IndexPage = ({ data }) => (
  <Page>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Philip Lackmaker</title>
      <link rel="canonical" href="philiplackmaker.netlify.com" />
      <description>Portfolio</description>
    </Helmet>
    <Navigation />
    <Header>
      <HeaderContents>
        <Fade duration={3000}>
          <HeaderText>
            Hi, I'm
            <LargeInternalLinks
              data-tip="👋🏻 This is my new site, hope you enjoy it. Please say hello 👋🏻 "
              to="/about"
            >
              <UnderLine> Philip </UnderLine>
            </LargeInternalLinks>
            a
            <LargeInternalLinks
              data-tip="10 years experience. Product designer, graphic designer & motion designer "
              to="/about"
            >
              <UnderLine> designer. </UnderLine>
            </LargeInternalLinks>
            <br />
            I'm currently leading design at
            <LargeLinks
              data-tip="🤘🏻 Building software for Google, Cambridge Audio & Mozilla 🤘🏻 "
              href="https://p.ota.to/"
              target="_blank"
              rel="noopener"
            >
              <UnderLine> Potato. </UnderLine>
            </LargeLinks>
            <br />
            Before that I built digital products for
            <LargeInternalLinks
              data-tip="Google, eBay, Commbank, Laterooms, American Express, Mozilla, Cambridge Audio & many more"
              to="/about"
            >
              <UnderLine> brands</UnderLine>{" "}
            </LargeInternalLinks>
            at
            <LargeLinks
              data-tip="❤️ustwo❤️, I was there for almost 5 years"
              href="https://www.ustwo.com/"
              target="_blank"
              rel="noopener"
            >
              <UnderLine> ustwo</UnderLine>{" "}
            </LargeLinks>
            and
            <LargeLinks
              data-tip="Worked on Swiss newspapaer, Blick "
              href="https://www.method.com/"
              target="_blank"
              rel="noopener"
            >
              <UnderLine> Method.</UnderLine>{" "}
            </LargeLinks>
            <ReactTooltip effect="solid" />
          </HeaderText>
        </Fade>
      </HeaderContents>
    </Header>
    <Container>
      <ProjectCardComponent />
    </Container>
    <BlogCardGrid>
      <SubTitle>Latest blog post</SubTitle>
      <BlogCardContainer>
        <BlogCard />
      </BlogCardContainer>
    </BlogCardGrid>
    <FooterEverything />
  </Page>
);

export default IndexPage;
