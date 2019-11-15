import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Technology from "../components/shared/Technology"

const SecondPage = () => (
  <Layout>
    <SEO title="Thechnologies and skills" />
    <h1>Thechnologies and skills</h1>
    <div>
      <Technology title="HTML" year="2010" level="senior" />
      <Technology title="CSS" year="2010" level="senior" />
      <Technology title="JavaScript" year="2010" level="senior" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
