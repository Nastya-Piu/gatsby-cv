import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/1.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About me" />
      <h1>About me</h1>
      <p>I love programming and other things</p>
      <div className="row">
        <div className="col-md-6">
          <Img fluid={image.file.childImageSharp.fluid} />
        </div>
        <div className="col-md-6">
          <div className="social-links">
            <div className="social-link">
              <a
                href="https://github.com/Nastya-Piu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} />
              </a>
            </div>
            <div className="social-link">
              <a
                href="https://www.linkedin.com/in/anastasiya-piulskaya-50858998/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
            <div className="social-link">
              <a href="mailto: workwithpiu@gmail.com">
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
