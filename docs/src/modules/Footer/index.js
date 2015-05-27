import React, {Component} from "react"

import SVGIcon from "../SVGIcon"
import requireRaw from "../requireRaw"

export default class Footer extends Component {

  static displayName = "Footer"

  render() {
    return (
      <footer className="cssnext-Footer">
        <p>
          <SVGIcon
            svg={requireRaw("./src/assets/cssnext.svg")}
            className="cssnext-Logo-img"
            style={{
              height: "1rem",
              verticalAlign: "middle",
            }}
          />
          {" is brought to you by "}
          <a href="https://twitter.com/MoOx">@MoOx</a>
          {" & "}
          <a href="https://github.com/cssnext/cssnext/graphs/contributors">
            some other contributors
          </a>.
        </p>
        <small>
          <a href="it-s-cssnext-not-CSSNext">
            Note: it's cssnext, not CSSNext
          </a>
        </small>
      </footer>
    )
  }
}
