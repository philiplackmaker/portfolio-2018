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
  background-color: ${Colors.PRIMARY};

  :visited,
  :active {
    border: none;
  }
  ${BreakPoints.SMALL} {
    display: flex;
    width: 0;
    height: 0;
    border: none;
    width: 200px;
    height: 64px;
    border: none;
    margin-top: 20px;
    padding: 16px;
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
  color: ${Colors.WHITE};
`;

const ButtonArrow = styled.span`
  padding-top: 5px;
  padding-left: 6px;
  width: 56px;
  height: 24px;
  background-repeat: no-repeat, repeat;
  background-position: center;
  ${BreakPoints.SMALL} {
    background-image: url(${Arrow});
    padding-top: 0px;
    padding-left: 0px;
    width: 56px;
    height: 18px;
  }
  ${BreakPoints.MEDIUM} {
    display: none;
  }
`;

export default () => (
  <ButtonMobile>
    <ButtonText>Read more</ButtonText>
    <ButtonArrow />
  </ButtonMobile>
);
