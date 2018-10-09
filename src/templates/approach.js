import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import "../pages/fonts.css";
import * as Base from "../style/base";
import "../style/globals";
import { graphql } from "gatsby";
import FooterEverything from "../components/footereverything";

const Container = styled.div`
  ${Base.GRID};
`;

const Heaader = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
`;

const ApproachText = styled.div`
  grid-column: 1 / span 12;
`;

export default function Template({ data }) {
  const { markdownRemark: approach } = data;
  return (
    <div>
      <Navigation class="test" />
      <Container>
        <Heaader>
          <h1>{approach.frontmatter.title}</h1>
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
