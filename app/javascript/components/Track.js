import React from "react"
import PropTypes from "prop-types"

import PlayButton from './pics/play-button.png'

export default class Track extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render () {
    const { ind } = this.props
    return (

      <div className = "track">
        <img src = {PlayButton} className = "playButton"></img>
        <div className = "trackInfo">
          <p className = "trackTitle">track{ind+1}</p>
          <p className = "trackArtist">Artist Name - ft. Artist</p>
          <p className = "trackAlbum">Album Name</p>
          <p className = "trackTime">3:00</p>
        </div>
      </div>

    );
  }
}
