import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./shared/ProjectCard"

export default () => {
  const projectsData = useStaticQuery(graphql`
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

  const projects = projectsData.allProjectsJson.edges

  return (
    <>
      <h1>Projects</h1>
      <p>
        This is some text about projects I have been working on. There was
        different processes, technologies, methodology. There was different
        processes, technologies, methodology. There was different processes,
        technologies, methodology.
      </p>
      <div className="row">
        {projects.map(({ node }) => (
          <ProjectCard key={node.name} project={node} />
        ))}
      </div>
    </>
  )
}
