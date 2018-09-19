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
import { graphql } from "gatsby";

const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  ${Base.GRID};
`;

const DesignerRolesContainer = styled.div`
  padding-left: 75%;
  padding-bottom: 2rem;
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
  height: 100vh;
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

const IndexPage = () => (
  <Page>
    <Navigation />
    <Header>
      <HeaderContents>
        <Fade duration={3000}>
          <DesignerRolesContainer>
            <ThirdPerson>
              *I don't usually talk about myself in third person.
            </ThirdPerson>
            <DesignRoles>
              Product designer,
              <br /> Visual designer,
              <br /> user exerperience designer <br />& Graphic Designer.{" "}
            </DesignRoles>
          </DesignerRolesContainer>
          <HeaderText>
            <UnderLine>Philip*</UnderLine> is a
            <DrawnCircle>designer</DrawnCircle>
            <br />
            Helping to build software for <UnderLine>brands.</UnderLine>
            <br /> Philip is leading design at Potato. Previously ustwo &
            Method. <br /> In London, Bristol & Sydney. <br /> Say hello.{" "}
          </HeaderText>
        </Fade>
      </HeaderContents>
    </Header>
    <Container />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Page>
);

export const pageQuery = graphql`
  query IndexQuery {
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
