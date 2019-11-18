import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Welcome to my new CV site. My name is Nastya. I have been in programming
      for almost 6 years. First I started with Flex/ActionScript, after that I
      have been working on project with AngularJS in Front-end and NodeJs REST
      services for almost 2 years. I was responsible for both parts and worked
      with SQL queries to MySQL database. After a while I started to use Angular
      2+ (started with version 4) and used it in my last two projects.
    </p>
    <Projects />
  </Layout>
)

export default IndexPage
