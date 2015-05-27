import React, {Component, PropTypes} from "react"

import Header from "../Header"
import Footer from "../Footer"
import Analytics from "../Analytics"

export default class Body extends Component {

  static displayName = "Body"

  static defaultProps = {
    scripts: [],
    footer: true,
  }

  static contextTypes = {
    pkg: PropTypes.object.isRequired,
    file: PropTypes.object.isRequired,
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    scripts: PropTypes.array,
    footer: PropTypes.bool,
  }

  render() {
    return (
      <body className="cssnext-Body">

        <Header />

        {this.props.children}

        { this.props.footer && <Footer />}
        {
          this.props.scripts.map(script => (
            <script key={script} src={script}></script>
          ))
        }

        <Analytics />
      </body>
    )
  }
}
