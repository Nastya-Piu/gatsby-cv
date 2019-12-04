import React from "react"
import styles from "./ProjectCard.module.scss"
import Img from "gatsby-image"

const ProjectCard = ({ project }) => {
  const { name, site, image, technologies, description } = project

  return (
    <div className="col-md-6" style={{ position: "relative" }}>
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
      {technologies && technologies.length && (
        <div>
          {technologies.map(technology => (
            <div className={styles.technology}>{technology}</div>
          ))}
        </div>
      )}
      <div>
        <div className={styles.imageWrapper}>
          {image && <Img fluid={image.childImageSharp.fluid} />}
          {description && (
            <div className={styles.projectDescription}>{description}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
