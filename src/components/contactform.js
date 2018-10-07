import React from "react";
import FooterLinks from "../components/footerlinks";
import FooterLinksBlog from "../components/footerlinksblog";
import styled from "styled-components";
import * as Base from "../style/base";
import * as Type from "../style/typography";
import { Link } from "gatsby";
import * as Colors from "../style/colors";
import * as BreakPoints from "../style/breakpoints";

const FooterProject = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 2;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 2;
  }
`;

const FooterBlog = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.LARGE} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 4 / span 3;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 4 / span 3;
  }
`;

const FooterSite = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.LARGE} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 8 / span 2;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 8 / span 2;
  }
`;

const FooterContact = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 10 / span 2;
  }
  ${BreakPoints.LARGE} {
    grid-column: 10 / span 2;
  }
  ${BreakPoints.XLARGE} {
    grid-column: 10 / span 2;
  }
  ${BreakPoints.XXLARGE} {
    grid-column: 10 / span 2;
  }
`;

const FooterTitles = styled.div`
  ${Type.TINYHEADER};
  margin-bottom: 1rem;
`;

const FooterLinksText = styled(Link)`
  text-decoration: none;
  ${Type.SMALLBODY};
  transition: all 0.4s ease-in;
  :link,
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

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  grid-column: 1 / span 12;
`;

const ButtonSmall = styled.button`
  grid-column: 3 / span 3;
  border: none;
  margin-top: 20px;
  padding: 50px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  :visited,
  :active {
    border: none;
  }
  ${BreakPoints.SMALL} {
    display: flex;
    width: 0;
    height: 0;
    border: none;
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
    height: 50px;
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
    width: 200px;
    height: 50px;
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
    width: 200px;
    height: 50px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
  ${BreakPoints.XXLARGE} {
    background-color: ${Colors.PRIMARY};
    &:hover {
      transform: scale(1.1);
      border: none;
    }
    width: 200px;
    height: 50px;
    border: none;
    margin-top: 20px;
    padding: 16px;
  }
`;

const ButtonText = styled.text`
  ${Type.SMALLBODY};
  text-algin: center;
  padding: 0;
  margin: 0;

  ${BreakPoints.MEDIUM} {
    color: ${Colors.WHITE};
  }
`;

const FormFieldContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const FormLable = styled.text`
  ${Type.BODY};
  text-algin: right;
  flex: 1 0 10px;
  padding: 15px;
`;

const FormInput = styled.input`
  border: 3px solid ${Colors.MEDIUM_GREY};
  border-radius: 0;
  width: 400px;
  padding: 15px;
  margin-left: 30px;
  margin-bottom: 1rem;
`;

const ContactForm = () => (
  <FormContainer
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <FormFieldContiner>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <FormLable>
          Don’t fill this out: <FormInput name="bot-field" />
        </FormLable>
      </p>
      <FormLable>
        Your name <FormInput type="text" name="name" />
      </FormLable>
      <FormLable>
        Your email <FormInput type="email" name="email" />
      </FormLable>

      <FormLable>
        Your message <FormInput name="message" />
      </FormLable>
    </FormFieldContiner>

    <ButtonSmall>
      <ButtonText>Send</ButtonText>
    </ButtonSmall>
  </FormContainer>
);

export default ContactForm;
