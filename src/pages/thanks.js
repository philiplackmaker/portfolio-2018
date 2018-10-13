import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Type from "../style/typography";
import * as Colors from "../style/colors";
import * as Base from "../style/base";
import * as Spacing from "../style/spacing";

const ThanksContainer = styled.div`
  grid-column: 2 / span 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${Colors.LIGHT_GREY};
  margin: auto;
  text-align: center;
  margin-top: ${Spacing.SMALL};
  padding: ${Spacing.MEDIUM};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  ${Base.GRID};
`;

const BackLink = styled(Link)`
  color: ${Colors.PRIMARY};
  ${Type.LARGEBODY};
`;

const ThanksCopy = styled.text`
  ${Type.BODY};
  text-align: center;
  padding: ${Spacing.MEDIUM};
`;

const Success = () => (
  <Container>
    <ThanksContainer>
      <h2>
        Thanks for giving me your details. I shall spam you and sell your
        details*
      </h2>
      <ThanksCopy>
        *Just kidding, I will probably drop you a nice email to say hello.
      </ThanksCopy>
      <BackLink to="/">Back to work</BackLink>
    </ThanksContainer>
  </Container>
);

export default Success;
