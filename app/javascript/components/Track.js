import React from "react"
import PropTypes from "prop-types"



export default class Track extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    playSong(){

    }
    stopSong(){

    }

  render () {
    const { ind } = this.props
    return (

      <div className = "track">
        <div className = "trackInfo">
          <p className = "trackTitle">track{ind+1}</p>
          <p className = "trackArtist">Artist Name - ft. Artist</p>
          <p className = "trackAlbum">Album Name</p>
          <p className = "trackTime">3:00</p>
          <div className = "playBar">
            <audio ref= "audio_tag" src = "sample.mp3" controls>
            </audio>
          </div>
        </div>
      </div>

    );
  }
}
