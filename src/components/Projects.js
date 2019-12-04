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
            description
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
        There are some primary projects that I want to share with. There are
        some descriptions of projects below their images. All these projects
        give me a good experience and knowledges and I am glad that I have
        worked on it.
      </p>
      <div className="row">
        {projects.map(({ node }) => (
          <ProjectCard key={node.name} project={node} />
        ))}
      </div>
    </>
  )
}
