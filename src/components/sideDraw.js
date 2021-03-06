import React from "react";
import styled from "styled-components";
import * as Colors from "../style/colors";
import { Link } from "gatsby";
import * as BreakPoints from "../style/breakpoints";
import * as Type from "../style/typography";
import Fade from "react-reveal/Fade";
import * as Spacing from "../style/spacing";

const OverlayNavigationLink = styled(Link)`
  text-decoration: none;
  transition: all 0.4s ease-in;
  ${Type.LARGEHEADER};
  :link,
  :visited,
  :active {
    color: ${Colors.WHITE};
    text-underline: none;
  }
`;

const OverlayContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
  top: 0;
  left: 0;
  position: fixed;
  align-items: center;
  background-color: ${Colors.BLACK};
  z-index: 100;
  ${BreakPoints.SMALL} {
    display: flex;
  }
  ${BreakPoints.MEDIUM} {
    display: none;
  }
`;

const OverlayList = styled.ul`
  overlaylist-style-type: none;
  padding: 0;
  margin: 0;
`;

const OverlayListItems = styled.li`
  text-decoration: none;
  ${BreakPoints.SMALL} {
    padding: 1rem 1rem;
  }
`;

const SideDraw = props => (
  <OverlayContainer>
    <Fade left duration={900}>
      <OverlayList>
        <OverlayListItems>
          <OverlayNavigationLink to="/">Work</OverlayNavigationLink>
        </OverlayListItems>
        <OverlayListItems>
          <OverlayNavigationLink to="/about">About</OverlayNavigationLink>
        </OverlayListItems>
        <OverlayListItems>
          <OverlayNavigationLink to="/approach">Approach</OverlayNavigationLink>
        </OverlayListItems>
      </OverlayList>
    </Fade>
  </OverlayContainer>
);

export default SideDraw;
