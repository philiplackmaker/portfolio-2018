import React from "react";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import Arrow from "../images/arrow.svg";
import BlueArrow from "../images/blue_arrow.svg";
import * as BreakPoints from "../style/breakpoints";
import * as Type from "../style/typography";

const ButtonSmall = styled.button`
  border: none;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  :visited,
  :active {
    border: none;
  }
  ${BreakPoints.SMALL} {
    display: none;
    width: 0;
    height: 0;
    border: none;
    margin-top: 0;
    padding: 0;
  }
  ${BreakPoints.MEDIUM} {
    display: flex;
    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: scale(1.1);
      border: none;
    }
    width: 200px;
    height: 64px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
  ${BreakPoints.LARGE} {
    display: flex;

    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: scale(1.1);
      border: none;
    }
    width: 220px;
    height: 74px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
  ${BreakPoints.XLARGE} {
    display: flex;

    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: scale(1.1);
      border: none;
    }
    width: 220px;
    height: 74px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
  ${BreakPoints.XXLARGE} {
    display: flex;

    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: scale(1.1);
      border: none;
    }
    width: 220px;
    height: 74px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
`;

const ButtonText = styled.text`
  ${Type.SMALLBODY};
  text-align: left;
  padding: 0;
  margin: 0;

  ${BreakPoints.MEDIUM} {
    color: ${Colors.WHITE};
  }
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
    background-image: url(${Arrow});
    padding-top: 5px;
    padding-left: 6px;
    width: 56px;
    height: 24px;
  }
  ${BreakPoints.LARGE} {
    background-image: url(${Arrow});
    padding-top: 5px;
    padding-left: 6px;
    width: 56px;
    height: 24px;
  }
  ${BreakPoints.XLARGE} {
    background-image: url(${Arrow});
    padding-top: 5px;
    padding-left: 6px;
    width: 56px;
    height: 24px;
  }
  ${BreakPoints.XXLARGE} {
    background-image: url(${Arrow});
    padding-top: 5px;
    padding-left: 6px;
    width: 56px;
    height: 24px;
  }
`;

export default () => (
  <ButtonSmall>
    <ButtonText>Read more</ButtonText>
    <ButtonArrow />
  </ButtonSmall>
);
