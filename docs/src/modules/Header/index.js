import React, {Component, PropTypes} from "react"

import SVGIcon from "../SVGIcon"
import requireRaw from "../requireRaw"

import Link from "./link"

export default class Header extends Component {

  static displayName = "Header"

  static contextTypes = {
    file: PropTypes.object.isRequired,
  }

  render() {
    return (
      <header className="cssnext-Header">
        <div className="r-Grid">
          <div className="r-Grid-cell r-minM--4of6">
            <span className="cssnext-Nav">
              <a
                className="cssnext-Logo"
                href="/"
              >
                <SVGIcon
                  cleanup
                  svg={requireRaw("./src/assets/cssnext.svg")}
                  className="cssnext-Logo-img"
                />
              </a>
              <Link href={"/features/"}>
                Features
              </Link>
              <Link href={"/setup/"}>
                Setup
              </Link>
              <Link href={"/usage/"}>
                Usage
              </Link>
              <Link href={"/playground/"}>
                Playground
              </Link>
            </span>
          </div>
          <div className="r-Grid-cell r-minM--2of6">
            <div className="cssnext-Nav">
              <Link href="https://gitter.im/cssnext/cssnext">
                Support
              </Link>
              <Link href="https://github.com/cssnext/cssnext" title="GitHub">
                GitHub
              </Link>
              <Link href="https://twitter.com/cssnext" title="Twitter">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
