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

const FooterItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const ContactForm = () => (
  <form
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
        Your name <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your email <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Your message <textarea name="message" />
      </label>
    </p>
    <p>
      <button>Send</button>
    </p>
  </form>
);

export default ContactForm;
