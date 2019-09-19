import React from "react"
import PropTypes from "prop-types"

import Logo from "./pics/album-placeholder.jpeg";

export default class Album extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render () {
    const { index } = this.props
    const albumLink = `tracks/${index+1}`
    return (

      <div className = "album">
        <div className = "imageDiv">
          <a href = {albumLink}>
            <img alt="album artwork" className="ablumImg" src={Logo}></img>
          </a>
        </div>
        <div className = "albumInfo">
          <h1>Album Title {index+1}</h1>
          <h2>Artist Name</h2>
          <h2>Release Date</h2>

        </div>
      </div>

    );
  }
}
