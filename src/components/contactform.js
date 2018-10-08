import React from "react";
import FooterLinks from "../components/footerlinks";
import FooterLinksBlog from "../components/footerlinksblog";
import styled from "styled-components";
import * as Base from "../style/base";
import * as Type from "../style/typography";
import { Link } from "gatsby";
import * as Colors from "../style/colors";
import * as BreakPoints from "../style/breakpoints";
import "../style/globals";

const FormContainer = styled.form`
  grid-column: 2 / span 8;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
`;

const ButtonSmall = styled.button`
  border: none;
  float: right;
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
  justify-content: space-between;
  flex-direction: column;
`;

const FormLable = styled.text`
  ${Type.BODY};
  vertical-align: top;
  text-align: right;
  display: block;
  padding: 15px;
`;

const FormInput = styled.input`
  border: 3px solid ${Colors.MEDIUM_GREY};
  vertical-align: top;
  border-radius: 0;
  width: 500px;
  padding: 15px;
  margin-left: 30px;
  margin-bottom: 1rem;
`;

const MessageInput = styled.textarea`
  border: 3px solid ${Colors.MEDIUM_GREY};
  vertical-align: top;
  grid-column: 3 / span 3;
  border-radius: 0;
  height: 150px;
  max-width: 500px;
  min-width: 500px;
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
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
    <p>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email: <input type="email" name="email" />
      </label>
    </p>

    <p>
      <label>
        Messageyp: <textarea name="message" />
      </label>
    </p>
    <ButtonSmall>
      <ButtonText>Send</ButtonText>
    </ButtonSmall>
  </FormContainer>
  // <FormContainer
  //   name="contact"
  //   method="POST"
  //   data-netlify="true"
  //   data-netlify-honeypot="bot-field"
  // >
  //   <FormFieldContiner>
  //     <input type="hidden" name="form-name" value="contact" />
  //     <p hidden>
  //       <label>
  //         Don’t fill this out: <input name="bot-field" />
  //       </label>
  //     </p>
  //     <FormLable>
  //       Name <FormInput type="text" name="name" />
  //     </FormLable>
  //     <FormLable>
  //       Email <FormInput type="email" name="email" />
  //     </FormLable>
  //     <FormLable>
  //       Message
  //       <MessageInput name="message" />
  //     </FormLable>
  //   </FormFieldContiner>
  //   <button>send</button>
  //   <ButtonSmall>
  //     <ButtonText>Send</ButtonText>
  //   </ButtonSmall>
  // </FormContainer>
);

export default ContactForm;
