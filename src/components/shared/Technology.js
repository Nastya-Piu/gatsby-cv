import React from "react"

const Technology = ({ title, year, level }) => {
  return (
    <div>
      <h2>
        {title}
        <small className="text-muted"> Since {year}</small>
      </h2>
      <p>Level: {level}</p>
    </div>
  )
}

export default Technology
