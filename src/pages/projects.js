import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      description="There is a page that collects most presentative projects which were built with Angular, React, HTML, CSS, JavaSript. "
    />
    <Projects />
  </Layout>
)

export default ProjectsPage
