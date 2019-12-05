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
      <h4>Here is key frames animation testing</h4>
      <div className="keyframe-try">
        <div>Wow!</div>
      </div>
      <h4>Here is pure css image</h4>
      <div className="pure-css-img">
        <div className="box">
          <div className="head">
            <div className="head-copy"></div>
            <div className="ear-left">
              <div className="inner-ear"></div>
            </div>
            <div className="ear-right">
              <div className="inner-ear"></div>
            </div>
            <div class="eye-left">
              <div class="pupil"></div>
            </div>
            <div class="eye-right">
              <div class="pupil"></div>
            </div>
            <div class="nose"></div>
            <div class="hair-left"></div>
            <div class="hair-right"></div>
          </div>
        </div>
      </div>

      <h4>Here is a solar system</h4>
      <div className="solar-system">
        <ul>
          <li id="earth" itemScope>
            <h2 itemProp="object">Earth</h2>
            <dl>
              <dt>Description</dt>
              <dd itemProp="description">
                Earth is an ocean planet. Bla-bla-bla
              </dd>
              <dt>Diameter</dt>
              <dd itemprop="diameter">
                12,755 <abbr title="kilometers">km</abbr>
              </dd>
              <dt>Distance from sun</dt>
              <dd itemprop="distance">
                150×10<sup>6</sup> <abbr title="kilometers">km</abbr>
              </dd>
              <dt>Orbital period</dt>
              <dd itemprop="orbit">
                365<abbr title="days">d</abbr>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experiments
