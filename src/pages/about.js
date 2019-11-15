import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p>I love programming and other things</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
