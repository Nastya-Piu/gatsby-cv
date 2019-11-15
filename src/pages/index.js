import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Anastasiya Piuslkaya</h1> */}
    <p>Welcome to my new CV site. Now I will tell you who I am.</p>
    <p>
      My name is Nastya. I am 26 years old and I have been in programming for 6
      years. I started from ActionScript/Flex
    </p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
