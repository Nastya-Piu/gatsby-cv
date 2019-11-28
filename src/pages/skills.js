import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <p>
        Some text about my best skills. This is description of some of my
        skills, what frameworks I used, what libraries I prefer. This is
        description of some of my skills, what frameworks I used, what libraries
        I prefer. This is description of some of my skills, what frameworks I
        used, what libraries I prefer.
      </p>
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
