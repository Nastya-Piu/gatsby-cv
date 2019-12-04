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
        Here I will try to describe some of my skills. First of all, I need to
        mention basic web thechnologies like HTML, CSS, JavaScript and XML.
        Those languages I was learned in the University. Also we were learned
        Java, C, C++, C#, but it was just introductionary.
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
      <p>
        At my first job I was build some web components in ActionScript/Flex.
        After a while I started to learn AngularJs. Later, I was intended to
        learn Node.js to have opportunity to build back-end part of application
        without learning a new language. Through the time the new Angular 2 was
        released, so I was tried it too and used it for the 3 projects. And the
        last tool that I tried was React and since that I use it in my work.
      </p>
    </Layout>
  )
}

export default Skills
