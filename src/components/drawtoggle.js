import React from "react";
import styled from "styled-components";
import * as Spacing from "../style/spacing";
import HamburgerMenu from "react-hamburger-menu";

const ToogleButton = styled.button`
  height: ${Spacing.MEDIUM};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${Spacing.MEDIUM};
  background: transparent;
  cursor: pointer;
  position: absoulte;
  z-index: 9999;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
`;

const DrawerToggleButton = props => (
  <ToogleButton onClick={props.click}>
    <HamburgerMenu
      isOpen={props.open}
      width={25}
      height={18}
      strokeWidth={2}
      rotate={0}
      color={props.open ? "White" : "Black"}
      borderRadius={0}
      animationDuration={0.5}
    />
  </ToogleButton>
);

export default DrawerToggleButton;
