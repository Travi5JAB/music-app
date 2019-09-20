import React from "react"
import PropTypes from "prop-types"

import Album from './Album'
import Track from './Track'

export default class Tracks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          tracks: [0,0,0,0,0,0,0,0]
        }
    }

  render () {
    const { index } = this.props.match.params
    const { tracks } =  this.state
    const allTracks = tracks.map((track,ind) => {
      return(
        <Track
          ind = {ind}
        />
      )
    })
    return (

      <div className = "tracks">
        <Album
          index = {index-1}
        />
        <h1>Songs</h1>
        <div className = "tracksTableTop">
          <h2 className = "title">Title</h2>
          <h2 className = "artist">Artist</h2>
          <h2 className = "album">Album</h2>
          <h2 className = "time">Time</h2>
        </div>
        {allTracks}



      </div>

    );
  }
}
