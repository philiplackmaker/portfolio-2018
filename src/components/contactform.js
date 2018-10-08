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
  align-self: center;
  flex-direction: column;
  justify-content: center;
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 6;
  }
  ${BreakPoints.MEDIUM} {
    grid-column: 2 / span 8;
  }
`;

const ButtonSmall = styled.button`
  border: none;
  margin-left: auto;
  display: inline;
  text-align: center;
  background-color: ${Colors.PRIMARY};
  width: 160px;
  height: 50px;
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
    float: right;
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
  padding: 15px;
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
    text-align: right;
  }
`;

const FormInput = styled.input`
  border: 3px solid ${Colors.MEDIUM_GREY};
  vertical-align: top;
  border-radius: 0;
  padding: 15px;
  margin-left: 30px;
  margin-bottom: 1rem;
  ${BreakPoints.SMALL} {
    width: 200px;
  }
  ${BreakPoints.MEDIUM} {
    width: 500px;
  }
`;

const MessageInput = styled.textarea`
  border: 3px solid ${Colors.MEDIUM_GREY};
  vertical-align: top;
  grid-column: 3 / span 3;
  border-radius: 0;
  height: 150px;
  padding: 15px;
  margin-left: 30px;
  margin-bottom: 1rem;
  ${BreakPoints.SMALL} {
    max-width: 200px;
    min-width: 200px;
  }
  ${BreakPoints.MEDIUM} {
    max-width: 500px;
    min-width: 500px;
  }
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
