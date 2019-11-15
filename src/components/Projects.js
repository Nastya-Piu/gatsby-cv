import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./shared/ProjectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            site
            technologies
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <>
      <h2>Projects:</h2>
      <div className="row">
        {projects.map(({ node }) => (
          <ProjectCard key={node.name} project={node} />
        ))}
      </div>
    </>
  )
}

export default Projects
