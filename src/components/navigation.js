import React from "react";
import DrawerToggleButton from "../components/drawtoggle";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import Headroom from "react-headroom";
import * as BreakPoints from "../style/breakpoints";
import * as Type from "../style/typography";
import * as Spacing from "../style/spacing";
import SideDraw from "../components/sideDraw";

const Logo = styled.div`
  border-radius: 50%;
  width: 50px;
  margin-right: 1rem;
  height: 50px;
  background-color: ${Colors.PRIMARY};
  ${BreakPoints.SMALL} {
    width: 40px;
    margin-right: 1rem;
    height: 40px;
    left: 0;
  }
  ${BreakPoints.MEDIUM} {
    width: 50px;
    margin-right: 1rem;
    height: 50px;
  }
`;

const NavigationContainer = styled.div`
  width: 100%;
  // margin: 0 auto;
  display: flex;
  z-index: -1;
  border-bottom: 4px solid ${Colors.LIGHT_GREY};
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.WHITE};
  ${BreakPoints.SMALL} {
    height: ${Spacing.LARGE};
  }
  ${BreakPoints.MEDIUM} {
    height: ${Spacing.XLARGE};
  }
  ${BreakPoints.LARGE} {
    height: ${Spacing.XLARGE};
  }
  ${BreakPoints.XLARGE} {
    height: ${Spacing.XLARGE};
  }
  ${BreakPoints.XXLARGE} {
    height: ${Spacing.XLARGE};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItems = styled.li`
  display: block;
  float: left;
  text-decoration: none;
  ${BreakPoints.SMALL} {
    ${Type.BODY};
    padding: 1rem 1rem;
    display: none;
  }
  ${BreakPoints.MEDIUM} {
    ${Type.BODY};
    padding: 1rem 1rem;
    display: fixed;
  }
  ${BreakPoints.LARGE} {
    ${Type.BODY};
    padding: 1rem 1rem;
  }
  ${BreakPoints.XLARGE} {
    ${Type.BODY};
    padding: 1rem 1rem;
  }
  ${BreakPoints.XXLARGE} {
  }
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  transition: all 0.4s ease-in;
  color: black;
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

const DrawerToggleButtonContanier = styled.div`
  z-index: 9999;
  position: relative;
  ${BreakPoints.SMALL} {
    padding: 1rem;
  }
  ${BreakPoints.MEDIUM} {
    display: none;
  }
`;

class Navigation extends React.Component {
  state = {
    sideDrawOpen: false
  };

  drawerToggleButtonClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawOpen: !prevState.sideDrawOpen };
    });
  };

  closeToggleClickHandler = () => {
    this.setState({ sideDrawOpen: false });
  };

  div;
  render() {
    let sideDraw;

    if (this.state.sideDrawOpen) {
      sideDraw = <SideDraw />;
    }

    return (
      <Headroom
        style={{
          webkitTransition: "all .5s ease-in-out",
          mozTransition: "all .5s ease-in-out",
          oTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out"
        }}
      >
        {sideDraw}
        {/* <Slide top> */}
        <NavigationContainer>
          <List>
            <ListItems>
              <NavigationLink to="/">Work</NavigationLink>
            </ListItems>
            <ListItems>
              <NavigationLink to="/about">About</NavigationLink>
            </ListItems>
            <ListItems>
              <NavigationLink to="/approach">Approach</NavigationLink>
            </ListItems>
          </List>
          <Logo />
          <DrawerToggleButtonContanier>
            <DrawerToggleButton
              click={this.drawerToggleButtonClickHandler}
              open={this.state.sideDrawOpen}
            />
          </DrawerToggleButtonContanier>
        </NavigationContainer>
        {/* </Slide> */}
      </Headroom>
    );
  }
}

export default Navigation;
