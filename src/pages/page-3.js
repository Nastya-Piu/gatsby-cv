import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 33333333</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <code>
      const app = 'App'; <br />
      const number = 123; <br />
      console.log(app+number);
    </code>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
