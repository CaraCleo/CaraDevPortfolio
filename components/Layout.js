import Header from './Header';
import React, { Component } from "react"
 //Google analytics:
import { initGA, logPageView } from "./googleAnalytics.js"
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

//I have used some bootstrap elements in my portfolio, hence why I linked to them in the head section
export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
