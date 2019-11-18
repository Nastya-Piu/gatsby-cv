import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Technology from "../components/shared/Technology"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allTechnologiesJson {
        edges {
          node {
            name
            level
            year
          }
        }
      }
    }
  `)

  const skills = data.allTechnologiesJson.edges

  return (
    <Layout>
      <SEO title="Thechnologies and skills" />
      <h1>Thechnologies and skills</h1>
      <div>
        {skills.map(({ node }) => (
          <Technology
            key={node.name}
            title={node.name}
            year={node.year}
            level={node.level}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Skills
