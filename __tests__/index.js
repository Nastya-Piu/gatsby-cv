import React from "react"
import renderer from "react-test-renderer"
import Index from "../src/pages/index"
import { StaticQuery } from "../__mocks__/gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => {
    render({
      image: {
        me: {
          childImageSharp: {
            fluid: "some data",
          },
        },
      },
    })
  })
})

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
