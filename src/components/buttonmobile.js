import React from "react";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import Arrow from "../images/arrow.svg";
import BlueArrow from "../images/blue_arrow.svg";
import * as BreakPoints from "../style/breakpoints";
import * as Type from "../style/typography";

const ButtonMobile = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${Colors.WHITE};
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  :active {
    border: none;
  }
  ${BreakPoints.SMALL} {
    padding-top: 1rem;
    display: flex;
    border: none;
    width: 200px;
  }
  ${BreakPoints.MEDIUM} {
    display: none;
  }
`;

const ButtonText = styled.text`
  ${Type.SMALLBODY};
  text-align: left;
  padding: 0;
  margin: 0;
  color: ${Colors.PRIMARY};
`;

const ButtonArrow = styled.span`
  padding-top: 16px;
  margin-top: 4px;
  padding-left: 0px;
  width: 43px;
  height: 3px;
  background-repeat: no-repeat, repeat;
  background-position: center;
  ${BreakPoints.SMALL} {
    background-image: url(${BlueArrow});
  }
  ${BreakPoints.MEDIUM} {
    display: none;
  }
`;

export default () => (
  <ButtonMobile>
    <ButtonText>What happened?</ButtonText>
    <ButtonArrow />
  </ButtonMobile>
);
