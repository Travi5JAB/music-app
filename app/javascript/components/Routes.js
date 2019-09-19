import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from 'react-router-dom'

////parts
import Albums from './Albums'
import Home from './Home'
import Tracks from './Tracks'


class Routes extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  render () {

    return (
      <Switch>
        <Route exact path="/"
         component={(props) =>
           <Home
            {...props}
           />
         }
         />
        <Route exact path="/albums"
         component={(props) =>
           <Albums
            {...props}
           />
         }
         />
        <Route exact path="/tracks/:index"
         component={(props) =>
           <Tracks
            {...props}
           />
         }
         />
      </Switch>
    )
  }
}

export default Routes
