import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router } from 'react-router-dom'

import Routes from './Routes'
import Nav from './Nav'


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render () {
    return (

      <Router>
        <Nav/>
        <div className = "buffer"></div>
        <Routes/>
      </Router>

    );
  }
}
