import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

const Level = styled.div`
  height: 30px;
  max-width: 400px;
  margin: 10px 0;
  color: white;
  font-weight: bold;
`

const LevelBar = styled.div`
  background-color: #4cadb9;
  height: 100%;
  opacity: 0;
  padding: 2px 6px;
  transition: all ease-in-out 0.5s;
`

const Technology = ({ title, year, level }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (!animate)
      setTimeout(() => {
        setAnimate(true)
      }, 500)
  }, [])

  const levelStyle = state => {
    return {
      width: `${state === "entered" || state === "entering" ? level : 0}%`,
      opacity: `${state === "entered" || state === "entering" ? 1 : 0}`,
    }
  }

  return (
    <div>
      <div>
        <b>{title}</b>
        <small className="text-muted"> from {year}</small>
      </div>
      <Level>
        <Transition in={animate} timeout={500}>
          {state => <LevelBar style={levelStyle(state)}>{level} %</LevelBar>}
        </Transition>
      </Level>
    </div>
  )
}

export default Technology
