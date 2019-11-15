import React from "react"
import styles from "./ProjectCard.module.scss"
import Img from "gatsby-image"

const ProjectCard = ({ project }) => {
  const { name, site, image, technologies } = project

  return (
    <div className="col-md-6">
      <h3>{name}</h3>
      <p>
        <a className={styles.projectLink} href={site} target="_blank">
          {site}
        </a>
      </p>
      {technologies.length && (
        <div>
          {technologies.map(technology => (
            <span className={styles.technology}>{technology}</span>
          ))}
        </div>
      )}
      {image && (
        <div className={styles.imageWrapper}>
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      )}
    </div>
  )
}

export default ProjectCard
