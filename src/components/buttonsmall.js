import React from "react";
import styled from "styled-components";
import * as Colors from "../style/colors";
import "../style/globals";
import Arrow from "../images/arrow.svg";
import * as Type from "../style/typography";

const ButtonSmall = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  transition: transform 200ms ease-in-out;
  :visited,
  :active {
    border: none;
  }
    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: none;
      border: none;
    }
    width: 200px;
    height: 50px;
    padding: 0px;
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
  background-image: url(${Arrow});
  padding-top: 0px;
  padding-left: 0px;
  width: 56px;
  height: 18px;
`;

export default () => (
  <ButtonSmall>
    <ButtonText>Read more</ButtonText>
    <ButtonArrow />
  </ButtonSmall>
);
