import React from "react";
import FooterLinks from "../components/footerlinks";
import FooterLinksBlog from "../components/footerlinksblog";
import styled from "styled-components";
import * as Base from "../style/base";
import * as Type from "../style/typography";
import { Link } from "gatsby";
import * as Colors from "../style/colors";
import * as BreakPoints from "../style/breakpoints";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 3 / span 8;
  }
`;

const ButtonSmall = styled.button`
  border: none;
  margin-left: auto;
  display: inline;
  text-align: center;
  background-color: ${Colors.PRIMARY};
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  :visited,
  :active {
    border: none;
  }
  ${BreakPoints.SMALL} {
    float: center;
  }
  ${BreakPoints.MEDIUM} {
    float: center;
  }
`;

const ButtonText = styled.text`
  ${Type.SMALLBODY};
  text-algin: center;
  padding: 0;
  margin: 0;
  color: ${Colors.WHITE};
`;

const FormFieldContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

const FormLable = styled.text`
  ${Type.BODY};
  vertical-align: top;
  display: block;
  ${BreakPoints.SMALL} {
    text-align: left;
  }
  ${BreakPoints.MEDIUM} {
    text-align: left;
  }
  ${BreakPoints.LARGE} {
    text-align: left;
  }
  ${BreakPoints.XLARGE} {
    text-align: left;
  }
`;

const FormInput = styled.input`
  border: 3px solid ${Colors.MEDIUM_GREY};
  border-radius: 0;
  margin-bottom: 2rem;
  width: 100%;
  height: 50px;
`;

const MessageInput = styled.textarea`
  border: 3px solid ${Colors.MEDIUM_GREY};
  border-radius: 0;
  height: 150px;
  margin-bottom: 2rem;
  max-width: 100%;
  min-width: 100%;
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
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <FormLable>
        Name <FormInput type="text" name="name" />
      </FormLable>
      <FormLable>
        Email <FormInput type="email" name="email" />
      </FormLable>
      <FormLable>
        Message
        <MessageInput name="message" />
      </FormLable>
    </FormFieldContiner>
    <ButtonSmall>
      <ButtonText>Send</ButtonText>
    </ButtonSmall>
  </FormContainer>
);

export default ContactForm;
