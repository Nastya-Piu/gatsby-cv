import React from "react"
import "./experiments.scss"

const Experiments = () => {
  return (
    <div className="container">
      <h4>Here is the flex box testing</h4>
      <div className="flex-try">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </div>
      <br />
      <h4>Here is grid testing</h4>
      <div className="grid-try">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
      </div>
    </div>
  )
}

export default Experiments
