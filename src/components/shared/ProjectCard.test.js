import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import ProjectCard from "./ProjectCard"

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("Render project properties", () => {
  const project = {
    name: "Test project",
    site: "http://simple.com",
    description: "Some test description",
    technoloogies: ["HTML", "CSS"],
  }

  act(() => {
    render(<ProjectCard project={project} />, container)
  })
  expect(container.querySelector("h2").textContent).toBe("Test project")
  expect(container.querySelector("a").textContent).toBe("http://simple.com")
  expect(container.querySelector("p").textContent).toBe("Some test description")
})
