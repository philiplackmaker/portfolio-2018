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

const ProjectCard = styled(Link)`
  display: flex;
  flex: row;
  justify-content: space-between;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    height: 12rem;
    padding-bottom: 4rem;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    height: 27rem;
    padding-bottom: 5rem;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    padding-bottom: 10rem;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    padding-bottom: 15rem;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
    height: 25rem;
    padding-bottom: 15rem;
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
  ${BreakPoints.SMALL}{
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

  ${BreakPoints.MEDIUM}, ${BreakPoints.SMALL} {
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

  ${BreakPoints.MEDIUM}, ${BreakPoints.SMALL} {
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
        ))
    }
  />
);

export default ProjectCardComponent;
