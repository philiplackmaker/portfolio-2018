import React from "react";
import FooterLinks from "../components/footerlinks";
import FooterLinksBlog from "../components/footerlinksblog";
import styled from "styled-components";
import * as Base from "../style/base";
import * as Type from "../style/typography";
import { Link } from "gatsby";
import * as Colors from "../style/colors";
import * as BreakPoints from "../style/breakpoints";
import Twitter from "../images/TwitterLogo.svg";
import Linked from "../images/LinkedinLogo.svg";
import Github from "../images/GithubLogo.svg";
import Email from "../images/EmailLogo.svg";
import ReactTooltip from "react-tooltip";

const EmailIcon = styled.span`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Email});
`;

const GithubIcon = styled.span`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Github});
`;

const LinkedIcon = styled.span`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Linked});
`;

const TwitterIcon = styled.span`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-image: url(${Twitter});
`;

const FooterBackground = styled.div`
  width: 100%;
  background-color: ${Colors.LIGHT_GREY};

  ${BreakPoints.SMALL} {
    margin-top: rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  ${BreakPoints.MEDIUM} {
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  ${BreakPoints.LARGE} {
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  ${BreakPoints.XLARGE} {
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  ${BreakPoints.XXLARGE} {
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const FooterEverythingBox = styled.div`
  ${Base.GRID};
`;

const FooterProject = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 2;
  }
`;

const FooterBlog = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.LARGE} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 4 / span 3;
  }
`;

const FooterSite = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.LARGE} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 8 / span 2;
  }
`;

const FooterContact = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 10 / span 3;
  }
  ${BreakPoints.LARGE} {
    grid-column: 10 / span 3;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 10 / span 3;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 10 / span 3;
  }
`;
const SocialCircle = styled.a`
  display: flex;
  justify-content: space-between;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: all 0.4s ease-in;
  margin-bottom: 10px;
  :link,
  :visited,
  :active {
    background: ${Colors.MEDIUM_GREY};
  }
  &:hover {
    background: ${Colors.PRIMARY};
  }
`;
const FooterTitles = styled.div`
  ${Type.TINYHEADER};
  margin-bottom: 1rem;
  ${BreakPoints.SMALL} {
    margin-top: 2rem;
  }
  ${BreakPoints.MEDIUM} {
    margin-top: 0;
  }
`;

const FooterLinksText = styled(Link)`
  text-decoration: none;
  ${Type.SMALLBODY};
  transition: all 0.2s ease-in;
  :link,
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

const FooterItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${BreakPoints.SMALL} {
    flex-direction: row;
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

const Copyright = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
  }
`;

const CopyrightText = styled.text`
  ${Type.SMALLBODY};
`;

const FooterEverything = () => (
  <FooterBackground>
    <TwitterIcon />
    <FooterEverythingBox>
      <FooterProject>
        <FooterTitles>Work</FooterTitles>
        <FooterLinks />
      </FooterProject>
      <FooterBlog>
        <FooterTitles>Latest Blog</FooterTitles>
        <FooterLinksBlog />
      </FooterBlog>
      <FooterSite>
        <FooterTitles>Site</FooterTitles>
        <FooterItems>
          <FooterLinksText to="/">Work</FooterLinksText>
        </FooterItems>
        <FooterItems>
          <FooterLinksText to="/about">About</FooterLinksText>
        </FooterItems>
        <FooterItems>
          <FooterLinksText to="/approach">Approach</FooterLinksText>
        </FooterItems>
        {/* <FooterItems>
          <FooterLinksText to="/blog">Blog</FooterLinksText>
        </FooterItems> */}
      </FooterSite>
      <FooterContact>
        <FooterTitles>Say Hello</FooterTitles>
        <FooterSocialIcons>
          <SocialCircle
            data-tip="My tweets are usually rubbish"
            href="https://twitter.com/phillackmaker"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </SocialCircle>
          <SocialCircle
            data-tip="I am trying to get 10000 connections add me"
            href="https://www.linkedin.com/in/philiplackmaker"
            target="_blank"
            rel="noopener"
          >
            <LinkedIcon />
          </SocialCircle>
          <SocialCircle
            data-tip="I am now a developer"
            href="https://github.com/philiplackmaker"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon />
          </SocialCircle>
          <SocialCircle
            data-tip="My email is philip.lackmaker1@gmail.com"
            href="mailto:philip.lackmaker1@gmail.com"
            target="_top"
            rel="noopener"
          >
            <EmailIcon />
          </SocialCircle>
        </FooterSocialIcons>
      </FooterContact>
      <Copyright>
        <CopyrightText> © 2018 Philip Lackmaker 🔵 </CopyrightText>
      </Copyright>
    </FooterEverythingBox>
  </FooterBackground>
);

export default FooterEverything;
