import React from "react"
import styles from "./ProjectCard.module.scss"
import Img from "gatsby-image"

const ProjectCard = ({ project }) => {
  const { name, site, image, technologies, description } = project

  return (
    <div className="col-md-6">
      <h2>{name}</h2>
      <b>
        <a
          className={styles.projectLink}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site}
        </a>
      </b>
      <p>{description}</p>
      {technologies.length && (
        <div>
          {technologies.map(technology => (
            <div className={styles.technology}>{technology}</div>
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
