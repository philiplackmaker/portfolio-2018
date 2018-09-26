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

const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  ${Base.GRID};
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

const IndexPage = ({ data }) => (
  <Page>
    <Navigation />
    <Header>
      <HeaderContents>
        <Fade duration={3000}>
          <HeaderText>
            <LargeLinks
              data-tip="👋🏻 This is my new site, hope you enjoy it. Please say hello 👋🏻 "
              to="/about"
            >
              <UnderLine>Philip </UnderLine>
            </LargeLinks>
            is a
            <LargeLinks
              data-tip="10 years experiences. Product designer, graphic designer, motion designer & now spreadsheet designer. "
              to="/about"
            >
              <UnderLine> designer </UnderLine>
            </LargeLinks>
            <br />
            He is currently leading design at
            <LargeLinks
              data-tip="🤘🏻 Building software for Google, Cambridge Audio & Morzilla 🤘🏻 "
              to="/about"
            >
              <UnderLine> Potato </UnderLine>
            </LargeLinks>
            <br />
            Before that he built digtal products for
            <LargeLinks data-tip="Google, eBay, Commbank, Laterooms, Amercian Express, Morzilla Cambrdige Audio & many more">
              <UnderLine> brands</UnderLine>{" "}
            </LargeLinks>
            at
            <LargeLinks data-tip="❤️ ustwo, I was there for almost 5 years">
              <UnderLine> ustwo</UnderLine>{" "}
            </LargeLinks>
            and
            <LargeLinks data-tip="😶">
              <UnderLine> Method</UnderLine>{" "}
            </LargeLinks>
            <ReactTooltip effect="solid" />
          </HeaderText>
        </Fade>
      </HeaderContents>
    </Header>
    <Container>
      <ProjectCardComponent />
    </Container>
    <FooterEverything />
  </Page>
);

// export const pageQuery = graphql`
//   query pageQuery {
//     allMarkdownRemark(limit: 5) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             subtitle
//             note_title
//             templateKey
//             small_image {
//               childImageSharp {
//                 fluid(maxHeight: 1200) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;

// const DesignerRolesContainer = styled.div`
//   padding-left: 75%;
// `;

// const DesignRoles = styled.text`
//   z-index: 0;
//   position: absolute;
//   bottom-padding: ${Spacing.LARGE};
//   bottom: 500px;
//   ${Type.NOTES}
//   color: ${Colors.LIGHTEST_PRIMARY};
// `;

// const ThirdPerson = styled.text`
//   z-index: 0;
//   position: absolute;
//   padding-left: 30px;
//   left: 0;
//   ${Type.NOTES}
//   color: ${Colors.LIGHTEST_PRIMARY};
// `;
// const DrawnCircle = styled.span`
//   z-index: -1;
//   background-image: url(${Circle});
//   padding: 1rem;
//   height: 10rem;
//   background-repeat: no-repeat, repeat;
//   background-position: bottom;
// `;

// const CircleMail = styled.div`
//   ${Type.LARGEHEADER} width: 100px;
//   height: 100px;
//   background: ${Colors.WHITE};
//   -moz-border-radius: 50px;
//   -webkit-border-radius: 50px;
//   border-radius: 50px;
// `;
