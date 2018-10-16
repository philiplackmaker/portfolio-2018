import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import * as Type from "../style/typography";
import { StaticQuery, graphql } from "gatsby";
import * as BreakPoints from "../style/breakpoints";
import * as Spacing from "../style/spacing";
import Img from "gatsby-image";
import ButtonSmall from "../components/buttonsmall.js";
import ButtonMobile from "../components/buttonmobile.js";

const ProjectCard = styled(Link)`
  display: flex;
  justify-content: space-between;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    height: 35rem;
    flex-direction: column;
    margin-bottom: ${Spacing.LARGE};
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    height: 27rem;
    flex-direction: row;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    flex-direction: row;
    padding-bottom: ${Spacing.XXLARGE};
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    flex-direction: row;
    padding-bottom: ${Spacing.XXXXLARGE};
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    flex-direction: row;
    padding-bottom: ${Spacing.XXXXLARGE};
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: order: 2;
`;

const ProjectHeader = styled.text`
  ${Type.SUBHEADER};
  text-align: left;
  dispaly: block;
  color: ${Colors.BLACK};
  ${BreakPoints.SMALL} {
    padding-top: ${Spacing.XSMALL};
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

const ProjectSubtitle = styled.text`
  ${Type.LARGEBODY}
  color: ${Colors.BLACK};
  ${BreakPoints.SMALL}{
    padding-top: .25rem;
    padding-bottom: .5rem;
  }
 
   ${BreakPoints.MEDIUM} {
    padding-top:  ${Spacing.XSMALL};
    padding-bottom:  ${Spacing.XSMALL};  
    }
    ${BreakPoints.LARGE}{ 
      padding-top:  ${Spacing.XSMALL};
      padding-bottom:  ${Spacing.SMALL};
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

const ProjectNotes = styled.text`
  ${Type.NOTES}
  color: ${Colors.BLACK};
  padding-bottom:  ${Spacing.XSMALL};
`;

const ProjectTeaserImage = styled.div`
  padding-top: 0;
  place-content: top;
  flex: 3 auto;
  ${BreakPoints.SMALL} {
    width: 270px;
  }
  ${BreakPoints.MEDIUM} {
    width: 250px;
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

const ProjectCardComponent = () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        allMarkdownRemark {
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
    `}
    render={data =>
      data.allMarkdownRemark.edges
        .filter(project => project.node.frontmatter.templateKey === "project")
        .map(project => (
          <ProjectCard to={project.node.frontmatter.path}>
            <ProjectInfo>
              <ProjectNotes>{project.node.frontmatter.note_title}</ProjectNotes>
              <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
              <ProjectSubtitle>
                {project.node.frontmatter.subtitle}
              </ProjectSubtitle>
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
            <ButtonMobile />
          </ProjectCard>
        ))
    }
  />
);

export default ProjectCardComponent;
