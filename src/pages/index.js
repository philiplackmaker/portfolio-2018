import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";

const Page = styled.div`
  margin: 0;
  padding: 0;
`;


const IndexPage = () => (
  <Page>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Page>
)

export default IndexPage
