import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";
import * as BreakPoints from "../style/breakpoints";
import * as Type from "../style/typography";
import * as Spacing from "../style/spacing";

const Container = styled.div`
  ${Base.GRID};
`;

const Heaader = styled.div`
  text-align: center;
  padding-top: ${Spacing.MEDIUM};

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
`;

const ApproachText = styled.div`
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

const HeaderText = styled.text`
  ${Type.SUBHEADER};
  padding-bottom: ${Spacing.XSMALL};
`;

export default function Template({ data }) {
  const { markdownRemark: approach } = data;
  return (
    <div>
      <Navigation class="test" />
      <Container>
        <Heaader>
          <HeaderText>{approach.frontmatter.title}</HeaderText>
        </Heaader>
        <ApproachText dangerouslySetInnerHTML={{ __html: approach.html }} />{" "}
      </Container>
      <FooterEverything />
    </div>
  );
}

export const thinkingQuery = graphql`
  query thinkingByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
        templateKey
      }
    }
  }
`;
