import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          name
          site
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

const Projects = () => {}

export default Projects
