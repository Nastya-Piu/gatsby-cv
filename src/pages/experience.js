import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allExperienceJson {
        edges {
          node {
            company
            notes
            position
            time
            year
          }
        }
      }
    }
  `)

  const { edges } = data.allExperienceJson

  return (
    <Layout>
      <SEO title="About me" />
      <h1>Experience</h1>
      <p>
        Here is some info about my experience in different companies. Also I
        mentioned in which parts I was taking action. I appreciate that
        experience that I received, because its invaluable.
      </p>
      <div className="experience-block">
        {edges.map(({ node }) => (
          <div className="experience-item" key={node.company}>
            <div className="experience-year">{node.year || "Now"}</div>
            <div className="text-muted">
              {node.position} at {node.company}
            </div>
            <p>{node.notes}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Experience
