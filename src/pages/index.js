import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CanvasCircles from "../components/shared/CanvasCircles"

const Line = styled.hr`
  width: 25%;
  border: 4px solid coral;
  height: auto;
  margin: 10px auto;
`

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/1.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      me: file(relativePath: { eq: "images/2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="animated-bg">
        <CanvasCircles />
      </div>
      <Layout>
        <SEO
          title="Home"
          description="Welcome to my CV site. I created it to show my skills and give opportunity to future projects to see my real work."
        />
        <div className="text-center profile-block">
          <Img
            className="profile-image d-flex justify-content-center"
            fluid={image.me.childImageSharp.fluid}
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
          <div className="profile-title">
            <h1>Anastasiya Piulskaya</h1>
            <h3 className="text-muted">
              <i>Full-stack javascript developer</i>
            </h3>
          </div>
          <div className="social-links text-center">
            <div className="social-link">
              <a
                href="https://github.com/Nastya-Piu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
            </div>
            <div className="social-link">
              <a
                href="https://www.linkedin.com/in/anastasiya-piulskaya-50858998/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
            <div className="social-link">
              <a href="mailto: workwithpiu@gmail.com">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
        <p>
          My name is Nastya and I am full-stack javascript engineer. I have
          experience in programming for almost 7 years. I like programming and
          good at it. First I started with Flex/ActionScript, after that I have
          been working on project with AngularJS in Front-end and NodeJs REST
          services for almost 2 years. I was responsible for both parts and
          worked with SQL queries to MySQL database. After a while I started to
          use Angular 2+ (started with version 4) and used it in my last two
          projects.
        </p>

        {/* <div>
        <Img fluid={image.background.childImageSharp.fluid} />
      </div> */}
      </Layout>
    </>
  )
}

export default IndexPage
