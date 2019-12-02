import React, { Component } from "react"

const circlesCount = 200
const colorArray = ["#046975", "#2EA1D4", "#4cadb9", "#81b5f1", "#20233a"]

const debounce = func => {
  let timer
  return event => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, 100, event)
  }
}

const Circle = function(x, y, dx, dy, radius, speed = 0.9, width) {
  this.x = x
  this.y = y
  this.speed = speed
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.width = width
  this.counter = 0
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
  this.opacity = 0.05 + Math.random() * 0.5

  var signHelper = Math.floor(Math.random() * 2)

  if (signHelper === 1) {
    this.sign = -1
  } else {
    this.sign = 1
  }

  this.update = function(context) {
    this.counter += this.sign * this.speed
    context.beginPath()
    context.arc(
      this.x + Math.cos(this.counter / 100) * 40,
      this.y + Math.sin(this.counter / 100) * 40,
      this.radius,
      0,
      Math.PI * 2,
      false
    )
    context.closePath()
    context.fillStyle = "rgba(76, 173, 185," + this.opacity + ")"
    context.fill()
  }
}

class CanvasCircles extends Component {
  constructor() {
    super()
    this.canvasRef = React.createRef()
    this.reqRef = null

    this.state = {
      circleArray: [],
      context: null,
    }
  }

  animate() {
    this.state.context.clearRect(0, 0, window.innerWidth, 300)
    for (let i = 0; i < this.state.circleArray.length; i++) {
      this.state.circleArray[i].update(this.state.context)
    }

    this.reqRef = requestAnimationFrame(() => {
      this.animate()
    })
  }

  init(canvas) {
    canvas.width = window.innerWidth
    canvas.height = 300
    const context = this

    this.setState(
      { circleArray: [] },
      function() {
        for (let i = 0; i < circlesCount; i++) {
          const radius = Math.random() * 3 + 1
          const x = Math.random() * (window.innerWidth - radius * 2) + radius
          const y = Math.random() * (300 - radius * 2) + radius
          const dx = (Math.random() - 0.1) * 2
          const dy = (Math.random() - 0.1) * 2
          const size = 5 + Math.random() * 50
          context.state.circleArray.push(
            new Circle(x, y, dx, dy, radius, 0.9, size)
          )
        }
        context.animate()
      }.bind(context)
    )
  }

  componentDidMount() {
    const canvas = this.canvasRef.current
    const context = canvas.getContext("2d")
    this.setState({ context: context }, function() {
      this.init(canvas)
    })

    window.addEventListener(
      "resize",
      debounce(() => {
        if (this.reqRef) cancelAnimationFrame(this.reqRef)
        this.init(canvas)
      })
    )
  }

  render() {
    return <canvas ref={this.canvasRef} width="100%" height="100%" />
  }
}

export default CanvasCircles
