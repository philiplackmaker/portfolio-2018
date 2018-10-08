import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Type from "../style/typography";
import * as Colors from "../style/colors";
import * as Base from "../style/base";

const ThanksContainer = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${Colors.LIGHT_GREY};
  margin: auto;
  text-align: center;
  margin-top: 1rem;
  padding: 2rem;
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
  margin-bottom: 3rem;
`;

const Success = () => (
  <Container>
    <ThanksContainer>
      <h2>
        Thanks for giving me your details. I shall spam you and sell your
        details*
      </h2>
      <ThanksCopy>
        Just kidding, I will probably drop you a nice email to say hello.
      </ThanksCopy>
      <BackLink to="/about">Back</BackLink>
    </ThanksContainer>
  </Container>
);

export default Success;
