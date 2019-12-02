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
        There are some primary projects that I want to share with. The first
        project - is <b>Tripstore</b>. It is implementation of Travel portal
        with information about countries, cities, showplaces, tours and tour
        agencies. This app includes two parts: one for travelers and one for
        travel agencies (admin part). The second project - is{" "}
        <b>Banknotes Learning system</b> for those who want to know everything
        about selected currencies and their banknotes to check their
        authenticity. Project offers to create groups for chosen course and
        watch their learning statistics. Or you can listen course individually.
        Student should read theory part and then pass some tests to check their
        knowledge’s. The third project - is <b>StackTome</b>. The mission of
        that project is to increase e-commerce shops revenue by segmenting
        customers in different categories based on sales data and run marketing
        strategy compatible for this segment. The last project I worked on
        called <b>Inspectorio</b>. Inspectorio is a platform for quality control
        and compliance monitoring. It digitizes and optimizes the compliance
        process and brings transparency to supply chains leveraging machine
        learning, mobile technologies and IoT.
      </p>
      <div className="row">
        {projects.map(({ node }) => (
          <ProjectCard key={node.name} project={node} />
        ))}
      </div>
    </>
  )
}
