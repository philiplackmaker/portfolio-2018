import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/navigation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Line from "../images/small_underline.svg";
import Circle from "../images/circle.svg";
import * as Type from "../style/typography";
import * as Colors from "../style/colors";
import * as Spacing from "../style/spacing";
import * as Base from "../style/base";
import * as BreakPoints from "../style/breakpoints";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import "./fonts.css";
import FooterEverything from "../components/footereverything.js";
import ButtonSmall from "../components/buttonsmall.js";
import ReactTooltip from "react-tooltip";

const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const CircleMail = styled.div`
  ${Type.LARGEHEADER} width: 100px;
  height: 100px;
  background: ${Colors.WHITE};
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
`;
const Container = styled.div`
  ${Base.GRID};
`;

const DesignerRolesContainer = styled.div`
  padding-left: 75%;
`;

const DesignRoles = styled.text`
  z-index: 0;
  position: absolute;
  bottom-padding: ${Spacing.LARGE};
  bottom: 500px;
  ${Type.NOTES}
  color: ${Colors.LIGHTEST_PRIMARY};
`;

const ThirdPerson = styled.text`
  z-index: 0;
  position: absolute;
  padding-left: 30px;
  left: 0;
  ${Type.NOTES}
  color: ${Colors.LIGHTEST_PRIMARY};
`;

const Header = styled.div`
  height: 70vh;
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
  padding-left: 3rem;
  padding-right: 3rem;
`;

const HeaderContents = styled.div``;

const LargeLinks = styled(Link)`
  ${Type.LARGEHEADERLINKS};
  transition: all 0.4s ease-in;
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

const DrawnCircle = styled.span`
  z-index: -1;
  background-image: url(${Circle});
  padding: 1rem;
  height: 10rem;
  background-repeat: no-repeat, repeat;
  background-position: bottom;
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex: row;
  justify-content: space-between;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    height: 15rem;
    margin-top: 5rem;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    height: 25rem;
    margin-top: 15rem;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    margin-top: 6rem;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    margin-bottom: 5rem;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    margin-bottom: 5rem;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  text-align: left;
  dispaly: block;
  color: ${Colors.BLACK};
  ${BreakPoints.SMALL} {
    padding-top: ${Spacing.SMALL};
  }
  ${BreakPoints.MEDIUM} {
    padding-top: ${Spacing.SMALL};
  }
  ${BreakPoints.LARGE} {
    padding-top: ${Spacing.SMALL};
  }
  ${BreakPoints.XLARGE} {
    padding-top: ${Spacing.SMALL};
  }
  ${BreakPoints.XXLARGE} {
    padding-top: ${Spacing.SMALL};
  }
`;

const ProjectSubtitle = styled(Link)`
  ${Type.LARGEBODY}
  color: ${Colors.BLACK};
    ${BreakPoints.SMALL} {
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.MEDIUM} {  
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.LARGE}{ 
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.XLARGE} { 
      padding-top: 1.25rem;
      padding-bottom: 3rem;    
    }
    ${BreakPoints.XXLARGE} { 
      padding-top: 1.5rem;
      padding-bottom: 4rem;    
    }
`;

const ProjectNotes = styled(Link)`
  ${Type.NOTES}
  color: ${Colors.PRIMARY};
  ${BreakPoints.SMALL} {
    padding-bottom: 1.25rem;
  }
  ${BreakPoints.MEDIUM} {
    padding-bottom: 1.25rem;
  }
  ${BreakPoints.LARGE} {
    padding-bottom: 1.25rem;
  }
  ${BreakPoints.XLARGE} {
    padding-bottom: 1.25rem;
  }
  ${BreakPoints.XXLARGE} {
    padding-bottom: 1.25rem;
  }
`;

const ProjectTeaserImage = styled.div`
  align-items: end;
  padding-top: 0;
  ${BreakPoints.SMALL} {
    width: 100px;
    display: none;
  }
  ${BreakPoints.MEDIUM} {
    width: 250px;
    display: block;
  }
  ${BreakPoints.LARGE} {
    width: 260px;
  }
  ${BreakPoints.XLARGE} {
    width: 400px;
  }
  ${BreakPoints.XXLARGE} {
    width: 500px;
  }
`;

const ImageContainer = styled.div`
  grid-column: 8 / span 4;
`;
const IndexPage = ({ data }) => (
  <Page>
    <Navigation />
    <Header>
      <HeaderContents>
        <Fade duration={3000}>
          <HeaderText>
            <LargeLinks
              data-tip="I don't usually talk about myself in the third person."
              to="/about"
            >
              <UnderLine>Philip </UnderLine>
            </LargeLinks>
            <ReactTooltip effect="solid" />
            is a
            <LargeLinks
              data-tip="product designer, visual designer, graphic designer, motion desigenr"
              to="/about"
            >
              <UnderLine> designer </UnderLine>
            </LargeLinks>
            <br />
            He is currently leading design at
            <UnderLine>
              <LargeLinks> Potato.</LargeLinks>
            </UnderLine>
            <br />
            Before that he built digtal products for
            <LargeLinks data-tip="Google, eBay, Commbank, Laterooms, Amercian Express, Morzilla & Cambrdige Audio">
              <UnderLine> brands</UnderLine>{" "}
            </LargeLinks>
            at
            <UnderLine>
              <LargeLinks> ustwo </LargeLinks>
            </UnderLine>
            and
            <UnderLine>
              <LargeLinks> Method.</LargeLinks>{" "}
            </UnderLine>
          </HeaderText>
        </Fade>
      </HeaderContents>
    </Header>
    <Container>
      {data.allMarkdownRemark.edges
        .filter(project => project.node.frontmatter.templateKey === "project")
        .map(project => (
          <ProjectCard to={project.node.frontmatter.path}>
            <ProjectInfo>
              <ProjectNotes>{project.node.frontmatter.note_title}</ProjectNotes>
              <div />
              <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
              <div />
              <ProjectSubtitle>
                {project.node.frontmatter.subtitle}
              </ProjectSubtitle>
              <div />
              <ButtonSmall to={project.node.frontmatter.path} />
            </ProjectInfo>
            <ImageContainer>
              <ProjectTeaserImage>
                <Img
                  fluid={
                    project.node.frontmatter.small_image.childImageSharp.fluid
                  }
                />
              </ProjectTeaserImage>
            </ImageContainer>
          </ProjectCard>
        ))}
    </Container>
    <FooterEverything />
  </Page>
);

export const pageQuery = graphql`
  query pageQuery {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          frontmatter {
            title
            path
            subtitle
            note_title
            templateKey
            small_image {
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
